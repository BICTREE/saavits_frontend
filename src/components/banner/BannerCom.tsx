"use client";

import React from "react";
import { usePathname } from "next/navigation";

const BannerCom = () => {
  const pathname = usePathname();
  const segment = pathname.split("/").filter(Boolean)[0] || "about";

  // ✅ Define banner images per route (only About Us, Products, Contact)
  const bannerMap: Record<string, string> = {
    aboutus: "/assets/images/banner-aboutus.png",
    products: "/assets/images/banner-contact.png",
    contact: "/assets/images/banner-contact.png",
  };

  const titleMap: Record<string, string> = {
    about: "About Us",
    products: "Our Products",
    contact: "Contact Us",
  };

  // final selected values
  const image = bannerMap[segment] ?? "/assets/images/banner-contact.png";
  const title = titleMap[segment] ?? "Page";

  return (
    <section
      className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      {/* Text */}
      {/* <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
      </div> */}
    </section>
  );
};

export default BannerCom;
