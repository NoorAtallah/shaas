import Image from "next/image";
import IntroHero from "@/app/components/introHero";
import AIHeroSection from "@/app/components/heroSection";
import ImpressiveSection from "./components/featureSection";
import BenefitsSection from "./components/benifetsSection";
import ChallengesSection from "./components/challengesSection";
import WhoWeSupportSection from "./components/whoWeSupportSection";
import IndustriesSection from "./components/industriesSection";
import WhyShaasSection from "./components/whyShaasSection";
import ApproachSection from "./components/approachSection";
import SplineBreakerSection from "./components/breakerSection";
import FinalSection from "./components/finalSection";
export default function Home() {
  return (
    <div>
      <IntroHero />
      <AIHeroSection />
      {/* <ImpressiveSection /> */}
      <ChallengesSection />
      <WhoWeSupportSection />
      <IndustriesSection />
      <WhyShaasSection />
      <ApproachSection />
      {/* <BenefitsSection /> */}
      <SplineBreakerSection />
      <FinalSection />
      

    </div>
  );
}
