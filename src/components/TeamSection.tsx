import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, GraduationCap, Code, Users, Lightbulb } from "lucide-react";

export const TeamSection = () => {
  const teamMembers = [
    {
      icon: GraduationCap,
      name: "Dr. Mohd Kamil Vakil",
      role: "Founder & CEO",
      description: "PhD in Sustainability & Resource Efficiency | LCA Consultant and BI Expert | 100+ carbon footprints done",
      vision: "Democratizing carbon intelligence for every fashion brand",
      badge: "Founder"
    },
    {
      icon: Lightbulb,
      name: "Dr. Deep Mukherjee",
      role: "Mentor (IIT Kanpur)",
      description: "Sustainability & climate economics expert",
      badge: "Mentor"
    },
    {
      icon: Code,
      name: "Shadab",
      role: "Tech Advisor",
      description: "UX & architecture specialist",
      badge: "Advisor"
    },
    {
      icon: Users,
      name: "Ajay",
      role: "Intern",
      description: "Backend Development",
      badge: "Developer"
    },
    {
      icon: Code,
      name: "Aamir",
      role: "Freelance Developer",
      description: "Frontend & API development",
      badge: "Developer"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Founder":
        return "bg-primary text-primary-foreground";
      case "Mentor":
        return "bg-success text-success-foreground";
      case "Advisor":
        return "bg-warning text-warning-foreground";
      case "Developer":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            👨‍💼 Team Behind PathCarbon
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse team of sustainability experts, developers, and industry advisors.
          </p>
        </div>
        
        {/* Founder Card - Featured */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-primary/20 shadow-lg bg-primary/5 animate-fade-in">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-10 w-10 text-primary-foreground" />
              </div>
              <Badge className="bg-primary text-primary-foreground mb-4 text-sm">
                Founder
              </Badge>
              <CardTitle className="text-2xl">{teamMembers[0].name}</CardTitle>
              <p className="text-lg text-primary font-semibold">{teamMembers[0].role}</p>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {teamMembers[0].description}
              </p>
              <div className="bg-background rounded-lg p-4 border border-primary/20">
                <p className="text-primary font-semibold">Vision:</p>
                <p className="text-muted-foreground italic">"{teamMembers[0].vision}"</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Rest of Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(1).map((member, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <member.icon className="h-8 w-8 text-muted-foreground" />
                </div>
                <Badge className={getBadgeColor(member.badge)}>
                  {member.badge}
                </Badge>
                <CardTitle className="text-lg mt-2">{member.name}</CardTitle>
                <p className="text-muted-foreground font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};