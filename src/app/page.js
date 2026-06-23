import Image from "next/image";
import Header from "./layout/Header_1";
import HeroSection from "./components/homepage/HeroSection";
import AboutSection from "./components/homepage/about";
import MarqueeSection from "./components/homepage/MarqueeSection";
import ResultSection from './components/homepage/ResultsSection'
import TestimonialSlider from "./components/homepage/TestimonialSlider";
import PortfolioSlider from "./components/homepage/PortfolioSlider";
import Footer from "./layout/Footer";
import ServicesSection from "./components/homepage/ServicesSection";
export default function Home() {
  return (
<div className="h-screen w-full">
<Header />
<HeroSection />
<AboutSection />
<MarqueeSection />
<ResultSection />
<PortfolioSlider />
<ServicesSection />
<TestimonialSlider />
<Footer />
</div>
  );
}
