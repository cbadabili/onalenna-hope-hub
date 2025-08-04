import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Heart } from "lucide-react";
import { buttonActions } from "@/utils/buttonActions";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Get Help", href: "#get-help" },
    { name: "Give Hope", href: "#give-hope" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/65ad3b48-6099-4ffb-a76b-7d8f191af6d0.png" 
              alt="Onalenna Rehabilitation Hub Logo" 
              className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-primary">Onalenna Rehabilitation Hub</h1>
              <p className="text-xs lg:text-sm text-muted-foreground">Transforming Lives, Restoring Hope</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="crisis" size="sm" className="flex items-center gap-2" onClick={buttonActions.callCrisisLine}>
              <Phone className="h-4 w-4" />
              Get Help Now
            </Button>
            <Button variant="hope" size="sm" className="flex items-center gap-2" onClick={() => buttonActions.scrollToSection('give-hope')}>
              <Heart className="h-4 w-4" />
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="crisis" className="w-full" onClick={buttonActions.callCrisisLine}>
                  <Phone className="h-4 w-4 mr-2" />
                  Get Help Now
                </Button>
                <Button variant="hope" className="w-full" onClick={() => buttonActions.scrollToSection('give-hope')}>
                  <Heart className="h-4 w-4 mr-2" />
                  Donate
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;