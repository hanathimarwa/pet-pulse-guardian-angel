
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-petpulse-accent animate-pulse-slow" />
          <span className="text-xl font-bold text-petpulse-primary">
            Pet Pulse
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-petpulse-accent transition-colors">
            Features
          </a>
          <a href="#dashboard" className="text-sm font-medium hover:text-petpulse-accent transition-colors">
            Dashboard
          </a>
          <a href="#profiles" className="text-sm font-medium hover:text-petpulse-accent transition-colors">
            Pet Profiles
          </a>
          <a href="#alerts" className="text-sm font-medium hover:text-petpulse-accent transition-colors">
            Alerts
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Log In
          </Button>
          <Button className="bg-petpulse-primary hover:bg-petpulse-dark">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
