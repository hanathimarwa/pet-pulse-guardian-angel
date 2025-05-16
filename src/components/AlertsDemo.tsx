
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Bell, BellOff, Check, Smartphone } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AlertsDemo: React.FC = () => {
  return (
    <section id="alerts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart Alert System
          </h2>
          <p className="text-lg text-muted-foreground">
            Receive timely notifications about important changes in your pet's health and behavior.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="alerts" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="alerts">Recent Alerts</TabsTrigger>
              <TabsTrigger value="settings">Alert Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="alerts" className="space-y-4">
              <Card className="border-l-4 border-l-amber-500">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-500/10 rounded-full p-2">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Elevated Heart Rate</h4>
                      <div className="text-sm text-muted-foreground">Max's heart rate reached 120bpm (30% above baseline)</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    30m ago
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-petpulse-primary/10 rounded-full p-2">
                      <Bell className="h-5 w-5 text-petpulse-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Activity Goal Reached</h4>
                      <div className="text-sm text-muted-foreground">Luna reached her daily activity goal of 2 hours</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    2h ago
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-destructive">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-destructive/10 rounded-full p-2">
                      <AlertCircle className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-medium">Abnormal Temperature</h4>
                      <div className="text-sm text-muted-foreground">Bella's temperature is 39.8°C (0.9°C above normal)</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    1d ago
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-center mt-6">
                <button className="text-petpulse-primary text-sm font-medium hover:text-petpulse-accent transition-colors">
                  View All Alerts →
                </button>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Critical Alerts</div>
                      <div className="text-sm text-muted-foreground">Abnormal vital signs, emergencies</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Health Updates</div>
                      <div className="text-sm text-muted-foreground">Regular health status reports</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Activity Milestones</div>
                      <div className="text-sm text-muted-foreground">Goal completions, exercise records</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Behavioral Changes</div>
                      <div className="text-sm text-muted-foreground">Unusual patterns or behaviors</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Delivery Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                      <div>Mobile Push Notifications</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-muted-foreground" />
                      <div>Email Alerts</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BellOff className="h-5 w-5 text-muted-foreground" />
                      <div>Quiet Hours (10 PM - 7 AM)</div>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AlertsDemo;
