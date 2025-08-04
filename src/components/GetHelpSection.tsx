import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Users, Shield, Phone, MessageCircle } from "lucide-react";
import { buttonActions } from "@/utils/buttonActions";

const GetHelpSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Addiction Treatment",
      description: "Comprehensive substance abuse treatment using evidence-based methodologies.",
      features: ["Individual counseling", "Group therapy", "Medical support", "Relapse prevention"]
    },
    {
      icon: Heart,
      title: "Mental Health Support",
      description: "Professional mental health services addressing underlying psychological conditions.",
      features: ["Depression treatment", "Anxiety management", "Trauma therapy", "Emotional regulation"]
    },
    {
      icon: Users,
      title: "Family Counseling",
      description: "Healing extends to family members affected by addiction and mental health challenges.",
      features: ["Family therapy", "Support groups", "Education programs", "Relationship rebuilding"]
    },
    {
      icon: Shield,
      title: "Aftercare Support",
      description: "Ongoing support to ensure long-term recovery and prevent relapse.",
      features: ["Follow-up sessions", "Peer support", "Life skills training", "Community integration"]
    }
  ];

  const warningSignsAddiction = [
    "Sudden changes in behavior or personality",
    "Neglecting responsibilities at work, school, or home",
    "Social isolation and withdrawal from family/friends",
    "Physical health deterioration",
    "Financial problems or unexplained money issues",
    "Lying or being secretive about activities"
  ];

  const warningSignsMentalHealth = [
    "Persistent feelings of sadness or hopelessness",
    "Extreme mood swings or emotional outbursts",
    "Changes in sleep patterns (too much or too little)",
    "Loss of interest in activities once enjoyed",
    "Difficulty concentrating or making decisions",
    "Thoughts of self-harm or suicide"
  ];

  return (
    <section id="get-help" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get Help Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional, compassionate care available to all Batswana. No one is turned away due to financial constraints.
          </p>
        </div>

        {/* Emergency Help */}
        <div className="bg-gradient-hope rounded-2xl p-8 text-white text-center mb-16 shadow-medium">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
          <p className="text-lg mb-6 opacity-90">
            If you or someone you know is in crisis, don't wait. Help is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="crisis" size="lg" className="bg-white text-primary hover:bg-white/90" onClick={buttonActions.callCrisisLine}>
              <Phone className="h-5 w-5 mr-2" />
              Call Crisis Line: +267 72808110
            </Button>
            <Button variant="gentle" size="lg" className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary" onClick={buttonActions.chatWithCounselor}>
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat with Counselor
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-soft hover:shadow-medium transition-all duration-300 border-border">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-hope rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Warning Signs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-accent rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-accent-foreground mb-6">
              Addiction Warning Signs
            </h3>
            <div className="space-y-3">
              {warningSignsAddiction.map((sign, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5 px-2 py-1 text-xs">
                    {index + 1}
                  </Badge>
                  <span className="text-accent-foreground text-sm leading-relaxed">{sign}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-6">
              Mental Health Warning Signs
            </h3>
            <div className="space-y-3">
              {warningSignsMentalHealth.map((sign, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5 px-2 py-1 text-xs">
                    {index + 1}
                  </Badge>
                  <span className="text-secondary-foreground text-sm leading-relaxed">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* For Families */}
        <div className="bg-white rounded-2xl shadow-medium p-8 sm:p-12 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              For Families & Loved Ones
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Supporting someone through recovery is a journey that affects the whole family. 
              We're here to help you navigate this challenging time with understanding and practical guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hope rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Family Support Groups</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Connect with other families facing similar challenges in a supportive environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hope rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Family Counseling</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Professional guidance on how to communicate effectively and set healthy boundaries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hope rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Education Programs</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Learn about addiction, mental health, and effective ways to support recovery.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="hero" size="lg" onClick={buttonActions.familyConsultation}>
              Schedule Family Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetHelpSection;