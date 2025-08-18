import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Camera, Activity } from "lucide-react";

export const CameraFeed = () => {
  const [faceDetected, setFaceDetected] = useState(false);
  const [lineDetected, setLineDetected] = useState(false);

  useEffect(() => {
    // Simulate detection events
    const interval = setInterval(() => {
      setFaceDetected(Math.random() > 0.6);
      setLineDetected(Math.random() > 0.4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="glass panel-shadow border-border/50 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Camera className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">HuskyLens Feed</h3>
        </div>
        <div className="flex space-x-2">
          <Badge variant={faceDetected ? "default" : "secondary"} className="animate-pulse-glow">
            <Eye className="h-3 w-3 mr-1" />
            Face
          </Badge>
          <Badge variant={lineDetected ? "default" : "secondary"} className="animate-pulse-glow">
            <Activity className="h-3 w-3 mr-1" />
            Line
          </Badge>
        </div>
      </div>
      
      <div className="relative bg-muted/30 rounded-lg overflow-hidden aspect-video">
        {/* Simulated camera feed background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/40" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 320 180">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Face detection box */}
        {faceDetected && (
          <div className="absolute top-1/3 left-1/3 w-24 h-32 border-2 border-primary rounded-lg animate-pulse">
            <div className="absolute -top-6 left-0 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-mono">
              FACE
            </div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-ping" />
          </div>
        )}

        {/* Line detection */}
        {lineDetected && (
          <div className="absolute bottom-8 left-4 right-4">
            <div className="h-1 bg-accent rounded animate-pulse glow-accent" />
            <div className="absolute -top-6 right-0 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-mono">
              LINE DETECTED
            </div>
          </div>
        )}

        {/* Crosshairs */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            <div className="w-8 h-0.5 bg-primary/60 absolute -left-4 top-1/2 transform -translate-y-1/2" />
            <div className="w-8 h-0.5 bg-primary/60 absolute -right-4 top-1/2 transform -translate-y-1/2" />
            <div className="h-8 w-0.5 bg-primary/60 absolute left-1/2 -top-4 transform -translate-x-1/2" />
            <div className="h-8 w-0.5 bg-primary/60 absolute left-1/2 -bottom-4 transform -translate-x-1/2" />
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div className="space-y-1">
          <div className="text-lg font-mono font-bold text-primary">1280</div>
          <div className="text-xs text-muted-foreground">Width</div>
        </div>
        <div className="space-y-1">
          <div className="text-lg font-mono font-bold text-primary">720</div>
          <div className="text-xs text-muted-foreground">Height</div>
        </div>
        <div className="space-y-1">
          <div className="text-lg font-mono font-bold text-primary">30</div>
          <div className="text-xs text-muted-foreground">FPS</div>
        </div>
      </div>
    </Card>
  );
};