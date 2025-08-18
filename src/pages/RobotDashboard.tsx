import { CameraFeed } from "@/components/CameraFeed";
import { ControlPanel } from "@/components/ControlPanel";
import { DataPanel } from "@/components/DataPanel";
import { StatusIndicator } from "@/components/StatusIndicator";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Settings, 
  Power, 
  RefreshCw,
  AlertTriangle,
  CheckCircle 
} from "lucide-react";

const RobotDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      {/* Header */}
      <Card className="glass panel-shadow border-border/50 mb-6">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bot className="h-8 w-8 text-primary animate-pulse-glow" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-ping" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  HuskyLens Robot Control
                </h1>
                <p className="text-muted-foreground">
                  Arduino Uno • SMART V3.0 • AI Vision System
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <StatusIndicator 
                status="connected" 
                label="Arduino" 
                className="hidden md:flex"
              />
              <StatusIndicator 
                status="active" 
                label="HuskyLens" 
                className="hidden md:flex"
              />
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button variant="control" size="sm">
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="sm">
                  <Power className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Status Indicators */}
          <div className="flex md:hidden mt-4 space-x-4">
            <StatusIndicator status="connected" label="Arduino" />
            <StatusIndicator status="active" label="HuskyLens" />
          </div>
        </div>
      </Card>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Camera Feed - Takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <CameraFeed />
        </div>

        {/* Control Panel */}
        <div className="space-y-6">
          <ControlPanel />
          
          {/* Quick Actions */}
          <Card className="glass panel-shadow border-border/50 p-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-muted-foreground">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="justify-start">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Calibrate
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Emergency
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Hardware Overview */}
        <div className="lg:col-span-3">
          <Card className="glass panel-shadow border-border/50 mb-6">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Hardware Overview</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/a4fcfe58-a240-4124-bf0f-37ad7ed79142.png" 
                    alt="Arduino HuskyLens Robot Car - Detailed View"
                    className="w-full h-auto rounded-lg border border-border/20 shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">AI Face Tracking Robot Car</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This Arduino Uno R3-based robot features sophisticated AI vision capabilities powered by the HuskyLens camera module. 
                      The robust chassis houses a SMART V3.0 motor driver shield controlling four independent DC motors with yellow wheels. 
                      Equipped with dual ultrasonic sensors for obstacle detection and a dedicated battery pack for extended operation, 
                      this robot excels in both autonomous face tracking and precision line following applications.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Controller:</span>
                      <Badge variant="outline">Arduino Uno R3</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">AI Vision:</span>
                      <Badge variant="outline">HuskyLens Camera</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Motor Shield:</span>
                      <Badge variant="outline">SMART V3.0</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Drive System:</span>
                      <Badge variant="outline">4x DC Motors</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Capabilities:</span>
                      <div className="flex space-x-1">
                        <Badge variant="default" className="text-xs">Face Tracking</Badge>
                        <Badge variant="default" className="text-xs">Line Following</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Data Panel - Full width on mobile, spans remaining columns on large */}
        <div className="lg:col-span-3">
          <DataPanel />
        </div>
      </div>

      {/* Footer */}
      <Card className="glass panel-shadow border-border/50 mt-6">
        <div className="p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>System uptime: 23h 42m</span>
              <span>•</span>
              <span>Last update: 2s ago</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="font-mono">
                v2.1.0
              </Badge>
              <Badge variant="default" className="animate-pulse-glow">
                ONLINE
              </Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RobotDashboard;