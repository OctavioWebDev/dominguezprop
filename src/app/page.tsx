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
      <section className="">
        <h2 className="text-3xl font-semibold text-white mb-16 text-center">Words of Encouragement</h2>
        <BibleVerseSlider />
      </section>
      <FeaturesSection />
      <CallToActionSection />
    </main>
  );
}

