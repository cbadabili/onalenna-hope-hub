import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/65ad3b48-6099-4ffb-a76b-7d8f191af6d0.png" 
                alt="ORH Logo" 
                className="h-8 w-8 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">Onalenna Rehabilitation Hub</h3>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Botswana's first rehabilitation center dedicated to transforming lives, 
              restoring hope, and rebuilding families.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground/80">Free services for all Batswana</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#get-help" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Get Help
                </a>
              </li>
              <li>
                <a href="#give-hope" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Give Hope
                </a>
              </li>
              <li>
                <a href="#resources" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Addiction Treatment</li>
              <li className="text-primary-foreground/80">Mental Health Support</li>
              <li className="text-primary-foreground/80">Family Counseling</li>
              <li className="text-primary-foreground/80">Crisis Intervention</li>
              <li className="text-primary-foreground/80">Aftercare Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <div className="text-primary-foreground/80">
                  7.5-hectare farm<br />
                  30km outside Francistown<br />
                  Botswana
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+26772808110" className="text-primary-foreground/80 hover:text-white transition-colors">
                  +267 72808110
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:admin@onalenna.org" className="text-primary-foreground/80 hover:text-white transition-colors">
                  admin@onalenna.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-light/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} Onalenna Rehabilitation Hub. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                Donate
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4 pt-4 border-t border-primary-light/20">
            <p className="text-xs text-primary-foreground/60">
              If you or someone you know is in crisis, please call our 24/7 helpline: +267 72808110
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;