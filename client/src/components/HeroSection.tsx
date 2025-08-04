import { Button } from "@/components/ui/button";
import { Phone, Shield, MapPin } from "lucide-react";
import { buttonActions } from "@/utils/buttonActions";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <MapPin className="h-4 w-4" />
                Botswana's First Rehabilitation Center
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Botswana's Beacon of 
                <span className="text-accent block">Hope for Recovery</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                Transforming lives, restoring hope, and rebuilding families through 
                evidence-based addiction, alcoholism, and mental health treatment. 
                Free services for all Batswana.
              </p>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="crisis" 
                size="xl" 
                className="flex items-center gap-3 shadow-strong"
                onClick={() => buttonActions.scrollToSection('get-help')}
              >
                <Phone className="h-5 w-5" />
                Get Help Now - It's Free
              </Button>
              
              <Button 
                variant="gentle" 
                size="xl" 
                className="flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary"
                onClick={() => buttonActions.scrollToSection('give-hope')}
              >
                <Shield className="h-5 w-5" />
                Give Hope - Donate Today
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm font-medium">Evidence-based Treatment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm font-medium">No Cost to Patients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm font-medium">Family Support Included</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-strong flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <div className="text-6xl font-bold">7.5</div>
                  <div className="text-xl">Hectare Facility</div>
                  <div className="text-lg opacity-80">30km outside Francistown</div>
                  <div className="text-sm opacity-70">Building Botswana's Future of Recovery</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;