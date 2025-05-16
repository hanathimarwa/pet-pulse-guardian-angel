
import React from 'react';
import { Button } from '@/components/ui/button';
import { Activity, HeartPulse, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-petpulse-light dark:from-background dark:to-petpulse-dark/20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block rounded-full bg-petpulse-primary/10 px-4 py-1.5 text-sm font-medium text-petpulse-primary mb-4">
              Every Heartbeat Matters
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Smart Health Monitoring for <span className="text-petpulse-primary">Every Pet</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Track vital signs, activity patterns, and behavior in real time with our innovative 
              IoT sensor system designed for all species.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-petpulse-primary hover:bg-petpulse-dark text-white">
                Start Monitoring
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <HeartPulse className="h-5 w-5 text-petpulse-accent" />
                <span>Real-time vitals</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-petpulse-accent" />
                <span>Activity tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-petpulse-accent" />
                <span>Instant alerts</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-petpulse-primary/20 to-petpulse-secondary/20 rounded-full blur-3xl"></div>
            <div className="relative bg-white dark:bg-petpulse-dark/30 rounded-2xl border border-border p-6 shadow-lg">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-petpulse-light to-background dark:from-petpulse-dark/50 dark:to-background flex items-center justify-center">
                <div className="text-6xl">🐾</div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="h-4 bg-muted rounded-full w-3/4"></div>
                <div className="h-4 bg-muted rounded-full w-1/2"></div>
                <div className="flex justify-between items-center mt-6">
                  <div className="w-10 h-10 rounded-full bg-petpulse-primary/20 flex items-center justify-center">
                    <HeartPulse className="h-6 w-6 text-petpulse-primary" />
                  </div>
                  <div className="w-32 h-10 rounded-full bg-petpulse-accent/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
