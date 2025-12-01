import Image from "next/image";
import AIHeroSection from "@/app/components/heroSection";
import ImpressiveSection from "./components/featureSection";
import BenefitsSection from "./components/benifetsSection";
import SplineBreakerSection from "./components/breakerSection";
export default function Home() {
  return (
    <div>
      <AIHeroSection />
      <ImpressiveSection />
      <BenefitsSection />
      <SplineBreakerSection />
      

    </div>
  );
}
