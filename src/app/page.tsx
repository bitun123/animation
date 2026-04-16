import React from "react";

import Hero from "../components/section/Hero";
import {ScrollSection} from "@/components/section/ScrollSection";
import CardSection from "@/components/section/CardSection";
import SecondCardSection from "@/components/section/SecondCardSection";

function page() {
  return (
    <div>
      <Hero />
      <ScrollSection/>
     <CardSection/>
     <SecondCardSection/>
    </div>
  );
}

export default page;
