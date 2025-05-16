
import React from 'react';
import { Heart, Activity, Bell, Share2, BarChart3, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="border border-border bg-card hover:shadow-md transition-all duration-300 h-full">
      <CardContent className="p-6">
        <div className="rounded-full bg-petpulse-primary/10 w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Heart className="h-6 w-6 text-petpulse-primary" />,
      title: 'Vital Signs Monitoring',
      description: 'Track heart rate, temperature, and respiratory patterns with clinical accuracy.'
    },
    {
      icon: <Activity className="h-6 w-6 text-petpulse-primary" />,
      title: 'Activity Tracking',
      description: 'Monitor movement, rest patterns, and energy levels to ensure optimal exercise.'
    },
    {
      icon: <Bell className="h-6 w-6 text-petpulse-primary" />,
      title: 'Smart Alerts',
      description: 'Receive instant notifications for abnormal readings or concerning patterns.'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-petpulse-primary" />,
      title: 'Health Analytics',
      description: 'Visualize trends and patterns in your pet\'s health data over time.'
    },
    {
      icon: <Share2 className="h-6 w-6 text-petpulse-primary" />,
      title: 'Vet Integration',
      description: 'Share health reports directly with veterinarians for remote consultations.'
    },
    {
      icon: <Shield className="h-6 w-6 text-petpulse-primary" />,
      title: 'Multi-species Support',
      description: 'Adaptable monitoring for dogs, cats, horses, cattle, and more.'
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Pet Health Monitoring
          </h2>
          <p className="text-lg text-muted-foreground">
            Our intelligent system adapts to each animal's unique patterns, providing personalized insights 
            for better preventive care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
