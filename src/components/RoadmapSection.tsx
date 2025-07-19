import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Target, Award, Rocket, Users } from "lucide-react";

export const RoadmapSection = () => {
  const roadmapItems = [
    {
      icon: Target,
      period: "Q3 2025",
      title: "Finalize MVP",
      description: "Complete development of core platform features",
      status: "upcoming"
    },
    {
      icon: Users,
      period: "Q4 2025", 
      title: "Pilot Programs",
      description: "Pilot with 3–5 D2C/export brands",
      status: "upcoming"
    },
    {
      icon: Award,
      period: "Q1 2026",
      title: "Funding & Grants",
      description: "Apply for climate-tech grants & incubators",
      status: "planned"
    },
    {
      icon: Rocket,
      period: "Early 2026",
      title: "Full Launch",
      description: "Launch full version with 100+ materials",
      status: "planned"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-warning text-warning-foreground";
      case "planned":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-24 bg-gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ⚡ Way Forward
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our strategic roadmap for scaling PathCarbon and transforming the fashion industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-sm text-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <Badge className={`${getStatusColor(item.status)} mb-2`}>
                  {item.period}
                </Badge>
                <CardTitle className="text-xl text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};