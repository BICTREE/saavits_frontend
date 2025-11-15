"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="w-full bg-[#EDF2F3] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        
        {/* Left Form */}
        <div className="bg-white p-10 rounded-xl shadow-sm h-full min-h-[450px] flex flex-col">
          <h2 className="text-3xl font-semibold text-gray-800 leading-snug mb-8">
            Feel Free to Get in Touch or Visit our Location.
          </h2>

          <form className="space-y-6 flex-1 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 pt-2 pb-3 focus:border-gray-800 outline-none bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 pt-2 pb-3 focus:border-gray-800 outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-700">Phone Number *</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 pt-3  focus:border-gray-800 outline-none bg-transparent"
                  />
                </div>

                <div>
                  <label className="text-gray-700">Choose an Option</label>
                  <select className="w-full border border-gray-300 p-3  bg-transparent focus:border-gray-800 outline-none">
                    <option>Select Option</option>
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Feedback</option>
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div>
                <label className="text-gray-700">Type message *</label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-300 pt-2 pb-3 focus:border-gray-800 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Button */}
          <button className=" w-fit mt-6 flex items-center justify-center gap-2 bg-[#048b43] text-white px-6 py-3 rounded-full hover:bg-[#0a6c38] transition">
  Submit Now <ArrowUpRight size={18} />
</button>
          </form>
        </div>

        {/* Right Map */}
        <div className="w-full h-full min-h-[450px] rounded-xl overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.1660339535!2d74.98588177506865!3d12.505151687768944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDMwJzE4LjYiTiA3NMKwNTknMTguNCJF!5e0!3m2!1sen!2sin!4v1763217394802!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
}
