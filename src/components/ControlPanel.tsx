import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight, 
  Square, 
  Settings, 
  Zap,
  Eye,
  Navigation
} from "lucide-react";

export const ControlPanel = () => {
  const [mode, setMode] = useState<"face" | "line">("face");
  const [motorSpeed, setMotorSpeed] = useState([75]);
  const [autoMode, setAutoMode] = useState(false);

  const handleDirectionControl = (direction: string) => {
    console.log(`Moving ${direction}`);
  };

  return (
    <Card className="glass panel-shadow border-border/50 p-6">
      <div className="space-y-6">
        {/* Mode Selection */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Settings className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Control Mode</h3>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={mode === "face" ? "default" : "outline"}
              onClick={() => setMode("face")}
              className="flex-1"
            >
              <Eye className="h-4 w-4 mr-2" />
              Face Tracking
            </Button>
            <Button
              variant={mode === "line" ? "default" : "outline"}
              onClick={() => setMode("line")}
              className="flex-1"
            >
              <Navigation className="h-4 w-4 mr-2" />
              Line Following
            </Button>
          </div>
        </div>

        {/* Auto Mode */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-sm font-medium">Autonomous Mode</div>
            <div className="text-xs text-muted-foreground">
              Enable AI-controlled movement
            </div>
          </div>
          <Switch checked={autoMode} onCheckedChange={setAutoMode} />
        </div>

        {/* Motor Speed */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Motor Speed</span>
            </div>
            <Badge variant="outline" className="font-mono">
              {motorSpeed[0]}%
            </Badge>
          </div>
          <Slider
            value={motorSpeed}
            onValueChange={setMotorSpeed}
            max={100}
            min={0}
            step={5}
            className="w-full"
          />
        </div>

        {/* Manual Controls */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground">Manual Control</h4>
          <div className="grid grid-cols-3 gap-2">
            <div></div>
            <Button
              variant="outline"
              size="lg"
              onMouseDown={() => handleDirectionControl("forward")}
              disabled={autoMode}
              className="aspect-square"
            >
              <ArrowUp className="h-6 w-6" />
            </Button>
            <div></div>
            
            <Button
              variant="outline"
              size="lg"
              onMouseDown={() => handleDirectionControl("left")}
              disabled={autoMode}
              className="aspect-square"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="destructive"
              size="lg"
              onMouseDown={() => handleDirectionControl("stop")}
              className="aspect-square"
            >
              <Square className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onMouseDown={() => handleDirectionControl("right")}
              disabled={autoMode}
              className="aspect-square"
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
            
            <div></div>
            <Button
              variant="outline"
              size="lg"
              onMouseDown={() => handleDirectionControl("backward")}
              disabled={autoMode}
              className="aspect-square"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
            <div></div>
          </div>
        </div>

        {/* Current Status */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
          <div className="text-center space-y-1">
            <div className="text-sm text-muted-foreground">Current Mode</div>
            <Badge variant={mode === "face" ? "default" : "secondary"}>
              {mode === "face" ? "Face Tracking" : "Line Following"}
            </Badge>
          </div>
          <div className="text-center space-y-1">
            <div className="text-sm text-muted-foreground">Status</div>
            <Badge variant={autoMode ? "default" : "outline"}>
              {autoMode ? "Autonomous" : "Manual"}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};