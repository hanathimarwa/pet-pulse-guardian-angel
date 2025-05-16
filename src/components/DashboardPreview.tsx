
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Activity, Thermometer, BarChart, Timer, Droplet } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const DashboardPreview: React.FC = () => {
  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Health Dashboard
          </h2>
          <p className="text-lg text-muted-foreground">
            Monitor vital signs, activity levels, and health trends all in one intuitive interface.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-xl border border-border shadow-lg p-4 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-medium">Max</h3>
                <div className="text-sm text-muted-foreground">Golden Retriever • 3 years</div>
              </div>
              <div className="flex gap-3">
                <div className="bg-petpulse-primary/10 text-petpulse-primary rounded-full px-3 py-1 text-xs font-medium">
                  All vitals normal
                </div>
                <div className="bg-accent/10 text-accent rounded-full px-3 py-1 text-xs font-medium">
                  Active day
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Heart className="h-4 w-4 text-petpulse-accent" />
                    Heart Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78 <span className="text-sm text-muted-foreground">bpm</span></div>
                  <div className="mt-2 text-xs text-muted-foreground">Normal range: 60-100 bpm</div>
                  <Progress value={78} className="h-1.5 mt-3" />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-petpulse-accent" />
                    Temperature
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">38.5°<span className="text-sm text-muted-foreground">C</span></div>
                  <div className="mt-2 text-xs text-muted-foreground">Normal range: 38.0-39.0°C</div>
                  <Progress value={65} className="h-1.5 mt-3" />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Activity className="h-4 w-4 text-petpulse-accent" />
                    Activity Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85<span className="text-sm text-muted-foreground">/100</span></div>
                  <div className="mt-2 text-xs text-muted-foreground">Above average for breed</div>
                  <Progress value={85} className="h-1.5 mt-3" />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Timer className="h-4 w-4 text-petpulse-accent" />
                    Rest Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">10.2<span className="text-sm text-muted-foreground">hrs</span></div>
                  <div className="mt-2 text-xs text-muted-foreground">Normal range: 10-14 hrs</div>
                  <Progress value={70} className="h-1.5 mt-3" />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Droplet className="h-4 w-4 text-petpulse-accent" />
                    Hydration 
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92<span className="text-sm text-muted-foreground">%</span></div>
                  <div className="mt-2 text-xs text-muted-foreground">Optimal hydration level</div>
                  <Progress value={92} className="h-1.5 mt-3" />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-petpulse-accent" />
                    Weekly Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between h-12 pt-4">
                    {[40, 60, 45, 80, 65, 75, 90].map((value, i) => (
                      <div
                        key={i}
                        className="w-3 bg-petpulse-primary rounded-t"
                        style={{ height: `${value}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>M</span>
                    <span>T</span>
                    <span>W</span>
                    <span>T</span>
                    <span>F</span>
                    <span>S</span>
                    <span>S</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6 flex justify-center">
              <button className="text-petpulse-primary text-sm font-medium hover:text-petpulse-accent transition-colors">
                View Full Dashboard →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
