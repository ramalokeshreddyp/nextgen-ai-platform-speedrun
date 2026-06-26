import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import PricingSection from "@/components/PricingSection";
import SocialProofSection from "@/components/SocialProofSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeatureShowcase />
        <PricingSection />
        <SocialProofSection />
      </main>
      <SiteFooter />
    </>
  );
}
