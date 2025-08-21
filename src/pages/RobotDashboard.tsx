import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
  Star,
  Info
} from "lucide-react";
import { useState } from "react";
import fablabLogo from "@/assets/fablab-logo.png";

const RobotDashboard = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const componentInfo = {
    arduino: {
      title: "Arduino Uno R3",
      description: "The main microcontroller board that serves as the brain of the robot. It processes sensor data, executes AI algorithms, and controls all robot functions.",
      specs: ["ATmega328P Microcontroller", "16MHz Clock Speed", "32KB Flash Memory", "14 Digital I/O Pins", "6 Analog Input Pins", "USB Programming Interface"]
    },
    huskylens: {
      title: "HuskyLens AI Camera",
      description: "Advanced AI vision sensor capable of face recognition, object tracking, and line following. Features built-in machine learning algorithms for real-time image processing.",
      specs: ["AI-powered Vision Processing", "Face Recognition & Tracking", "Object Detection", "Line Following Detection", "UART/I2C Communication", "2.0-inch IPS Screen"]
    },
    motordriver: {
      title: "L293D Motor Driver Shield",
      description: "Dual H-bridge motor driver that controls up to 4 DC motors independently. Provides proper voltage and current regulation for smooth motor operation.",
      specs: ["Dual H-Bridge Design", "4 DC Motor Control", "600mA Per Channel", "4.5V to 36V Operating Range", "Built-in Protection Diodes", "PWM Speed Control"]
    },
    motors: {
      title: "4x DC Geared Motors",
      description: "High-torque geared DC motors with yellow wheels providing omnidirectional movement capability. Each motor is independently controlled for precise navigation.",
      specs: ["Gear Reduction for Higher Torque", "Yellow Rubber Wheels", "Independent Speed Control", "Forward/Reverse Operation", "Low Power Consumption", "Smooth Acceleration"]
    },
    capabilities: {
      title: "AI Capabilities",
      description: "Advanced artificial intelligence features enabling autonomous operation and intelligent interaction with the environment through computer vision.",
      specs: ["Real-time Face Tracking", "Autonomous Line Following", "Obstacle Detection", "Path Planning", "Multi-mode Operation", "Adaptive Behavior"]
    }
  };

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
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] group">
                      <div className="flex items-center space-x-3">
                        <Cpu className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-muted-foreground">Controller:</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Arduino Uno R3</Badge>
                        <Info className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-md animate-in fade-in-0 zoom-in-95 duration-300">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-2">
                        <Cpu className="h-5 w-5 text-primary" />
                        <span>{componentInfo.arduino.title}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{componentInfo.arduino.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Technical Specifications:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {componentInfo.arduino.specs.map((spec, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] group">
                      <div className="flex items-center space-x-3">
                        <Camera className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-muted-foreground">AI Vision:</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">HuskyLens Camera</Badge>
                        <Info className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-md animate-in fade-in-0 zoom-in-95 duration-300">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-2">
                        <Camera className="h-5 w-5 text-primary" />
                        <span>{componentInfo.huskylens.title}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{componentInfo.huskylens.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {componentInfo.huskylens.specs.map((spec, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] group">
                      <div className="flex items-center space-x-3">
                        <Cog className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-muted-foreground">Motor Shield:</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">L293D</Badge>
                        <Info className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-md animate-in fade-in-0 zoom-in-95 duration-300">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-2">
                        <Cog className="h-5 w-5 text-primary" />
                        <span>{componentInfo.motordriver.title}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{componentInfo.motordriver.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Technical Details:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {componentInfo.motordriver.specs.map((spec, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] group">
                      <div className="flex items-center space-x-3">
                        <Zap className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-muted-foreground">Drive System:</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">4x DC Motors</Badge>
                        <Info className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-md animate-in fade-in-0 zoom-in-95 duration-300">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-2">
                        <Zap className="h-5 w-5 text-primary" />
                        <span>{componentInfo.motors.title}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{componentInfo.motors.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Motor Specifications:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {componentInfo.motors.specs.map((spec, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] group">
                      <div className="flex items-center space-x-3">
                        <Bot className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-muted-foreground">Capabilities:</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-2">
                          <Badge variant="default">Face Tracking</Badge>
                          <Badge variant="default">Line Following</Badge>
                        </div>
                        <Info className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-md animate-in fade-in-0 zoom-in-95 duration-300">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-2">
                        <Bot className="h-5 w-5 text-primary" />
                        <span>{componentInfo.capabilities.title}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{componentInfo.capabilities.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">AI Features:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {componentInfo.capabilities.specs.map((spec, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
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
          <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Engineering Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              style={{
                "--background": "hsl(var(--muted))",
                "--highlight": "hsl(var(--primary))",
                "--bg-color": "linear-gradient(var(--background), var(--background))",
                "--border-color": `linear-gradient(145deg,
                  var(--highlight) 0%,
                  hsl(var(--primary) / 0.3) 33.33%,
                  hsl(var(--primary) / 0.14) 66.67%,
                  hsl(var(--primary) / 0.1) 100%)
                `,
              } as React.CSSProperties}
              className="text-center p-4 rounded-lg border border-transparent cursor-pointer group
              [background:padding-box_var(--bg-color),border-box_var(--border-color)]
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20
              hover:[background:padding-box_var(--bg-color),border-box_linear-gradient(145deg,hsl(var(--primary))_0%,hsl(var(--primary)/_0.4)_33.33%,hsl(var(--primary)/_0.2)_66.67%,hsl(var(--primary)/_0.15)_100%)]"
            >
              <User className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse group-hover:scale-110 group-hover:text-primary/90 transition-all duration-300" />
              <h4 className="font-semibold text-lg mb-1 text-foreground group-hover:text-primary transition-colors duration-300">Wajdi Jehad</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Project Manager</p>
              <Star className="h-4 w-4 text-yellow-500 mx-auto mt-2 animate-pulse group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-300" />
            </div>
            <div
              style={{
                "--background": "hsl(var(--muted))",
                "--highlight": "hsl(var(--primary))",
                "--bg-color": "linear-gradient(var(--background), var(--background))",
                "--border-color": `linear-gradient(145deg,
                  var(--highlight) 0%,
                  hsl(var(--primary) / 0.3) 33.33%,
                  hsl(var(--primary) / 0.14) 66.67%,
                  hsl(var(--primary) / 0.1) 100%)
                `,
              } as React.CSSProperties}
              className="text-center p-4 rounded-lg border border-transparent cursor-pointer group
              [background:padding-box_var(--bg-color),border-box_var(--border-color)]
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20
              hover:[background:padding-box_var(--bg-color),border-box_linear-gradient(145deg,hsl(var(--primary))_0%,hsl(var(--primary)/_0.4)_33.33%,hsl(var(--primary)/_0.2)_66.67%,hsl(var(--primary)/_0.15)_100%)]"
            >
              <User className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse group-hover:scale-110 group-hover:text-primary/90 transition-all duration-300" />
              <h4 className="font-semibold text-lg mb-1 text-foreground group-hover:text-primary transition-colors duration-300">Ahmad Ghassan Al-Rabaiah</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Project Engineer</p>
              <Star className="h-4 w-4 text-yellow-500 mx-auto mt-2 animate-pulse group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-300" />
            </div>
            <div
              style={{
                "--background": "hsl(var(--muted))",
                "--highlight": "hsl(var(--primary))",
                "--bg-color": "linear-gradient(var(--background), var(--background))",
                "--border-color": `linear-gradient(145deg,
                  var(--highlight) 0%,
                  hsl(var(--primary) / 0.3) 33.33%,
                  hsl(var(--primary) / 0.14) 66.67%,
                  hsl(var(--primary) / 0.1) 100%)
                `,
              } as React.CSSProperties}
              className="text-center p-4 rounded-lg border border-transparent cursor-pointer group
              [background:padding-box_var(--bg-color),border-box_var(--border-color)]
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20
              hover:[background:padding-box_var(--bg-color),border-box_linear-gradient(145deg,hsl(var(--primary))_0%,hsl(var(--primary)/_0.4)_33.33%,hsl(var(--primary)/_0.2)_66.67%,hsl(var(--primary)/_0.15)_100%)]"
            >
              <User className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse group-hover:scale-110 group-hover:text-primary/90 transition-all duration-300" />
              <h4 className="font-semibold text-lg mb-1 text-foreground group-hover:text-primary transition-colors duration-300">Asma Abu Dhaif</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Systems Engineer</p>
              <Star className="h-4 w-4 text-yellow-500 mx-auto mt-2 animate-pulse group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-300" />
            </div>
            <div
              style={{
                "--background": "hsl(var(--muted))",
                "--highlight": "hsl(var(--primary))",
                "--bg-color": "linear-gradient(var(--background), var(--background))",
                "--border-color": `linear-gradient(145deg,
                  var(--highlight) 0%,
                  hsl(var(--primary) / 0.3) 33.33%,
                  hsl(var(--primary) / 0.14) 66.67%,
                  hsl(var(--primary) / 0.1) 100%)
                `,
              } as React.CSSProperties}
              className="text-center p-4 rounded-lg border border-transparent cursor-pointer group
              [background:padding-box_var(--bg-color),border-box_var(--border-color)]
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20
              hover:[background:padding-box_var(--bg-color),border-box_linear-gradient(145deg,hsl(var(--primary))_0%,hsl(var(--primary)/_0.4)_33.33%,hsl(var(--primary)/_0.2)_66.67%,hsl(var(--primary)/_0.15)_100%)]"
            >
              <User className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse group-hover:scale-110 group-hover:text-primary/90 transition-all duration-300" />
              <h4 className="font-semibold text-lg mb-1 text-foreground group-hover:text-primary transition-colors duration-300">Taher Ali Al-Majhad</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Hardware Engineer</p>
              <Star className="h-4 w-4 text-yellow-500 mx-auto mt-2 animate-pulse group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-300" />
            </div>
            <div
              style={{
                "--background": "hsl(var(--muted))",
                "--highlight": "hsl(var(--primary))",
                "--bg-color": "linear-gradient(var(--background), var(--background))",
                "--border-color": `linear-gradient(145deg,
                  var(--highlight) 0%,
                  hsl(var(--primary) / 0.3) 33.33%,
                  hsl(var(--primary) / 0.14) 66.67%,
                  hsl(var(--primary) / 0.1) 100%)
                `,
              } as React.CSSProperties}
              className="text-center p-4 rounded-lg border border-transparent cursor-pointer group
              [background:padding-box_var(--bg-color),border-box_var(--border-color)]
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20
              hover:[background:padding-box_var(--bg-color),border-box_linear-gradient(145deg,hsl(var(--primary))_0%,hsl(var(--primary)/_0.4)_33.33%,hsl(var(--primary)/_0.2)_66.67%,hsl(var(--primary)/_0.15)_100%)]"
            >
              <User className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse group-hover:scale-110 group-hover:text-primary/90 transition-all duration-300" />
              <h4 className="font-semibold text-lg mb-1 text-foreground group-hover:text-primary transition-colors duration-300">Osama Abu Dhaif</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Assistant Engineer</p>
              <Star className="h-4 w-4 text-yellow-500 mx-auto mt-2 animate-pulse group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-300" />
            </div>
            <div
              style={{
                "--background": "hsl(var(--muted))",
                "--highlight": "hsl(var(--primary))",
                "--bg-color": "linear-gradient(var(--background), var(--background))",
                "--border-color": `linear-gradient(145deg,
                  var(--highlight) 0%,
                  hsl(var(--primary) / 0.3) 33.33%,
                  hsl(var(--primary) / 0.14) 66.67%,
                  hsl(var(--primary) / 0.1) 100%)
                `,
              } as React.CSSProperties}
              className="text-center p-4 rounded-lg border border-transparent cursor-pointer group
              [background:padding-box_var(--bg-color),border-box_var(--border-color)]
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20
              hover:[background:padding-box_var(--bg-color),border-box_linear-gradient(145deg,hsl(var(--primary))_0%,hsl(var(--primary)/_0.4)_33.33%,hsl(var(--primary)/_0.2)_66.67%,hsl(var(--primary)/_0.15)_100%)]"
            >
              <User className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse group-hover:scale-110 group-hover:text-primary/90 transition-all duration-300" />
              <h4 className="font-semibold text-lg mb-1 text-foreground group-hover:text-primary transition-colors duration-300">Yazan Ghassan Al-Rabaiah</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Software Engineer</p>
              <Star className="h-4 w-4 text-yellow-500 mx-auto mt-2 animate-pulse group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-300" />
            </div>
            <div
              style={{
                "--background": "hsl(var(--muted))",
                "--highlight": "hsl(var(--primary))",
                "--bg-color": "linear-gradient(var(--background), var(--background))",
                "--border-color": `linear-gradient(145deg,
                  var(--highlight) 0%,
                  hsl(var(--primary) / 0.3) 33.33%,
                  hsl(var(--primary) / 0.14) 66.67%,
                  hsl(var(--primary) / 0.1) 100%)
                `,
              } as React.CSSProperties}
              className="text-center p-4 rounded-lg border border-transparent cursor-pointer group
              [background:padding-box_var(--bg-color),border-box_var(--border-color)]
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20
              hover:[background:padding-box_var(--bg-color),border-box_linear-gradient(145deg,hsl(var(--primary))_0%,hsl(var(--primary)/_0.4)_33.33%,hsl(var(--primary)/_0.2)_66.67%,hsl(var(--primary)/_0.15)_100%)]"
            >
              <User className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse group-hover:scale-110 group-hover:text-primary/90 transition-all duration-300" />
              <h4 className="font-semibold text-lg mb-1 text-foreground group-hover:text-primary transition-colors duration-300">Fares Mahmoud</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Hardware Engineer</p>
              <Star className="h-4 w-4 text-yellow-500 mx-auto mt-2 animate-pulse group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-300" />
            </div>
            <div
              style={{
                "--background": "hsl(var(--muted))",
                "--highlight": "hsl(var(--primary))",
                "--bg-color": "linear-gradient(var(--background), var(--background))",
                "--border-color": `linear-gradient(145deg,
                  var(--highlight) 0%,
                  hsl(var(--primary) / 0.3) 33.33%,
                  hsl(var(--primary) / 0.14) 66.67%,
                  hsl(var(--primary) / 0.1) 100%)
                `,
              } as React.CSSProperties}
              className="text-center p-4 rounded-lg border border-transparent cursor-pointer group
              [background:padding-box_var(--bg-color),border-box_var(--border-color)]
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20
              hover:[background:padding-box_var(--bg-color),border-box_linear-gradient(145deg,hsl(var(--primary))_0%,hsl(var(--primary)/_0.4)_33.33%,hsl(var(--primary)/_0.2)_66.67%,hsl(var(--primary)/_0.15)_100%)]"
            >
              <User className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse group-hover:scale-110 group-hover:text-primary/90 transition-all duration-300" />
              <h4 className="font-semibold text-lg mb-1 text-foreground group-hover:text-primary transition-colors duration-300">Ali Al-Omair</h4>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Software Developer</p>
              <Star className="h-4 w-4 text-yellow-500 mx-auto mt-2 animate-pulse group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-300" />
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