import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
<section className="w-full py-10 md:py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT — Character Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/images/saavi-character.png"
            alt="Saavi Mascot"
            width={500}
            height={500}
            className="w-full max-w-sm object-contain"
            priority
          />
        </div>

        {/* RIGHT — Text Content */}
     <div className="w-full md:w-1/2 text-[#003049] text-center md:text-left">
          <h4 className="text-lg tracking-[0.2em] font-light mb-3 font-helvetica">
            WE GROW PURE
          </h4>

          <h2 className="text-4xl md:text-6xl  leading-tight mb-8 font-helvetica font-normal">
            OYSTER <br /> MUSHROOMS
          </h2>

          <p className="text-base leading-relaxed mb-4">
            From the green landscapes of Kasaragod in Kerala, India, The Saavit’s brings
            you fresh, naturally grown Oyster Mushrooms. We follow a simple philosophy:
            clean cultivation, careful harvesting, and honest food.
          </p>

          <p className="text-base leading-relaxed mb-4">
            Our mushrooms are nurtured in a controlled environment using pure substrates,
            without chemical shortcuts. The result is a tender, flavorful mushroom that’s
            rich in protein, minerals, and antioxidants.
          </p>

          <p className="text-base leading-relaxed">
            Every batch is harvested by hand, selected for freshness, and delivered quickly
            to keep its natural taste and nutrition intact. Whether you stir-fry, grill, sauté,
            or add it to your favorite curry, The Saavit’s Oyster Mushrooms bring a gentle
            aroma and a wholesome texture to every meal.
          </p>
        </div>

      </div>
    </section>
  );
}
