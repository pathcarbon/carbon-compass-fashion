import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Clock, Globe, CheckCircle, TrendingUp } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Massive Carbon Footprint",
      description: "Fashion emits 2B+ tonnes CO₂ annually. Most brands don't know their true footprint."
    },
    {
      icon: Globe,
      title: "No Standardized Data",
      description: "No standardized product-level carbon data exists across fashion supply chains."
    },
    {
      icon: Clock,
      title: "Manual LCAs Don't Scale",
      description: "Manual LCAs are expensive, slow, and don't scale for modern businesses."
    },
    {
      icon: TrendingUp,
      title: "Regulatory Demands",
      description: "EU PEF, CSRD, and SBTi regulations demand automated traceability."
    },
    {
      icon: CheckCircle,
      title: "Trust Gap",
      description: "Customers and investors demand proof, not just promises."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            🔧 The Problem We're Solving
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The fashion industry faces unprecedented challenges in carbon accountability and transparency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <problem.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};