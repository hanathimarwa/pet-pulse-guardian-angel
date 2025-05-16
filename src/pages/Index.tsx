
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import DashboardPreview from '@/components/DashboardPreview';
import PetProfile from '@/components/PetProfile';
import AlertsDemo from '@/components/AlertsDemo';
import TestimonialSection from '@/components/TestimonialSection';
import { Button } from '@/components/ui/button';
import { HeartPulse } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <DashboardPreview />
        <PetProfile />
        <AlertsDemo />
        <TestimonialSection />
        
        <section className="py-20 bg-petpulse-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-6">
              <HeartPulse className="h-12 w-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Monitoring Your Pet's Health Today
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-10 text-white/90">
              Join thousands of pet owners providing better care with data-driven insights. 
              Every heartbeat matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-petpulse-primary hover:bg-white/90 hover:text-petpulse-dark">
                Get Started
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/20">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
