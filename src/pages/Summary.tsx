import { Navbar } from "@/components/Navbar";
import { SummaryPage } from "@/components/SummaryPage";

const Summary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SummaryPage />
    </div>
  );
};

export default Summary;