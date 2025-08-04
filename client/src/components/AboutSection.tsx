import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Target, Globe } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Compassionate Care",
      description: "Non-judgmental, evidence-based treatment rooted in empathy and understanding."
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "Healing extends beyond the individual to rebuild and strengthen family bonds."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Partnering with leading South African centers for proven treatment methodologies."
    },
    {
      icon: Globe,
      title: "Accessible to All",
      description: "Free services ensure no Motswana is turned away due to financial constraints."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-healing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As Botswana's first and only rehabilitation center, we're pioneering a new era of 
            hope and healing for individuals and families affected by addiction and mental health challenges.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-medium p-8 sm:p-12 mb-16 border border-border">
          <div className="text-center">
            <blockquote className="text-2xl sm:text-3xl font-bold text-primary mb-6 italic">
              "To transform lives, restore hope, and rebuild families"
            </blockquote>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              This mission drives everything we do. We believe that recovery is not just possible—it's 
              a fundamental right. Through evidence-based treatment, family support, and community 
              partnerships, we're creating lasting change in Botswana.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="bg-white shadow-soft hover:shadow-medium transition-shadow duration-300 border-border">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-hope rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Onalenna Rehabilitation Hub was born from a critical need in Botswana. 
                Despite the growing challenges of addiction and mental health issues, 
                our nation lacked dedicated, professional treatment facilities.
              </p>
              <p>
                Founded with the vision of bridging this gap, ORH represents hope for 
                thousands of Batswana and their families. Our 7.5-hectare facility, 
                30km outside Francistown, will serve as a beacon of healing and transformation.
              </p>
              <p>
                Through partnerships with leading South African rehabilitation centers, 
                we bring world-class, evidence-based treatment methods to Botswana, 
                ensuring that geography is no longer a barrier to recovery.
              </p>
            </div>
          </div>

          <div className="bg-accent rounded-2xl p-8 border border-border">
            <h4 className="text-xl font-semibold text-accent-foreground mb-6">
              By the Numbers
            </h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1st</div>
                <div className="text-sm text-accent-foreground">Rehabilitation Center in Botswana</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-accent-foreground">Free Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">7.5</div>
                <div className="text-sm text-accent-foreground">Hectare Facility</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-accent-foreground">Lives to Transform</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;