
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-petpulse-light dark:bg-petpulse-dark/30 py-10 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-petpulse-accent" />
              <span className="text-xl font-bold text-petpulse-primary">Pet Pulse</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Innovative pet health monitoring for every heartbeat that matters.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-petpulse-accent transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-petpulse-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-petpulse-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-petpulse-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-petpulse-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-petpulse-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-petpulse-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-petpulse-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© 2025 Pet Pulse. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-petpulse-accent">Twitter</a>
            <a href="#" className="hover:text-petpulse-accent">Facebook</a>
            <a href="#" className="hover:text-petpulse-accent">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
