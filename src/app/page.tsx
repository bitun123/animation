import Hero from "../components/section/Hero";
import { ScrollSection } from "@/components/section/ScrollSection";
import CardSection from "@/components/section/CardSection";
import SecondCardSection from "@/components/section/SecondCardSection";
import OpportunitySection from "@/components/section/OpportunitySection";
import Testimonial from "@/components/section/Testimonial";
import FaqSection from "@/components/section/FaqSection";
import FooterSection from "@/components/section/FooterSection";

function page() {
  return (
    <div>
      <Hero />
      <ScrollSection />
      <CardSection />
      <SecondCardSection />
      <OpportunitySection />
      <Testimonial />
      <FaqSection />
      <FooterSection/>
    </div>
  );
}

export default page;
