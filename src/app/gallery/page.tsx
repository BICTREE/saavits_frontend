"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import GallerytBanner from "@/components/banner/GalleryBanner";

interface GalleryItem {
  title: string;
  img: string;
}

const galleryItems: GalleryItem[] = [
  { title: "Mushroom Coffee", img: "/assets/images/gallery01.png" },
  { title: "Wellness Powders", img: "/assets/images/gallery02.png" },
  { title: "Daily Supplements", img: "/assets/images/gallery03.png" },
  { title: "Mushroom Coffee", img: "/assets/images/gallery04.png" },
  { title: "Wellness Powders", img: "/assets/images/gallery05.png" },
  { title: "Daily Supplements", img: "/assets/images/gallery06.png" },
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openPopup = (index: number) => setCurrentIndex(index);
  const closePopup = () => setCurrentIndex(null);

  const nextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % galleryItems.length);
  };

  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  // Keyboard support
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (currentIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closePopup();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <>
      <GallerytBanner />

      <div className="bg-[#f7f4ef] min-h-screen py-16 px-4 md:px-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-[#553b2b]">Our Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Explore highlights captured through our journey
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => openPopup(i)}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={400}
                className="w-full h-72 object-cover transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-40 transition"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={closePopup}
        >
          <div
            className="relative max-w-[80vw] max-h-[80vh] w-auto animate-zoomIn flex items-center justify-center bg-black/20 rounded-xl backdrop-blur-sm p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 bg-white/20 text-white backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center text-3xl hover:bg-white/30"
              onClick={closePopup}
            >
              ×
            </button>

            {/* Prev Button */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center text-4xl text-white hover:bg-white/30 transition"
              onClick={prevImage}
            >
              ❮
            </button>

            {/* Next Button */}
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center text-4xl text-white hover:bg-white/30 transition"
              onClick={nextImage}
            >
              ❯
            </button>

            {/* Image */}
            <div className="max-h-[70vh] max-w-[70vw] flex justify-center items-center">
              <Image
                src={galleryItems[currentIndex].img}
                alt="Gallery Preview"
                width={700}
                height={400}
                className="rounded-xl object-contain transition-all duration-500 ease-in-out border-4 border-white/80 shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
