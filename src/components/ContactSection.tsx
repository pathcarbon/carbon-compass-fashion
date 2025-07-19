import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Globe, Linkedin, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "ceo@pathcarbon.com",
      href: "mailto:ceo@pathcarbon.com"
    },
    {
      icon: Globe,
      title: "Website",
      value: "www.pathcarbon.com",
      href: "https://www.pathcarbon.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/kamilvakil",
      href: "https://linkedin.com/in/kamilvakil"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            📲 Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your carbon accounting? Let's start the conversation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <a 
                    href={method.href}
                    className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="border-primary/20 bg-primary/5 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Join the sustainable fashion revolution with PathCarbon's AI-powered carbon accounting platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Get in Touch
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Visit Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};