import React, { useState } from 'react';
import { X, Camera, MapPin, AlertTriangle, Construction, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ReportIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportIssueModal: React.FC<ReportIssueModalProps> = ({ isOpen, onClose }) => {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [severity, setSeverity] = useState('moderate');
  const { toast } = useToast();

  const issueTypes = [
    { id: 'pothole', label: 'Pothole', icon: AlertTriangle, description: 'Road damage or hole' },
    { id: 'traffic-light', label: 'Traffic Light', icon: Lightbulb, description: 'Faulty traffic signals' },
    { id: 'obstruction', label: 'Obstruction', icon: Construction, description: 'Road blockage or debris' },
  ];

  const handleSubmit = () => {
    if (!selectedIssue) {
      toast({
        title: "Please select an issue type",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Report submitted successfully!",
      description: "Thank you for helping keep our roads safe.",
      className: "bg-success text-success-foreground"
    });
    
    onClose();
    setSelectedIssue('');
    setSeverity('moderate');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end md:items-center md:justify-center">
      <Card className="w-full max-w-md mx-auto bg-card rounded-t-3xl md:rounded-lg shadow-2xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Report an Issue</h2>
              <p className="text-sm text-muted-foreground mt-1">Help keep our roads safe</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Issue Type Selection */}
          <div className="space-y-4 mb-6">
            <Label className="text-sm font-medium text-foreground">What type of issue are you reporting?</Label>
            <div className="grid gap-3">
              {issueTypes.map((issue) => (
                <Button
                  key={issue.id}
                  variant={selectedIssue === issue.id ? "default" : "outline"}
                  className="justify-start h-auto p-4 text-left"
                  onClick={() => setSelectedIssue(issue.id)}
                >
                  <issue.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{issue.label}</div>
                    <div className="text-xs opacity-80">{issue.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Photo Upload */}
          <div className="mb-6">
            <Label className="text-sm font-medium text-foreground mb-3 block">Add a photo (optional)</Label>
            <Button variant="outline" className="w-full h-12 border-dashed">
              <Camera className="h-5 w-5 mr-2" />
              Take Photo
            </Button>
          </div>

          {/* Severity Selection */}
          <div className="mb-6">
            <Label className="text-sm font-medium text-foreground mb-3 block">Severity Level</Label>
            <RadioGroup value={severity} onValueChange={setSeverity} className="grid grid-cols-3 gap-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="minor" id="minor" />
                <Label htmlFor="minor" className="text-sm">Minor</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderate" id="moderate" />
                <Label htmlFor="moderate" className="text-sm">Moderate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="critical" id="critical" />
                <Label htmlFor="critical" className="text-sm">Critical</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Location Info */}
          <div className="mb-6 p-3 bg-muted rounded-lg">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              Current location will be used for this report
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            onClick={handleSubmit}
            className="w-full h-12 text-base font-medium"
            disabled={!selectedIssue}
          >
            Submit Report
          </Button>
        </div>
      </Card>
    </div>
  );
};