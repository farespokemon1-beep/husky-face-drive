import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "connected" | "disconnected" | "warning" | "active";
  label: string;
  className?: string;
}

export const StatusIndicator = ({ status, label, className }: StatusIndicatorProps) => {
  const statusConfig = {
    connected: {
      color: "bg-success",
      glow: "shadow-[0_0_20px_hsl(var(--success)/0.5)]",
      text: "Connected"
    },
    disconnected: {
      color: "bg-destructive",
      glow: "shadow-[0_0_20px_hsl(var(--destructive)/0.5)]",
      text: "Disconnected"
    },
    warning: {
      color: "bg-warning",
      glow: "shadow-[0_0_20px_hsl(var(--warning)/0.5)]",
      text: "Warning"
    },
    active: {
      color: "bg-primary",
      glow: "shadow-[0_0_20px_hsl(var(--primary)/0.5)]",
      text: "Active"
    }
  };

  const config = statusConfig[status];

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <div className="relative">
        <div className={cn(
          "w-3 h-3 rounded-full animate-pulse",
          config.color,
          config.glow
        )} />
        <div className={cn(
          "absolute inset-0 w-3 h-3 rounded-full animate-ping",
          config.color,
          "opacity-50"
        )} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-xs text-muted-foreground font-mono">{config.text}</span>
      </div>
    </div>
  );
};