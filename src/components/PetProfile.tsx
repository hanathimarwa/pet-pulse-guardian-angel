
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PawPrint, Calendar, Weight, Edit2, Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PetCardProps {
  name: string;
  species: string;
  breed: string;
  age: string;
  weight: string;
  image: string;
  active?: boolean;
}

const PetCard: React.FC<PetCardProps> = ({ name, species, breed, age, weight, image, active = false }) => {
  return (
    <Card className={`border ${active ? 'border-petpulse-primary' : 'border-border'}`}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-petpulse-primary/10 text-petpulse-primary">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{species} • {breed}</p>
          
          <div className="grid grid-cols-2 gap-3 w-full mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{age}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Weight className="h-4 w-4 text-muted-foreground" />
              <span>{weight}</span>
            </div>
          </div>
          
          <Button variant="outline" size="sm" className="w-full">
            <Edit2 className="h-4 w-4 mr-2" />
            Manage Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const PetProfile: React.FC = () => {
  const pets = [
    {
      name: "Max",
      species: "Dog",
      breed: "Golden Retriever",
      age: "3 years",
      weight: "32 kg",
      image: ""
    },
    {
      name: "Luna",
      species: "Cat",
      breed: "Siamese",
      age: "2 years",
      weight: "4.5 kg",
      image: ""
    },
    {
      name: "Bella",
      species: "Horse",
      breed: "Arabian",
      age: "7 years",
      weight: "450 kg",
      image: ""
    },
  ];

  return (
    <section id="profiles" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Multiple Pet Profiles
          </h2>
          <p className="text-lg text-muted-foreground">
            Monitor health data for each of your animals with customized tracking based on species and breed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="border border-dashed border-muted-foreground/30">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-muted w-16 h-16 flex items-center justify-center mb-4">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">Add New Pet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Create a profile for another pet to monitor
              </p>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Pet
              </Button>
            </CardContent>
          </Card>
          
          {pets.map((pet, index) => (
            <PetCard
              key={index}
              {...pet}
              active={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetProfile;
