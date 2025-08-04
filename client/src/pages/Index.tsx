import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GetHelpSection from "@/components/GetHelpSection";
import GiveHopeSection from "@/components/GiveHopeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GetHelpSection />
      <GiveHopeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
