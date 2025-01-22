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

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[90%] py-8 dotted-background p-4 sm:p-8 lg:p-16">
        <div className="w-[90%] h-[90%] mx-auto bg-black md:w-full md:h-full md:p-10 px-4 py-3  text-center flex flex-col relative">
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
                className="absolute bg-white text-black p-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl left-1/2 top-[15%] transform -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <p className="font-varela text-sm whitespace-normal max-w-[150px]">
                  {messages[0]}
                </p>
                <div className="absolute left-1/2 bottom-[-8px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white transform -translate-x-1/2"></div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate={controls2}
                variants={variants}
                className="absolute bg-white text-black p-2 rounded-bl-xl rounded-br-xl rounded-tr-xl left-1/2 top-[65%] transform -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <p className="font-varela text-sm whitespace-normal max-w-[150px]">
                  {messages[1].split(" ").slice(0, 4).join(" ")}
                  <br />
                  {messages[1].split(" ").slice(4).join(" ")}
                </p>
                <div className="absolute left-1/2 top-[-8px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white transform -translate-x-1/2"></div>
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
