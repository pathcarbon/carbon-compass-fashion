import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Shield } from "lucide-react";

export const TargetCustomersSection = () => {
  const idealUsers = [
    "Apparel & footwear brands (SMEs and export-focused)",
    "Sustainable D2C fashion brands", 
    "ESG and product compliance teams"
  ];

  const whyTheyNeed = [
    "Meet regulatory demands (PEF, SBTi, CSRD)",
    "Get accurate Scope 3 emissions data",
    "Enable carbon labelling & consumer transparency",
    "Save LCA consultant fees and turnaround time"
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            📈 Target Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Serving the fashion industry's most sustainability-focused companies and teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-lg border-0 animate-fade-in">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Ideal Users</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {idealUsers.map((user, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{user}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-0 animate-fade-in">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-success-foreground" />
                </div>
                <CardTitle className="text-2xl">Why They Need Us</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {whyTheyNeed.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{reason}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};