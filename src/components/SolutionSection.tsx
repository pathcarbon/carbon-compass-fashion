import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Cpu, BarChart3, FileText, ArrowRight } from "lucide-react";

export const SolutionSection = () => {
  const steps = [
    {
      icon: Database,
      title: "Input Product Data",
      description: "Enter SKU details, fabric composition, sourcing regions, and specs.",
      step: "1"
    },
    {
      icon: Cpu,
      title: "Supply Chain Modeling",
      description: "We map emissions across: Fibre → Yarn → Fabric → Garment",
      step: "2"
    },
    {
      icon: BarChart3,
      title: "Auto-Calculated Footprint",
      description: "Using EF, Ecoinvent, peer-reviewed research, and GHG Protocol-compliant data",
      step: "3"
    },
    {
      icon: FileText,
      title: "Dashboard & Reports",
      description: "Get interactive analytics and downloadable reports.",
      step: "4"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            ⚙️ What PathCarbon Does
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            AI-powered, product-level carbon footprinting — from fibre to fashion.
          </p>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            How it Works
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 animate-fade-in h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                    <Badge 
                      variant="secondary" 
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full p-0 flex items-center justify-center font-bold"
                    >
                      {step.step}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">For Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                A plug-and-play tool for product compliance, storytelling, and consumer trust.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl text-accent-foreground">For Investors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                A scalable solution with network effects, regulatory relevance, and clear B2B value.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};