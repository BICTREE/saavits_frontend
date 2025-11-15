import React from "react";

export default function Hero() {
  return (
    <section
      className="
        relative w-full   h-[60vh] md:h-[80vh]  flex items-center 
        bg-cover bg-center
      "
      style={{
        backgroundImage: "url('/assets/images/hero-banner.png')",
      }}
    >
      {/* MOBILE BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-0 bg-cover bg-center md:hidden
        "
        style={{
          backgroundImage: "url('/assets/images/hero-banner-mobile.png')",
        }}
      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="
          container px-6 text-white pb-10
          text-center md:text-left
        ">
          <h1 className="
            text-5xl sm:text-6xl md:text-9xl 
            font-light leading-tight mb-6 tracking-wide font-berday
          ">
            It’s all about <br /> Oyster Mushroom
          </h1>

          <div className="flex md:justify-start justify-center">
            <button className="
              px-10 py-4 bg-[#f7d038] text-white text-lg 
              rounded-lg shadow-lg transition-all duration-200 
              hover:bg-[#e5c12f]
            ">
              Order now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
