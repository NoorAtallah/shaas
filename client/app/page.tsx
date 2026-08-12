import Image from "next/image";
import IntroHero from "@/app/components/introHero";
import AIHeroSection from "@/app/components/heroSection";
import ImpressiveSection from "./components/featureSection";
import BenefitsSection from "./components/benifetsSection";
import SplineBreakerSection from "./components/breakerSection";
import FinalSection from "./components/finalSection";
export default function Home() {
  return (
    <div>
      <IntroHero />
      <AIHeroSection />
      <ImpressiveSection />
      <BenefitsSection />
      <SplineBreakerSection />
      <FinalSection />
      

    </div>
  );
}
