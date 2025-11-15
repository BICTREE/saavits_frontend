import Image from "next/image";
import React from "react";

export default function HealthBenefits() {
  return (
    <section className="w-full py-10 md:py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#003049] font-helvetica mb-3">
            The Saavit’s <br /> Oyster Mushroom <br /> Health Benefits
          </h2>
          <p className="text-[#003049] text-lg">
            We are care about your health
          </p>
        </div>

        {/* CONTENT ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

     {/* LEFT TEXT */}
<div className="text-center md:text-left">
  <p className="text-[#003049] text-base leading-relaxed">
    Oyster mushrooms are a powerhouse of nutrition, offering abundant antioxidants,
    vitamins, and essential minerals. They support a strong immune system, enhance heart
    and brain health, aid digestion, and help regulate cholesterol levels. Rich in protein
    and dietary fiber yet low in calories, they promote weight management and overall
    wellness.
    <br /><br />
    Regular consumption may improve energy levels, protect against oxidative stress, and
    contribute to a balanced, healthy lifestyle, making them an ideal addition to daily
    diets for all ages.
  </p>
</div>


          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/assets/images/helthbenifit.png"
              alt="Oyster Mushroom Health Benefits"
              width={550}
              height={550}
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
