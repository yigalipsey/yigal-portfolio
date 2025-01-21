"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "@/components/fancy/typewriter";
import heroImage from "../../public/images/hero-yigal.png";

const Hero = () => {
  return (
    <section className="relative font-varela w-full h-[100vh] flex flex-col items-center justify-start text-center text-white overflow-hidden pt-10">
      {/* אלמנט הרקע עם הנקודות */}
      <div className="relative w-full bg-hero h-full z-0 flex flex-col items-center justify-start ">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mt-12 md:mt-16 shadow-lg rounded-full">
            <div
              style={{ borderBottom: "4px solid #1461ED" }}
              className="rounded-full"
            >
              <Image
                src={heroImage}
                alt="יגאל ליפסי - מתכנת פולסטאק"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
          </div>
          <h2 className="text-4xl md:mt-6 sm:text-5xl mt-4 font-bold text-[#1461ED]">
            יגאל ליפסי
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F6E91F]">
            <Typewriter
              text={["מתכנת פולסטאק", "מעצב ובונה אתרים"]}
              speed={70}
              className="text-white"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar={"_"}
            />
          </h2>
        </div>

        {/* כפתור קריאה לפעולה */}
        <a
          href="#projects"
          className="mt-5 px-6 py-3 bg-grainy-blue border border-1 rounded-lg text-black font-bold text-lg hover:bg-cyan-400 transition-all duration-300"
        >
          צפה בפרויקטים שלי
        </a>
      </div>
    </section>
  );
};

export default Hero;
