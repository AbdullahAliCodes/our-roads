import React, { useState } from 'react';
import { Search, MapPin, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BottomNavigation } from './BottomNavigation';
import { ReportIssueModal } from './ReportIssueModal';
import { MapView } from './MapView';
import { FeedScreen } from './FeedScreen';
import { ProfileScreen } from './ProfileScreen';

type ScreenType = 'map' | 'feed' | 'profile';

const Dashboard = () => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('map');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'feed':
        return <FeedScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return (
          <>
            {/* Header with Search */}
            <div className="relative z-10 p-4 bg-card shadow-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search for a location..."
                  className="pl-10 h-12 text-base"
                />
              </div>
            </div>

            {/* Map Container */}
            <div className="flex-1 relative">
              <MapView />
              
              {/* Floating Action Button */}
              <Button
                onClick={() => setIsReportModalOpen(true)}
                size="lg"
                className="absolute bottom-20 right-4 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow bg-primary hover:bg-primary/90"
              >
                <Plus className="h-6 w-6" />
              </Button>
            </div>
          </>
        );
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Screen Content */}
      {renderScreen()}

      {/* Bottom Navigation */}
      <BottomNavigation 
        currentScreen={currentScreen} 
        onScreenChange={setCurrentScreen} 
      />

      {/* Report Issue Modal */}
      <ReportIssueModal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)} 
      />
    </div>
  );
};

export default Dashboard;