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
  Cog,
  Users,
  User,
  Star
} from "lucide-react";
import fablabLogo from "@/assets/fablab-logo.png";

const RobotDashboard = () => {
  return (
    <div className="min-h-screen relative p-4 md:p-6">
      {/* Circuit Background */}
      <div 
        className="fixed inset-0 opacity-40 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/361c912a-9e4b-4fd4-bf92-222b03aadfec.png')"
        }}
      />
      <div className="fixed inset-0 bg-background/70 z-0" />
      
      {/* FabLab Logo */}
      <div className="fixed top-4 right-4 z-20">
        <img 
          src="/lovable-uploads/b5a42642-45fc-46a9-843a-6413a5231314.png" 
          alt="Al Hasa FabLab Logo" 
          className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
      {/* Hero Section */}
      <Card className="glass panel-shadow border-border/50 mb-8">
        <div className="p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Bot className="h-12 w-12 text-primary animate-pulse-glow" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            AI Tracking Car
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
            L293D provides independent control of four DC motors for omnidirectional movement.
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
                src="/lovable-uploads/ff30c87a-b1f4-42a1-922c-84a3372026be.png" 
                alt="AI Tracking Car - Detailed View"
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
                  <Badge variant="outline">L293D</Badge>
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

      {/* Team Section */}
      <Card className="glass panel-shadow border-border/50 mb-8">
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-muted/20 rounded-lg">
              <User className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse" />
              <h4 className="font-semibold text-lg mb-1">Wajdi Jehad</h4>
              <p className="text-sm text-muted-foreground">Team Leader</p>
              <Star className="h-4 w-4 text-yellow-500 mx-auto mt-2 animate-pulse" />
            </div>
            <div className="text-center p-4 bg-muted/20 rounded-lg">
              <User className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse" />
              <h4 className="font-semibold text-lg mb-1">Fares Mahmoud</h4>
              <p className="text-sm text-muted-foreground">Hardware Engineer</p>
              <Star className="h-4 w-4 text-yellow-500 mx-auto mt-2 animate-pulse" />
            </div>
            <div className="text-center p-4 bg-muted/20 rounded-lg">
              <User className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse" />
              <h4 className="font-semibold text-lg mb-1">Ali Omair</h4>
              <p className="text-sm text-muted-foreground">Software Developer</p>
              <Star className="h-4 w-4 text-yellow-500 mx-auto mt-2 animate-pulse" />
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