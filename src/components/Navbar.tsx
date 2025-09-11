import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, User, Settings } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gold-gradient bg-clip-text text-transparent">
              Oness Barber Shop
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-foreground hover:text-primary transition-smooth px-3 py-2">
                Home
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth px-3 py-2">
                Services
              </a>
              <a href="#barbers" className="text-muted-foreground hover:text-primary transition-smooth px-3 py-2">
                Our Barbers
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth px-3 py-2">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-b border-border">
            <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#services" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#barbers" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
              Our Barbers
            </a>
            <a href="#contact" className="block px-3 py-2 text-muted-foreground hover:text-primary transition-smooth">
              Contact
            </a>
            <div className="flex flex-col space-y-2 px-3 pt-4">
              <Button variant="secondary" size="sm">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;