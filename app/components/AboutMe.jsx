"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

import AboutImg from "../../public/images/about.png";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const messages = ["תקשיבו לו!", "ואני לא אומר את זה כי הוא הבטיח לי חטיף"];

  useEffect(() => {
    if (isInView) {
      controls1.start("visible").then(() => controls1.start("pulse"));
      setTimeout(() => {
        controls2.start("visible").then(() => controls2.start("pulse"));
      }, 1000);
    }
  }, [isInView, controls1, controls2]);

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  };

  const SpeechBubble = ({ children, rotate = 0, maxWidth = "150px" }) => (
    <div
      className="relative w-full h-full"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 810 809.999993"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <clipPath id="speechBubble">
            <path d="M 13.859375 151.710938 L 796.109375 151.710938 L 796.109375 483 L 13.859375 483 Z M 13.859375 151.710938 " />
          </clipPath>
        </defs>
        <g clipPath="url(#speechBubble)">
          <path
            fill="#ffffff"
            d="M 112.566406 463.113281 C 117.195312 461.628906 121.320312 459.746094 125.203125 457.683594 C 150.460938 473.316406 180.136719 482.496094 212.023438 482.496094 L 630.753906 482.496094 C 722.09375 482.496094 796.144531 408.449219 796.144531 317.113281 C 796.144531 225.777344 722.09375 151.726562 630.753906 151.726562 L 212.015625 151.726562 C 120.679688 151.726562 46.636719 225.773438 46.636719 317.113281 C 46.636719 350.609375 56.667969 381.722656 73.78125 407.769531 C 64.863281 427.148438 45.652344 458.511719 13.851562 461.195312 C 13.851562 461.195312 49.089844 483.472656 112.5625 463.117188 Z"
          />
        </g>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className="font-varela text-sm whitespace-normal text-black"
          style={{ maxWidth }}
        >
          {children}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0A0F1C]">
      <div className="w-[90%] py-8 dotted-background p-4 sm:p-8 lg:p-16">
        <div className="w-[90%] h-[90%] mx-auto bg-black md:w-full md:h-full md:p-10 px-4 py-3 rounded-2xl text-center flex flex-col relative">
          <div className="relative mb-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-none border border-white/10">
                <Image
                  src={AboutImg}
                  alt="תמונה שלי עם הכלב שלי"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                initial="hidden"
                animate={controls1}
                variants={variants}
                className="absolute flex justify-center items-center left-1/2 top-[-5%] transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{
                  width: "180px",
                  height: "100px",
                  transformOrigin: "center center",
                  transform: "rotate(45deg)",
                }}
              >
                <SpeechBubble rotate={-45}>{messages[0]}</SpeechBubble>
              </motion.div>
              <motion.div
                initial="hidden"
                animate={controls2}
                variants={variants}
                className="absolute left-1/2 bottom-[-20%] transform -translate-x-1/2 translate-y-1/2 z-10"
                style={{
                  width: "320px",
                  height: "140px",
                  transformOrigin: "center center",
                }}
              >
                <SpeechBubble width="980px">{messages[1]}</SpeechBubble>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            dir="rtl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-varela text-xl font-bold text-white">
              קצת עליי
            </h1>
            <h2 className="font-varela text-3xl font-light text-[#F3E618]">
              יגאל ליפסי
            </h2>

            <div className="space-y-3 font-varela text-sm leading-relaxed text-gray-300">
              <p>
                הנדסאי תוכנה מצטיין ובוגר מכללת סינגאלובסקי בהצטיינות, עם תשוקה
                לטכנולוגיה וליצירת פתרונות דיגיטליים חדשניים.
              </p>

              <p>
                אני מתמחה בבניית אתרים ואפליקציות עם דגש על{" "}
                <span className="text-[#F3E618] font-bold ml-1">מהירות</span>
                חוויית משתמש חלקה ואנימציות שמכניסות חיים לכל עמוד.
              </p>

              <p>
                בעיניי, קוד טוב הוא לא רק פונקציונלי – הוא אמנות. אני שואף ליצור{" "}
                <span className="text-[#F3E618]">ממשקים מודרניים</span>, מהירים
                וסוחפים, שמשדרים מקצועיות ודינמיות.
              </p>

              <p className="text-[#F3E618] font-bold">
                מחפשים אתר שירגיש חלק, אינטואיטיבי ומרשים? בואו נבנה משהו בלתי
                נשכח.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
