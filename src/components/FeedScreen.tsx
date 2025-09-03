import React from 'react';
import { RotateCcw, AlertTriangle, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// Sample data - in a real app this would come from an API
const sampleReports = [
  {
    id: '1',
    type: 'pothole',
    icon: RotateCcw,
    location: 'Main Road, Johannesburg CBD',
    description: 'Large pothole in fast lane causing traffic delays...',
    confirmations: 12,
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    type: 'traffic-light',
    icon: Zap,
    location: 'Commissioner & Pritchard St',
    description: 'Traffic lights not working, intersection dangerous...',
    confirmations: 8,
    timestamp: '4 hours ago'
  },
  {
    id: '3',
    type: 'obstruction',
    icon: AlertTriangle,
    location: 'N1 Highway, Midrand',
    description: 'Broken down vehicle blocking left lane...',
    confirmations: 5,
    timestamp: '6 hours ago'
  },
  {
    id: '4',
    type: 'pothole',
    icon: RotateCcw,
    location: 'Oxford Road, Rosebank',
    description: 'Multiple potholes near shopping center entrance...',
    confirmations: 15,
    timestamp: '8 hours ago'
  },
  {
    id: '5',
    type: 'traffic-light',
    icon: Zap,
    location: 'Sandton Drive & Rivonia Rd',
    description: 'Amber light stuck, causing confusion at busy intersection...',
    confirmations: 3,
    timestamp: '12 hours ago'
  }
];

export const FeedScreen = () => {
  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-4">
        <h1 className="text-xl font-semibold text-foreground">Community Feed</h1>
        <p className="text-sm text-muted-foreground">Recent road reports from the community</p>
      </div>

      {/* Feed Content */}
      <ScrollArea className="flex-1 px-4">
        <div className="py-4 space-y-3">
          {sampleReports.map((report) => {
            const IconComponent = report.icon;
            
            return (
              <Card 
                key={report.id} 
                className="cursor-pointer hover:shadow-md transition-shadow duration-200 border-border"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    {/* Issue Icon */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-warning" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Location */}
                      <h3 className="font-semibold text-foreground text-sm mb-1 truncate">
                        {report.location}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                        {report.description}
                      </p>
                      
                      {/* Timestamp */}
                      <p className="text-xs text-muted-foreground">
                        {report.timestamp}
                      </p>
                    </div>

                    {/* Confirmation Counter */}
                    <div className="flex-shrink-0 text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Users className="w-3 h-3 text-success" />
                        <span className="text-success font-medium text-sm">
                          {report.confirmations}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">Confirmed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};