"use client";

import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="w-full py-16 bg-[#EDF2F2]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Top Badge */}
        <div className="inline-block px-4 py-1 border rounded-full border-teal-600/30 text-[#0a6c38] text-sm font-medium">
          CONTACT INFO
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold mt-4">
          <span className="text-[#0a6c38]">Reach</span> Out to Us
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#D7E7E7]">
              <MapPin className="text-teal-700" size={34} />
            </div>

            <h3 className="text-xl font-semibold mt-6">Our Location</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
             Behind ICICI Bank ,Bank Road<br/>Kasaragod, Kerala, India - 671131
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#D7E7E7]">
              <Mail className="text-teal-700" size={34} />
            </div>

            <h3 className="text-xl font-semibold mt-6">Email us</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              info@thesaavits.com <br /> sales@thesaavits.com
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#D7E7E7]">
              <Phone className="text-[#0a6c38]" size={34} />
            </div>

            <h3 className="text-xl font-semibold mt-6">Call us</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
            +91 70129 47262
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
