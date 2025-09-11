import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Scissors, Users } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Classic Haircut",
    description: "Traditional barbering techniques with modern styling",
    price: "KSh 800",
    duration: "30 min",
    popular: false,
    icon: Scissors,
  },
  {
    id: 2,
    name: "Premium Cut & Style",
    description: "Complete haircut with wash, conditioning, and premium styling",
    price: "KSh 1,200",
    duration: "45 min",
    popular: true,
    icon: Star,
  },
  {
    id: 3,
    name: "Beard Trim & Shape",
    description: "Professional beard trimming and shaping service",
    price: "KSh 600",
    duration: "20 min",
    popular: false,
    icon: Scissors,
  },
  {
    id: 4,
    name: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towel treatment",
    price: "KSh 1,000",
    duration: "40 min",
    popular: false,
    icon: Users,
  },
  {
    id: 5,
    name: "Complete Grooming Package",
    description: "Full service: cut, beard trim, shave, and styling",
    price: "KSh 2,000",
    duration: "75 min",
    popular: true,
    icon: Star,
  },
  {
    id: 6,
    name: "Kids Haircut",
    description: "Special service for children under 12",
    price: "KSh 600",
    duration: "25 min",
    popular: false,
    icon: Scissors,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gold-gradient bg-clip-text text-transparent">Premium</span> Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of professional barbering services designed to keep you looking sharp and feeling confident.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`group hover:shadow-gold/20 transition-all duration-300 hover:-translate-y-1 card-gradient border-border/50 ${
                  service.popular ? 'ring-1 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="relative">
                  {service.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  )}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                  </div>
                  
                  <Button 
                    variant="default" 
                    className="w-full group-hover:bg-primary/90"
                  >
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't decide? Let our experts recommend the perfect service for you.
          </p>
          <Button variant="default" size="lg">
            <Users className="w-5 h-5 mr-2" />
            Get Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;