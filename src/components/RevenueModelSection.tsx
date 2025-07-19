import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Zap, FileDown, Gift } from "lucide-react";

export const RevenueModelSection = () => {
  const revenueStreams = [
    {
      icon: CreditCard,
      title: "SaaS Subscription",
      description: "Based on number of SKUs assessed",
      badge: "Primary"
    },
    {
      icon: Zap,
      title: "API Access", 
      description: "For enterprise integrations",
      badge: "Enterprise"
    },
    {
      icon: FileDown,
      title: "Add-on Reports",
      description: "Compliance-ready exports",
      badge: "Premium"
    },
    {
      icon: Gift,
      title: "Freemium Tier",
      description: "For early-stage D2C brands (in development)",
      badge: "Coming Soon"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            💳 Revenue Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multiple revenue streams designed to scale with our clients' growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {revenueStreams.map((stream, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-10 rounded-bl-[100px]" />
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <stream.icon className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="outline" className="w-fit mb-2">
                  {stream.badge}
                </Badge>
                <CardTitle className="text-xl">{stream.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {stream.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};