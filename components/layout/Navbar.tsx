"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll Hide/Show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 px-[20px] md:px-[60px] py-[20px] md:py-[30px] h-[64px] md:h-[90px] flex items-center justify-between z-50 backdrop-blur-[6px] bg-[#FFF8] transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center h-[32px] w-[160px] md:w-[220px]">
          <Image
            src="/asset/theNetwork.svg"
            alt="logo"
            width={220}
            height={42}
            priority
            className="object-contain w-full h-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex justify-between items-center gap-[60px] h-[60px]">
          <li>
            <Link
              href="/why"
              className="font-inter text-[20px] text-[#515151] hover:font-semibold hover:text-[#C01522] transition-all duration-300"
            >
              Why
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-inter text-[20px] text-[#515151] hover:font-semibold hover:text-[#C01522] transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex flex-col justify-between w-[24px] h-[18px]"
          onClick={() => setIsOpen(true)}
        >
          <span className="block h-[2px] w-full bg-black"></span>
          <span className="block h-[2px] w-full bg-black"></span>
          <span className="block h-[2px] w-full bg-black"></span>
        </button>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)}>
            <span className="text-2xl">✕</span>
          </button>
        </div>

        {/* NAV ITEMS */}
        <ul className="flex flex-col gap-8 px-8 mt-10">
          <li>
            <Link
              href="/why"
              onClick={() => setIsOpen(false)}
              className="text-[20px] text-[#333]"
            >
              Why
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-[20px] text-[#333]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;