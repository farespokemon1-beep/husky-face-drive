import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Eye,
  Navigation,
  Cpu,
  Battery,
  Camera,
  Zap,
  Cog
} from "lucide-react";

const RobotDashboard = () => {
  return (
    <div className="min-h-screen relative p-4 md:p-6">
      {/* Circuit Background */}
      <div 
        className="fixed inset-0 opacity-20 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/a4fcfe58-a240-4124-bf0f-37ad7ed79142.png')"
        }}
      />
      <div className="fixed inset-0 bg-background/80 z-0" />
      
      {/* Content */}
      <div className="relative z-10">
      {/* Hero Section */}
      <Card className="glass panel-shadow border-border/50 mb-8">
        <div className="p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Bot className="h-12 w-12 text-primary animate-pulse-glow" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            HuskyLens AI Robot Car
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced Arduino-based robotics platform featuring AI-powered face tracking, autonomous line following, 
            and precision motor control through integrated HuskyLens computer vision technology.
          </p>
        </div>
      </Card>

      {/* Capabilities Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="glass panel-shadow border-border/50 p-6 text-center">
          <Eye className="h-8 w-8 text-primary mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">AI Face Tracking</h3>
          <p className="text-sm text-muted-foreground">
            Real-time face detection and tracking using HuskyLens AI vision system with automatic subject following.
          </p>
        </Card>
        
        <Card className="glass panel-shadow border-border/50 p-6 text-center">
          <Navigation className="h-8 w-8 text-primary mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Line Following</h3>
          <p className="text-sm text-muted-foreground">
            Precision autonomous navigation with advanced line detection algorithms for accurate path following.
          </p>
        </Card>
        
        <Card className="glass panel-shadow border-border/50 p-6 text-center">
          <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Motor Control</h3>
          <p className="text-sm text-muted-foreground">
            SMART V3.0 motor shield provides independent control of four DC motors for omnidirectional movement.
          </p>
        </Card>
      </div>

      {/* Hardware Overview */}
      <Card className="glass panel-shadow border-border/50 mb-8">
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Hardware Overview</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/a4fcfe58-a240-4124-bf0f-37ad7ed79142.png" 
                alt="Arduino HuskyLens Robot Car - Detailed View"
                className="w-full h-auto rounded-lg border border-border/20 shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary text-xl mb-3">AI Face Tracking Robot Car</h4>
                <p className="text-muted-foreground leading-relaxed">
                  This Arduino Uno R3-based robot features sophisticated AI vision capabilities powered by the HuskyLens camera module. 
                  The robust chassis houses a SMART V3.0 motor driver shield controlling four independent DC motors with yellow wheels. 
                  Equipped with dual ultrasonic sensors for obstacle detection and a dedicated battery pack for extended operation, 
                  this robot excels in both autonomous face tracking and precision line following applications.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Cpu className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Controller:</span>
                  </div>
                  <Badge variant="outline">Arduino Uno R3</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Camera className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">AI Vision:</span>
                  </div>
                  <Badge variant="outline">HuskyLens Camera</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Cog className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Motor Shield:</span>
                  </div>
                  <Badge variant="outline">SMART V3.0</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Drive System:</span>
                  </div>
                  <Badge variant="outline">4x DC Motors</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Bot className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Capabilities:</span>
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="default">Face Tracking</Badge>
                    <Badge variant="default">Line Following</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Technical Specifications */}
      <Card className="glass panel-shadow border-border/50 mb-8">
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-muted/20 rounded-lg">
              <Battery className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Power System</h4>
              <p className="text-sm text-muted-foreground">Battery Pack</p>
              <p className="text-xs text-muted-foreground">Extended Operation</p>
            </div>
            <div className="text-center p-4 bg-muted/20 rounded-lg">
              <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Vision System</h4>
              <p className="text-sm text-muted-foreground">AI Processing</p>
              <p className="text-xs text-muted-foreground">Real-time Detection</p>
            </div>
            <div className="text-center p-4 bg-muted/20 rounded-lg">
              <Navigation className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Navigation</h4>
              <p className="text-sm text-muted-foreground">Ultrasonic Sensors</p>
              <p className="text-xs text-muted-foreground">Obstacle Avoidance</p>
            </div>
            <div className="text-center p-4 bg-muted/20 rounded-lg">
              <Cog className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Control System</h4>
              <p className="text-sm text-muted-foreground">Precision Control</p>
              <p className="text-xs text-muted-foreground">Smooth Movement</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Applications Section */}
      <Card className="glass panel-shadow border-border/50">
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Applications & Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Educational Robotics</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• STEM learning and programming education</li>
                <li>• AI and computer vision demonstrations</li>
                <li>• Hands-on robotics engineering</li>
                <li>• Arduino programming workshops</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Research & Development</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Computer vision algorithm testing</li>
                <li>• Autonomous navigation research</li>
                <li>• Human-robot interaction studies</li>
                <li>• Motor control system development</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
      </div>
    </div>
  );
};

export default RobotDashboard;