import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TargetCustomersSection } from "@/components/TargetCustomersSection";
import { RevenueModelSection } from "@/components/RevenueModelSection";
import { MarketOpportunitySection } from "@/components/MarketOpportunitySection";
import { TractionSection } from "@/components/TractionSection";
import { TeamSection } from "@/components/TeamSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TargetCustomersSection />
      <RevenueModelSection />
      <MarketOpportunitySection />
      <TractionSection />
      <TeamSection />
      <RoadmapSection />
      <ContactSection />
    </div>
  );
};

export default Index;
