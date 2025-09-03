import React from 'react';
import { MapPin, AlertTriangle } from 'lucide-react';

export const MapView = () => {
  // Sample hazard markers
  const hazards = [
    { id: 1, type: 'pothole', lat: -25.7479, lng: 28.2293, severity: 'critical' },
    { id: 2, type: 'traffic-light', lat: -25.7489, lng: 28.2313, severity: 'moderate' },
    { id: 3, type: 'obstruction', lat: -25.7469, lng: 28.2273, severity: 'minor' },
  ];

  return (
    <div className="w-full h-full relative bg-muted">
      {/* Map Background - Using a stylized grid pattern as placeholder */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Map Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-4xl font-bold text-primary">OurRoads SA</div>
          <div className="text-muted-foreground">Interactive Map View</div>
          <div className="text-sm text-muted-foreground max-w-xs">
            This would display a real map with reported hazards. 
            Tap the + button to report a new issue.
          </div>
        </div>
      </div>

      {/* Sample Hazard Markers */}
      <div className="absolute top-1/4 left-1/4">
        <div className="relative">
          <MapPin className="h-8 w-8 text-warning drop-shadow-lg" />
          <AlertTriangle className="h-4 w-4 text-white absolute top-1 left-2" />
        </div>
      </div>

      <div className="absolute top-1/3 right-1/3">
        <div className="relative">
          <MapPin className="h-8 w-8 text-warning drop-shadow-lg" />
          <AlertTriangle className="h-4 w-4 text-white absolute top-1 left-2" />
        </div>
      </div>

      <div className="absolute bottom-1/3 left-1/2">
        <div className="relative">
          <MapPin className="h-6 w-6 text-warning/70 drop-shadow-lg" />
          <AlertTriangle className="h-3 w-3 text-white absolute top-0.5 left-1.5" />
        </div>
      </div>
    </div>
  );
};