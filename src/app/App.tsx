import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { TrainerSection } from "./components/TrainerSection";
import { BeforeAfterCarousel } from "./components/BeforeAfterCarousel";
import { WhatsAppCTA } from "./components/WhatsAppCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TrainerSection />
      <BeforeAfterCarousel />
      <WhatsAppCTA />
      <Footer />
    </div>
  );
}