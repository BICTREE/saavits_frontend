"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface PopupProps {
  open: boolean;
  onClose: () => void;
}

export default function PopupCom({ open, onClose }: PopupProps) {
  const [visible, setVisible] = useState(open);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setIsClosing(false);

      const timer = setTimeout(() => {
        handleClose();
      }, 60000);

      return () => clearTimeout(timer);
    } else {
      handleClose();
    }
  }, [open]);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setVisible(false);
      onClose();
    }, 6000);
  };

  if (!visible) return null;

  return (
    <>
      {/* DARK OVERLAY */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-9000
        ${isClosing ? "animate-fadeOut" : "animate-fadeIn"}`}
      ></div>

      {/* POPUP WRAPPER */}
      <div className="fixed inset-0 flex items-center justify-center z-10000 pointer-events-none px-4">
        <div
          className={`bg-white rounded-xl shadow-xl relative overflow-hidden pointer-events-auto
          ${isClosing ? "animate-popupClose" : "animate-popupZoom"}`}
          
          // Desktop width 600px, Mobile 100%
          style={{ width: "100%", maxWidth: "600px" }}
        >
          {/* CLOSE ICON */}
          <button
            className="absolute top-3 right-3 text-black z-11000 text-2xl"
            onClick={handleClose}
          >
            ✖
          </button>

          {/* IMAGE - Desktop and Mobile switch */}
          <div
            className="relative w-full 
            h-[500px] sm:h-[400px]" // small height on mobile
          >
            {/* Desktop Image */}
            <Image
              src="/assets/images/popup-banner.png"
              alt="Popup Banner Desktop"
              fill
              className="object-cover hidden sm:block"
            />

            {/* Mobile Image */}
            <Image
              src="/assets/images/popup-banner-mobile.png"
              alt="Popup Banner Mobile"
              fill
              className="object-cover sm:hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}
