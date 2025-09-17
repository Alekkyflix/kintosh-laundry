import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-light">Kintosh Laundry</h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Your trusted partner for premium laundry services. We've been serving 
              the community with professional care and exceptional quality since 2024.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-primary-light cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-primary-light cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-primary-light cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Wash & Fold</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Dry Cleaning</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Pickup & Delivery</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Express Service</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Stain Removal</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Premium Care</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-background/80 hover:text-background transition-colors">Home</a></li>
              <li><a href="#services" className="text-background/80 hover:text-background transition-colors">Services</a></li>
              <li><a href="#about" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-background/60 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p>123 Clean Street</p>
                  <p>Fresh City, FC 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-background/60 mr-3" />
                <span className="text-background/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-background/60 mr-3" />
                <span className="text-background/80">hello@kintoshlaundry.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2025 Kintosh Laundry. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;