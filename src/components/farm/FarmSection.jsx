import React from "react";
import Image from "next/image";

export default function FarmSection() {
  return (
    <section className="w-full py-10 md:py-20 bg-[#d8d2c5]">
      <div className="container mx-auto px-6 text-center">

        {/* SECTION TITLE */}
        <h2 className="text-4xl md:text-5xl text-[#003049] font-helvetica mb-4">
          The Saavit’s Farm
        </h2>

        <p className="text-lg text-[#003049] mb-16">
          We are passionate about our Oyster Mushrooms
        </p>

        {/* 3-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* CARD 1 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/images/farm1.png"
              alt="Our Mission"
              width={350}
              height={350}
              className="rounded-none object-cover"
            />

            <h3 className="text-2xl text-[#003049] font-helvetica mt-6 mb-4">
              Our Mission
            </h3>

            <p className="text-[#003049] text-sm leading-relaxed px-4 mb-6">
              The Saavit’s mission is to deliver pure, nutrient-rich oyster mushrooms grown 
              with sustainable practices, empowering healthier lifestyles through quality, 
              freshness, and trust while supporting local farming communities with responsible 
              cultivation.
            </p>

            <button className="px-8 py-3 bg-[#f7d038] text-black font-semibold rounded-md shadow-md transition hover:bg-[#e5c12f]">
              Learn More
            </button>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/images/farm2.png"
              alt="Care & Handling"
              width={350}
              height={350}
              className="rounded-none object-cover"
            />

            <h3 className="text-2xl text-[#003049] font-helvetica mt-6 mb-4">
              Care & Handling
            </h3>

            <p className="text-[#003049] text-sm leading-relaxed px-4 mb-6">
              The Saavit’s ensures careful handling at every stage from hygienic cultivation 
              to gentle packaging. Every mushroom is protected from contamination, preserved 
              at peak freshness, and delivered with consistent quality and professional care.
            </p>

            <button className="px-8 py-3 bg-[#f7d038] text-black font-semibold rounded-md shadow-md transition hover:bg-[#e5c12f]">
              Learn More
            </button>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/images/farm3.png"
              alt="Our Products"
              width={350}
              height={350}
              className="rounded-none object-contain"
            />

            <h3 className="text-2xl text-[#003049] font-helvetica mt-6 mb-4">
              Our Products
            </h3>

            <p className="text-[#003049] text-sm leading-relaxed px-4 mb-6">
              The Saavit’s offers a premium range of mushroom-based products crafted for 
              health and flavor. From nutrient-dense mushroom powder and aromatic coffee 
              blends to tangy mushroom pickles and carefully dried oysters, every product 
              reflects purity, freshness, and responsible cultivation.
            </p>

            <button className="px-8 py-3 bg-[#f7d038] text-black font-semibold rounded-md shadow-md transition hover:bg-[#e5c12f]">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
