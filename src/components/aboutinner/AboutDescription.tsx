"use client";
import React from "react";

export default function AboutDescription() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT BLOCK */}
        <div className="text-[#2B2B2B] text-lg leading-relaxed text-center md:text-left">
          <p>
            From the green landscapes of Kasaragod in Kerala, India, The Saavit’s brings you
            fresh, naturally grown Oyster Mushrooms. We follow a simple philosophy: clean
            cultivation, careful harvesting, and honest food.
          </p>

          <p className="mt-4">
            Our mushrooms are nurtured in a controlled environment using pure substrates,
            without chemical shortcuts. The result is a tender, flavorful mushroom that’s rich
            in protein, minerals, and antioxidants.
          </p>

          <p className="mt-4">
            Every batch is harvested by hand, selected for freshness, and delivered quickly to
            keep its natural taste and nutrition intact. Whether you stir-fry, grill, sauté, or
            add it to your favorite curry, The Saavit’s Oyster Mushrooms bring a gentle aroma
            and a wholesome texture to every meal.
          </p>
        </div>

        {/* RIGHT IMAGE WITH BORDER SHAPES */}
        <div className="flex justify-center relative">
          <div className="relative w-[260px] sm:w-[340px] md:w-[450px] lg:w-[520px]">
            {/* Yellow oval behind */}
            <div className="absolute -bottom-6 left-0 w-full h-full bg-yellow-400 rounded-full -z-10 scale-110"></div>

            {/* Red oval behind */}
            <div className="absolute -top-6 right-0 w-full h-full bg-red-500 rounded-full -z-10 scale-110"></div>

            <img
              src="/assets/images/about01.png"
              alt="Oyster Mushrooms"
              className="w-full h-auto rounded-full object-cover relative z-20"
            />
          </div>
        </div>

      </div>

      {/* BOTTOM PURPOSE STATEMENT */}
      <div className="mx-auto text-center mt-12 px-6">
        <h3 className="font-semibold text-lg md:text-xl leading-relaxed text-center">
          Our purpose is to Enhance People’s Lives, and that starts at each Oyster Mushrooms farm
          with our vertically integrated affiliates and owned logistics fleet. 
          We grow, harvest, package, and deliver the freshest mushrooms and mushroom products
          365 days a year.
        </h3>
      </div>
    </section>
  );
}

