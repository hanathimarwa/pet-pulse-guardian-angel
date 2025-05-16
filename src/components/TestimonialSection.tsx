
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, avatar }) => {
  return (
    <Card className="border border-border">
      <CardContent className="p-6">
        <div className="flex space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-petpulse-accent text-petpulse-accent" />
          ))}
        </div>
        <p className="text-muted-foreground mb-6">"{content}"</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={avatar} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      content: "Pet Pulse detected my dog's irregular heartbeat two days before he showed any visible symptoms. The early vet visit potentially saved his life.",
      author: "Sarah J.",
      role: "Dog Owner",
      avatar: ""
    },
    {
      content: "As a veterinarian, I recommend Pet Pulse to all my clients. The detailed health data helps me provide better care, even remotely.",
      author: "Dr. Michael T.",
      role: "Veterinarian",
      avatar: ""
    },
    {
      content: "Our dairy farm relies on Pet Pulse to monitor our entire herd. It's reduced our veterinary costs by 40% through early detection.",
      author: "Robert F.",
      role: "Dairy Farmer",
      avatar: ""
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Pet Owners & Professionals
          </h2>
          <p className="text-lg text-muted-foreground">
            See how Pet Pulse is making a difference in animal care across the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
