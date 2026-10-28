import Hero from "../../sections/Hero/Hero";
import StorySection from "../../sections/StorySection/StorySection";
import OfferingsSection from "../../sections/OfferingsSection/OfferingsSection";
import ProblemSolution from "../../sections/ProblemSolution/ProblemSolution";
import FeaturesSection from "../../sections/FeaturesSection/FeaturesSection";
import HowItWorks from "../../sections/HowItWorks/HowItWorks";
import DemoSection from "../../sections/DemoSection/DemoSection";
import SolutionsGrid from "../../sections/SolutionsGrid/SolutionsGrid";
import WhyUrQR from "../../sections/WhyUrQR/WhyUrQR";
import FAQSection from "../../sections/FAQSection/FAQSection";
import FinalCTA from "../../sections/FinalCTA/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OfferingsSection />
      <StorySection />
      <ProblemSolution />
      <FeaturesSection />
      <DemoSection />
      <HowItWorks />
      <SolutionsGrid />
      <WhyUrQR />
      <FAQSection limit={6} />
      <FinalCTA />
    </>
  );
}
