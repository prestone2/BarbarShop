import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gold-gradient bg-clip-text text-transparent">
              Oness Barber Shop
            </h3>
            <p className="text-muted-foreground">
              Premium barbering services with a commitment to excellence. 
              Experience the art of traditional grooming in a modern setting.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Classic Haircuts</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Premium Styling</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Beard Trimming</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Hot Towel Shaves</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Grooming Packages</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Main Street, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+254 712 345 678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@onessbarber.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Monday - Friday</span>
              </li>
              <li className="ml-6 text-sm">9:00 AM - 8:00 PM</li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Saturday</span>
              </li>
              <li className="ml-6 text-sm">8:00 AM - 6:00 PM</li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Sunday</span>
              </li>
              <li className="ml-6 text-sm">Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Oness Barber Shop. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                Booking Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;