"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // גובה ה-Navbar
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 font-varela transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-dark-pattern text-white shadow-lg"
          : "bg-transparent text-white"
      }`}
      style={{ direction: "rtl" }}
    >
      <div className="w-5/6 mx-auto">
        <div className="flex items-center justify-between w-full h-20">
          {/* שם האתר */}
          {/* <Link href="#home" className="text-2xl font-bold text-[#F6E91F]">
            יגאל ליפסי
          </Link> */}

          {/* כפתור המבורגר במובייל */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#6FE2F5] focus:outline-none"
          >
            <svg
              className="h-10 w-10"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* תפריט דסקטופ */}
          <div className="hidden md:flex items-center space-x-reverse space-x-14">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#F6E91F] text-lg font-bold"
            >
              עליי
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-[#F6E91F] text-lg font-bold"
            >
              פרויקטים
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[#F6E91F] text-lg font-bold"
            >
              צור קשר
            </button>
          </div>
        </div>
      </div>

      {/* תפריט מובייל */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#121318] text-white transition-all duration-300 border-b shadow-md z-50">
          <div className="text-right w-full">
            <button
              onClick={() => scrollToSection("about")}
              className="block text-lg py-3 pr-10 border-b text-right border-gray-700 w-full hover:text-[#F6E91F] font-medium"
            >
              עליי
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block text-lg py-3 pr-10 border-b text-right border-gray-700 w-full hover:text-[#F6E91F] font-medium"
            >
              פרויקטים
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-lg py-3 pr-10 w-full text-right hover:text-[#F6E91F] font-medium"
            >
              צור קשר
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
