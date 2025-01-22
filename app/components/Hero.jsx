"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Typewriter from "@/components/fancy/typewriter";
import heroImage from "../../public/images/hero-yigal.png";
import { PhoneCall } from "lucide-react";

const Hero = () => {
  // טעינת הסקריפט של Lordicon אם לא נטען מראש
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative text-5xl rubik-bold w-full h-[95vh] md:h-[100vh] flex flex-col items-center justify-start text-center text-white overflow-hidden pt-10">
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
              text={["מתכנת פולסטאק", "מעצב ומפתח אתרים"]}
              speed={70}
              className="text-white mr-8"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar={"_"}
            />
          </h2>
        </div>
        {/* כפתור קריאה לפעולה */}
        <a
          href="#projects"
          className="group relative my-8 rounded-full bg-gradient-to-r from-[#1461ED]/30 via-[#1461ED]/30 via-40% to-[#1461ED]/30 p-1 text-white transition-transform hover:scale-110 active:scale-105 hero-button"
        >
          <div className="relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1461ED] via-[#1461ED] via-40% to-[#1461ED] px-4 py-2 text-white">
            <PhoneCall className="w-[25px] h-[25px]  text-white" />
            <span className="text-lg">צור קשר </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
