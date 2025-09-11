import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Calendar, Award } from "lucide-react";

const barbers = [
  {
    id: 1,
    name: "James Oness",
    title: "Master Barber & Owner",
    experience: "12+ years",
    specialty: "Classic cuts & Hot towel shaves",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    availability: "Available Today",
    skills: ["Traditional Cuts", "Beard Styling", "Hot Towel Shave"],
  },
  {
    id: 2,
    name: "Michael Thompson",
    title: "Senior Barber",
    experience: "8+ years",
    specialty: "Modern fades & Beard designs",
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    availability: "Available Tomorrow",
    skills: ["Modern Fades", "Beard Design", "Hair Styling"],
  },
  {
    id: 3,
    name: "David Wilson",
    title: "Creative Stylist",
    experience: "6+ years",
    specialty: "Creative styling & Color work",
    rating: 4.7,
    reviews: 83,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    availability: "Available Today",
    skills: ["Creative Styling", "Color Work", "Textured Cuts"],
  },
  {
    id: 4,
    name: "Robert Johnson",
    title: "Traditional Barber",
    experience: "15+ years",
    specialty: "Classic barbering & Straight razor",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    availability: "Available Tomorrow",
    skills: ["Straight Razor", "Classic Cuts", "Mustache Styling"],
  },
];

const Barbers = () => {
  return (
    <section id="barbers" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="gold-gradient bg-clip-text text-transparent">Expert</span> Barbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of skilled professionals brings years of experience and passion to every cut. 
            Choose your preferred barber and book your appointment today.
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {barbers.map((barber, index) => (
            <Card 
              key={barber.id}
              className="group hover:shadow-gold/20 transition-all duration-300 hover:-translate-y-1 card-gradient border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                {/* Barber Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Availability Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={barber.availability.includes("Today") ? "default" : "secondary"}
                      className="bg-card/90 backdrop-blur-sm"
                    >
                      {barber.availability}
                    </Badge>
                  </div>
                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-primary fill-current" />
                      <span className="font-medium">{barber.rating}</span>
                      <span className="text-muted-foreground">({barber.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Barber Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold mb-1">{barber.name}</h3>
                    <p className="text-primary font-medium text-sm">{barber.title}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Award className="w-4 h-4" />
                      <span>{barber.experience} experience</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{barber.specialty}</p>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {barber.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="default" 
                          className="text-xs bg-muted/50 text-muted-foreground"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Book Button */}
                  <Button 
                    variant="default" 
                    className="w-full"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book with {barber.name.split(' ')[0]}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All our barbers are certified professionals with extensive experience in modern and traditional techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              <MapPin className="w-4 h-4 mr-2" />
              Visit Our Shop
            </Button>
            <Button variant="outline">
              View All Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Barbers;