import HeroSectionFeatures from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroSectionFeatures />
      <PricingSection />
    </main>
  )
}