import BibleVerseSlider from "./components/BibleVerseSlider";
import CallToActionSection from "./components/CallToAction";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BenefitsSection from "./components/BenefitsSection";
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ServicesSection />
      <BibleVerseSlider />
      <FeaturesSection />
      <CallToActionSection />
    </main>
  );
}

