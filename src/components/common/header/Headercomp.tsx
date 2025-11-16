"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/images/logo1.png"
            alt="Logo"
            width={140}
            height={140}
            className="w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8 text-sm font-medium font-helvetica uppercase text-[#003049]">
            <li><Link href="/" className="hover:text-[#048b43]">Home</Link></li>
            <li><Link href="/aboutus" className="hover:text-[#048b43]">About Us</Link></li>
            <li><Link href="/product" className="hover:text-[#048b43]">Products</Link></li>
            <li><Link href="/contact" className="hover:text-[#048b43]">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-3xl text-[#003049]"
        >
          <HiMenu />
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MOBILE SLIDE-IN MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-[#003049]"></h2>

          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-[#003049]"
          >
            <HiX />
          </button>
        </div>

        {/* MOBILE MENU LINKS */}
        <ul className="flex flex-col p-6 space-y-6 text-[#003049] font-medium text-lg font-helvetica">
          <li>
            <Link href="/" onClick={() => setOpen(false)} className="hover:text-[#048b43]">
              Home
            </Link>
          </li>

          <li>
            <Link href="/aboutus" onClick={() => setOpen(false)} className="hover:text-[#048b43]">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/product" onClick={() => setOpen(false)} className="hover:text-[#048b43]">
              Products
            </Link>
          </li>

          <li>
            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[#048b43]">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
