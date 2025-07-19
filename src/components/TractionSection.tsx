import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Layers, BarChart, Users, Lightbulb, GraduationCap } from "lucide-react";

export const TractionSection = () => {
  const tractionPoints = [
    {
      icon: Rocket,
      title: "MVP in Development",
      description: "SKU-level tracking with comprehensive footprint analysis",
      status: "In Progress"
    },
    {
      icon: Layers,
      title: "25+ Materials Mapped",
      description: "4 supply chain stages mapped (PEF aligned)",
      status: "Complete"
    },
    {
      icon: BarChart,
      title: "Competitive Analysis",
      description: "Benchmarked against Carbonfact, Higg, and PEF",
      status: "Complete"
    },
    {
      icon: Lightbulb,
      title: "IP Development",
      description: "Region-specific emission factors being developed",
      status: "In Progress"
    },
    {
      icon: Users,
      title: "Partnership Discussions",
      description: "Pilot conversations with industry partners",
      status: "Active"
    },
    {
      icon: GraduationCap,
      title: "Academic Validation",
      description: "Methodology peer-reviewed during founder's PhD",
      status: "Validated"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Complete":
      case "Validated":
        return "bg-success text-success-foreground";
      case "In Progress":
      case "Active":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            ✅ Current Traction
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building on solid foundations with validated methodology and industry partnerships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tractionPoints.map((point, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <point.icon className="h-7 w-7 text-primary" />
                  </div>
                  <Badge className={getStatusColor(point.status)}>
                    {point.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};