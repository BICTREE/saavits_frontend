"use client";

import React, { useState, useEffect } from "react";
import Hero from "../components/herobanner/HeroCom";
import About from "../components/about/AboutSection";
import Farm from "../components/farm/FarmSection";
import HealthBenefits from "../components/healthbenefits/HealthBenefits";
import WhyChooseUs from "../components/whychoose/WhyChooseUs";

import PopupCom from "@/components/popup/PopupCom";

export default function HomePage() {
  const [openPopup, setOpenPopup] = useState(false);

  // Auto open popup when site loads
  useEffect(() => {
    setOpenPopup(true);
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Farm />
      <HealthBenefits />
      <WhyChooseUs />

      {/* Auto Popup */}
      <PopupCom open={openPopup} onClose={() => setOpenPopup(false)} />
    </div>
  );
}
