import React from 'react';
import { User, FileText, Star, Trophy, MapPin, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const ProfileScreen = () => {
  return (
    <div className="flex-1 bg-background overflow-y-auto">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-4">
        <h1 className="text-xl font-semibold text-foreground text-center">My Profile</h1>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* User Identity Section */}
        <div className="text-center space-y-3">
          <Avatar className="h-20 w-20 mx-auto">
            <AvatarImage src="" alt="User Avatar" />
            <AvatarFallback className="bg-secondary text-secondary-foreground text-xl">
              <User className="h-10 w-10" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold text-foreground">John Doe</h2>
            <p className="text-sm text-muted-foreground">@JohnDoeSA</p>
          </div>
        </div>

        {/* Gamification Stats Section */}
        <div className="space-y-3">
          <h3 className="text-base font-medium text-foreground">Your Contributions</h3>
          <div className="grid grid-cols-1 gap-3">
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-warning/10 rounded-lg">
                    <FileText className="h-5 w-5 text-warning" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Total Reports</p>
                    <p className="text-lg font-semibold text-foreground">15</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Star className="h-5 w-5 text-success" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Confirmed Reports</p>
                    <p className="text-lg font-semibold text-foreground">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Community Points</p>
                    <p className="text-lg font-semibold text-foreground">120</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action/Utility Section */}
        <div className="space-y-3">
          <h3 className="text-base font-medium text-foreground">Quick Actions</h3>
          <div className="space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start h-12 px-4 text-left"
            >
              <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
              <span className="text-foreground">My Reported Issues</span>
            </Button>

            <Button 
              variant="ghost" 
              className="w-full justify-start h-12 px-4 text-left"
            >
              <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
              <span className="text-foreground">Saved Locations</span>
            </Button>

            <Button 
              variant="ghost" 
              className="w-full justify-start h-12 px-4 text-left"
            >
              <Settings className="h-5 w-5 mr-3 text-muted-foreground" />
              <span className="text-foreground">App Settings</span>
            </Button>
          </div>
        </div>

        {/* Log Out Section */}
        <div className="pt-4 border-t border-border">
          <Button 
            variant="outline" 
            className="w-full h-12 text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};