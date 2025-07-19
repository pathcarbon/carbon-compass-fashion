import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Carbon tracking visualization"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Decoding Emissions.
            <br />
            <span className="text-accent">Powering Sustainable Fashion.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            PathCarbon is a carbon accounting SaaS for apparel and footwear companies, 
            helping them comply with global regulations while gaining customer trust — 
            and helping investors identify scalable, impact-driven innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/summary">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4 animate-glow"
              >
                <Play className="mr-2 h-5 w-5" />
                Try the Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
            >
              Get in Touch
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center">
            <a 
              href="https://pathcarbon.com" 
              className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              🌐 Visit Our Website
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};