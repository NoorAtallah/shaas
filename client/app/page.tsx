import Image from "next/image";
import AIHeroSection from "@/app/components/heroSection";
import ImpressiveSection from "./components/featureSection";
import BenefitsSection from "./components/benifetsSection";
import SplineBreakerSection from "./components/breakerSection";
import FinalSection from "./components/finalSection";
export default function Home() {
  return (
    <div>
      <AIHeroSection />
      <ImpressiveSection />
      <BenefitsSection />
      <SplineBreakerSection />
      <FinalSection />
      

    </div>
  );
}
