"use client";
import React from "react";

export default function ContactBanner() {
  return (
    <section className="w-full bg-[#E9CDA0] py-6 md:py-10"> 
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 gap-6">

        {/* Left Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src="/assets/images/saavi-contact.png"
            alt="About Us Character"
            className="w-40 sm:w-48 md:w-64 object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#3A2D21] font-berday leading-tight">
      Contact Us

          </h2>
        </div>

      </div>
    </section>
  );
}
