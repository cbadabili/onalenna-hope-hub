import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Heart, Building, Users, Target, DollarSign, Calendar } from "lucide-react";
import { buttonActions } from "@/utils/buttonActions";

const GiveHopeSection = () => {
  const donationLevels = [
    {
      amount: "BWP 200",
      impact: "Provides crisis counseling session for one person",
      icon: Heart
    },
    {
      amount: "BWP 1,000",
      impact: "Funds one week of group therapy sessions",
      icon: Users
    },
    {
      amount: "BWP 2,000",
      impact: "Supports family counseling program for one month",
      icon: Building
    },
    {
      amount: "Custom",
      impact: "Every contribution makes a meaningful difference",
      icon: Target
    }
  ];

  const milestones = [
    {
      phase: "Phase 1",
      title: "Foundation & Core Facilities",
      amount: "BWP 10M",
      description: "Essential infrastructure, counseling rooms, administrative offices",
      status: "current"
    },
    {
      phase: "Phase 2", 
      title: "Residential Treatment Center",
      amount: "BWP 30M",
      description: "Accommodation facilities, medical units, dining facilities",
      status: "planned"
    },
    {
      phase: "Phase 3",
      title: "Specialized Programs & Outreach",
      amount: "BWP 40M",
      description: "Youth programs, family centers, community outreach facilities",
      status: "planned"
    }
  ];

  // Simulated progress - in real implementation this would come from backend
  const currentFunding = 2500000; // BWP 2.5M raised
  const totalGoal = 10000000; // BWP 10M for Phase 1
  const progressPercentage = (currentFunding / totalGoal) * 100;

  return (
    <section id="give-hope" className="py-20 bg-gradient-healing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Give Hope, Transform Lives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your support makes recovery possible for every Motswana, regardless of their financial situation. 
            Together, we're building Botswana's future of healing and hope.
          </p>
        </div>

        {/* Funding Progress */}
        <div className="bg-white rounded-2xl shadow-medium p-8 sm:p-12 mb-16 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Current Fundraising Progress
            </h3>
            <p className="text-muted-foreground">Phase 1: Foundation & Core Facilities</p>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-muted-foreground">
                BWP {currentFunding.toLocaleString()} raised
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                BWP {totalGoal.toLocaleString()} goal
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3 bg-secondary" />
            <div className="text-center mt-4">
              <span className="text-2xl font-bold text-primary">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">245</div>
              <div className="text-sm text-muted-foreground">Donors</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">12</div>
              <div className="text-sm text-muted-foreground">Corporate Partners</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">BWP 7.5M</div>
              <div className="text-sm text-muted-foreground">Remaining for Phase 1</div>
            </div>
          </div>
        </div>

        {/* Ways to Give */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
            Choose Your Impact Level
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {donationLevels.map((level, index) => (
              <Card key={index} className="bg-white shadow-soft hover:shadow-medium transition-all duration-300 border-border group hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-hope rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <level.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-foreground font-bold">{level.amount}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed mb-4">
                    {level.impact}
                  </p>
                  <Button 
                    variant="hero" 
                    className="w-full" 
                    size="sm"
                    onClick={() => buttonActions.donate(level.amount !== "Custom" ? level.amount : undefined)}
                  >
                    Donate {level.amount !== "Custom" ? level.amount : "Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hope" size="xl" className="shadow-strong" onClick={() => buttonActions.donate()}>
              <DollarSign className="h-5 w-5 mr-2" />
              Make a One-Time Donation
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              All donations are tax-deductible. Receipts provided immediately.
            </p>
          </div>
        </div>

        {/* Development Phases */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
            Our Vision: Building Hope in Phases
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className={`bg-white shadow-soft border-border ${milestone.status === 'current' ? 'ring-2 ring-primary shadow-medium' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={milestone.status === 'current' ? 'default' : 'secondary'} className="text-xs">
                      {milestone.status === 'current' ? 'In Progress' : 'Planned'}
                    </Badge>
                    <span className="text-sm font-medium text-muted-foreground">{milestone.phase}</span>
                  </div>
                  <CardTitle className="text-xl text-foreground">{milestone.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{milestone.amount}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* The Vision */}
        <div className="bg-white rounded-2xl shadow-medium p-8 sm:p-12 border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                The Francistown Vision
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our 7.5-hectare facility, located 30km outside Francistown, will be 
                  a comprehensive healing environment designed specifically for recovery 
                  and family restoration.
                </p>
                <p>
                  The campus will feature residential treatment facilities, family 
                  counseling centers, recreational therapy spaces, and community 
                  outreach programs—all set in Botswana's beautiful natural landscape.
                </p>
                <p>
                  This won't just be a treatment center; it will be a beacon of hope 
                  that demonstrates Botswana's commitment to the health and wellbeing 
                  of all its citizens.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" onClick={buttonActions.viewMasterPlan}>
                  <Building className="h-5 w-5 mr-2" />
                  View Master Plan
                </Button>
                <Button variant="outline" size="lg" onClick={buttonActions.viewDevelopmentTimeline}>
                  <Calendar className="h-5 w-5 mr-2" />
                  Development Timeline
                </Button>
              </div>
            </div>

            <div className="bg-accent rounded-2xl p-8 border border-border">
              <h4 className="text-xl font-semibold text-accent-foreground mb-6">
                Facility Features
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-accent-foreground">50-bed residential treatment center</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-accent-foreground">Family counseling and education center</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-accent-foreground">Medical and psychiatric facilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-accent-foreground">Recreational and occupational therapy spaces</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-accent-foreground">Community outreach and education center</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-accent-foreground">Administrative and training facilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveHopeSection;