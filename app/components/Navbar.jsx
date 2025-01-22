"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

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
    <motion.nav
      ref={navRef}
      initial={false}
      animate={isOpen ? "open" : "closed"}
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
                <motion.path
                  initial={false}
                  animate="open"
                  variants={pathVariants}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <motion.path
                  initial={false}
                  animate="closed"
                  variants={pathVariants}
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
      <motion.div
        variants={mobileVariants}
        className="absolute top-20 left-0 w-full bg-[#121318] text-white transition-all duration-300 border-b shadow-md z-50"
      >
        <motion.div className="text-right w-full" variants={mobileListVariants}>
          <motion.button
            onClick={() => scrollToSection("about")}
            className="block text-lg py-3 pr-10 border-b text-right border-gray-700 w-full hover:text-[#F6E91F] font-medium"
          >
            עליי
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="block text-lg py-3 pr-10 border-b text-right border-gray-700 w-full hover:text-[#F6E91F] font-medium"
          >
            פרויקטים
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="block text-lg py-3 pr-10 w-full text-right hover:text-[#F6E91F] font-medium"
          >
            צור קשר
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};
const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    height: "auto",
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    height: 0,
  },
};

const mobileVariants = {
  open: {
    opacity: 1,
    display: "block",
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 0,
    display: "none",
    height: 0,
    transition: { duration: 0.3 },
  },
};
const mobileListVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const pathVariants = {
  open: { d: "M6 18L18 6M6 6l12 12" },
  closed: { d: "M4 6h16M4 12h16m-7 6h7" },
};

const Path = ({ d, variants, transition }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    d={d}
    variants={variants}
    transition={transition}
  />
);
const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    className="md:hidden text-white hover:text-[#6FE2F5] focus:outline-none"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path variants={pathVariants} />
    </svg>
  </button>
);

export default Navbar;
