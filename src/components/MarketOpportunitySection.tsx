import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Globe, MapPin, Rocket, DollarSign } from "lucide-react";

export const MarketOpportunitySection = () => {
  const opportunities = [
    {
      icon: DollarSign,
      title: "$10B+ Market by 2030",
      description: "Global Fashion Sustainability market opportunity",
      value: "$10B+"
    },
    {
      icon: Globe,
      title: "90,000+ Global Brands",
      description: "Brands exporting from India, EU, Bangladesh, Vietnam",
      value: "90,000+"
    },
    {
      icon: MapPin,
      title: "20,000+ Indian Exporters",
      description: "Indian garment exporters currently underserved",
      value: "20,000+"
    },
    {
      icon: Rocket,
      title: "Early Mover Advantage",
      description: "EU-compliance-ready tools in emerging market",
      value: "First"
    },
    {
      icon: TrendingUp,
      title: "Rising Investment",
      description: "Investor activity in climate SaaS and ESG compliance tech",
      value: "Growing"
    }
  ];

  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            🌎 Market Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A massive and growing market opportunity in sustainable fashion technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <opportunity.icon className="h-10 w-10 text-accent-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {opportunity.value}
                </div>
                <CardTitle className="text-xl">{opportunity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {opportunity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};