"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.9 });

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 2500);

    return () => clearInterval(interval); // מנקה את ה-timer כשלא צריך אותו
  }, []);

  const messages = ["תקשיבו לו", "הוא לא הביא לי חטיף\nלהגיד את זה"];

  const bubbleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const SpeechBubble = ({ children, isBottom = false, rotation = 0 }) => (
    <motion.div
      className={`relative inline-block mt-12`}
      variants={pulseVariants}
      animate="pulse"
    >
      {" "}
      <div
        className={`rounded-2xl relative ${
          isBottom ? "mr-4 px-12 py-4 bg-white " : "p-4 bg-white"
        }`}
        style={{
          display: "flex", // לדוגמא, תמיד להשתמש בפלקס
          ...(isBottom
            ? { transform: `rotate(${45}deg)` }
            : { transform: `rotate(25deg)` }),
        }}
      >
        <div
          className={`absolute w-4 h-4  ${
            isBottom ? "bg-white" : "  bg-white"
          }`}
          style={
            isBottom
              ? {
                  left: "70%",
                  bottom: "-6px",
                  transform: "translateX(-10%) rotate(45deg)",
                }
              : {
                  bottom: "-6px",
                  left: "30%",
                  transform: " rotate(45deg)",
                }
          }
        />
        <p className="relative text-black font-varela text-lg text-center min-w-[100px] z-10 whitespace-pre-line">
          {children}
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[90%]  dotted-background  max-w-4xl mx-auto py-8 p-4 sm:p-8 lg:p-16 relative">
        <div className="bg-black  md:p-10 p-4 py-6  ">
          <div className="relative ">
            <div ref={ref} className="relative">
              <motion.div
                initial="hidden"
                animate={currentMessageIndex === 1 ? "visible" : "hidden"}
                variants={bubbleVariants}
                className="absolute  top-0 left-1/2 -translate-x-1/2"
              >
                <SpeechBubble rotation={25}>{messages[0]}</SpeechBubble>
              </motion.div>

              <div className="relative mx-auto w-56 aspect-square overflow-hidden rounded-lg border border-white/10">
                <img
                  src="/images/about.png"
                  alt="תמונה שלי עם הכלב שלי"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={bubbleVariants}
                transition={{ delay: 1.5 }}
                className={`absolute  ${
                  currentMessageIndex === 1 && "hidden"
                }   bottom-32 left-2/4 translate-y-1/2`}
              >
                <SpeechBubble isBottom>{messages[1]}</SpeechBubble>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center mt-6  items-center  ">
            <div dir="rtl" className=" max-w-2xl text-center px-4">
              <h1 className="font-varela text-xl font-bold text-white">
                קצת עליי
              </h1>
              <h2 className="font-varela text-3xl mb-2 font-light text-[#F3E618]">
                יגאל ליפסי
              </h2>

              <div className="space-y-4 font-varela text-sm leading-relaxed text-gray-300">
                <p>
                  הנדסאי תוכנה מצטיין ובוגר מכללת סינגאלובסקי בהצטיינות, עם
                  תשוקה לטכנולוגיה וליצירת פתרונות דיגיטליים חדשניים.
                </p>
                <p>
                  אני מתמחה בבניית אתרים ואפליקציות עם דגש על{" "}
                  <span className="text-[#F3E618] font-bold">מהירות</span>{" "}
                  חוויית משתמש חלקה ואנימציות שמכניסות חיים לכל עמוד.
                </p>
                <p>
                  בעיניי, קוד טוב הוא לא רק פונקציונלי – הוא אמנות. אני שואף
                  ליצור <span className="text-[#F3E618]">ממשקים מודרניים</span>,
                  מהירים וסוחפים, שמשדרים מקצועיות ודינמיות.
                </p>
                <p className="text-[#F3E618] font-bold">
                  מחפשים אתר שירגיש חלק, אינטואיטיבי ומרשים? בואו נבנה משהו בלתי
                  נשכח.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
