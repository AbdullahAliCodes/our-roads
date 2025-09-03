import React from 'react';
import { Map, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ScreenType = 'map' | 'feed' | 'profile';

interface BottomNavigationProps {
  currentScreen: ScreenType;
  onScreenChange: (screen: ScreenType) => void;
}

export const BottomNavigation = ({ currentScreen, onScreenChange }: BottomNavigationProps) => {
  return (
    <nav className="bg-card border-t border-border px-2 py-2">
      <div className="flex justify-around items-center max-w-sm mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => onScreenChange('map')}
          className={`flex flex-col items-center py-2 px-4 ${
            currentScreen === 'map' ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <Map className="h-5 w-5 mb-1" />
          <span className={`text-xs ${currentScreen === 'map' ? 'font-medium' : ''}`}>
            Map
          </span>
        </Button>
        
        <Button 
          variant="ghost" 
          onClick={() => onScreenChange('feed')}
          className={`flex flex-col items-center py-2 px-4 ${
            currentScreen === 'feed' ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <MessageSquare className="h-5 w-5 mb-1" />
          <span className={`text-xs ${currentScreen === 'feed' ? 'font-medium' : ''}`}>
            Feed
          </span>
        </Button>
        
        <Button 
          variant="ghost" 
          onClick={() => onScreenChange('profile')}
          className={`flex flex-col items-center py-2 px-4 ${
            currentScreen === 'profile' ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <User className="h-5 w-5 mb-1" />
          <span className={`text-xs ${currentScreen === 'profile' ? 'font-medium' : ''}`}>
            Profile
          </span>
        </Button>
      </div>
    </nav>
  );
};