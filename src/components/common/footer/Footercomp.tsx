import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">

        {/* ---------- Navigation Row ---------- */}
        <ul className="flex flex-wrap justify-center gap-6 text-gray-300 text-lg leading-tight">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About Us</li>
          <li className="hover:text-white cursor-pointer">Products</li>
          <li className="hover:text-white cursor-pointer">Gallery</li>
          <li className="hover:text-white cursor-pointer">Contact Us</li>
        </ul>

        {/* ---------- Social Icons ---------- */}
        <div className="flex gap-6 mt-2">
          <a
            href="#"
            className="text-gray-300 hover:text-white text-2xl transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white text-2xl transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white text-2xl transition"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* ---------- Divider Line ---------- */}
        <div className="w-full max-w-xl border-t border-gray-700"></div>

        {/* ---------- Address Line 1 ---------- */}
        <p className="text-gray-300 text-base leading-tight">
          Behind ICICI Bank, Bank Road, Kasaragod, Kerala, India - 671131
        </p>

        {/* ---------- Address Line 2 ---------- */}
        <p className="text-gray-300 text-base leading-tight">
          Mail: <span className="text-gray-200">info@thesaavits.com</span>, 
          Phone: <span className="text-gray-200">+91 70129 47262</span>
        </p>

      </div>

      {/* ---------- Bottom Line ---------- */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-4 leading-tight">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
