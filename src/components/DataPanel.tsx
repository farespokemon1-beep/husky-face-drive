import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Thermometer, 
  Zap, 
  Gauge,
  Wifi,
  HardDrive
} from "lucide-react";

export const DataPanel = () => {
  const [sensorData, setSensorData] = useState({
    temperature: 42,
    voltage: 8.4,
    current: 1.2,
    cpuUsage: 35,
    memoryUsage: 68,
    signalStrength: 85
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        temperature: Math.max(35, Math.min(55, prev.temperature + (Math.random() - 0.5) * 3)),
        voltage: Math.max(7.0, Math.min(9.0, prev.voltage + (Math.random() - 0.5) * 0.2)),
        current: Math.max(0.5, Math.min(2.0, prev.current + (Math.random() - 0.5) * 0.1)),
        cpuUsage: Math.max(20, Math.min(80, prev.cpuUsage + (Math.random() - 0.5) * 10)),
        memoryUsage: Math.max(50, Math.min(90, prev.memoryUsage + (Math.random() - 0.5) * 5)),
        signalStrength: Math.max(70, Math.min(100, prev.signalStrength + (Math.random() - 0.5) * 8))
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return "success";
    if (value <= thresholds.warning) return "warning";
    return "destructive";
  };

  return (
    <Card className="glass panel-shadow border-border/50 p-6">
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">System Status</h3>
        </div>

        {/* Real-time Data Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Temperature */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Thermometer className="h-4 w-4 text-warning" />
                <span className="text-sm font-medium">Temperature</span>
              </div>
              <Badge 
                variant={sensorData.temperature > 50 ? "destructive" : "outline"}
                className="font-mono"
              >
                {sensorData.temperature.toFixed(1)}°C
              </Badge>
            </div>
            <Progress 
              value={(sensorData.temperature / 60) * 100} 
              className="h-2"
            />
          </div>

          {/* Voltage */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Voltage</span>
              </div>
              <Badge 
                variant={sensorData.voltage < 7.5 ? "destructive" : "outline"}
                className="font-mono"
              >
                {sensorData.voltage.toFixed(1)}V
              </Badge>
            </div>
            <Progress 
              value={(sensorData.voltage / 9) * 100} 
              className="h-2"
            />
          </div>

          {/* Current */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Current</span>
              </div>
              <Badge 
                variant="outline"
                className="font-mono"
              >
                {sensorData.current.toFixed(1)}A
              </Badge>
            </div>
            <Progress 
              value={(sensorData.current / 2) * 100} 
              className="h-2"
            />
          </div>

          {/* Signal Strength */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Wifi className="h-4 w-4 text-success" />
                <span className="text-sm font-medium">Signal</span>
              </div>
              <Badge 
                variant={sensorData.signalStrength > 80 ? "default" : "outline"}
                className="font-mono"
              >
                {sensorData.signalStrength}%
              </Badge>
            </div>
            <Progress 
              value={sensorData.signalStrength} 
              className="h-2"
            />
          </div>
        </div>

        {/* System Performance */}
        <div className="space-y-4 pt-4 border-t border-border/50">
          <h4 className="text-sm font-medium text-muted-foreground">System Performance</h4>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Gauge className="h-4 w-4 text-primary" />
                <span className="text-sm">CPU Usage</span>
              </div>
              <span className="text-sm font-mono text-muted-foreground">
                {sensorData.cpuUsage}%
              </span>
            </div>
            <Progress value={sensorData.cpuUsage} className="h-2" />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <HardDrive className="h-4 w-4 text-secondary" />
                <span className="text-sm">Memory Usage</span>
              </div>
              <span className="text-sm font-mono text-muted-foreground">
                {sensorData.memoryUsage}%
              </span>
            </div>
            <Progress value={sensorData.memoryUsage} className="h-2" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
          <div className="text-center space-y-1">
            <div className="text-lg font-mono font-bold text-primary">23.4</div>
            <div className="text-xs text-muted-foreground">Runtime (hrs)</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-lg font-mono font-bold text-accent">156</div>
            <div className="text-xs text-muted-foreground">Objects Tracked</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-lg font-mono font-bold text-secondary">98.7</div>
            <div className="text-xs text-muted-foreground">Accuracy (%)</div>
          </div>
        </div>
      </div>
    </Card>
  );
};