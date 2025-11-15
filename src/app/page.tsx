import React from "react";
import Hero from "../components/herobanner/HeroCom";
import About from "../components/about/AboutSection"
import Farm from "../components/farm/FarmSection"
import HealthBenefits from "../components/healthbenefits/HealthBenefits"
import WhyChooseUs from "../components/whychoose/WhyChooseUs"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About/>
      <Farm/>
      <HealthBenefits/>
      <WhyChooseUs/>
    </div>
  );
}



