"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";

const AboutMe = () => {
  const ref = useRef(null);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 2500);

    return () => clearInterval(interval); // מנקה את ה-timer כשלא צריך אותו
  }, []);

  const messages = ["תקשיבו לו", "לא קיבלתי חטיף\n כדי להגיד את זה"];

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
    <div
      className={`relative animate-[pulse-scale_1s_ease-in-out_infinite] inline-block mt-12`}
    >
      <div
        className={`rounded-2xl relative border border-yellow-400 ${
          isBottom ? "mr-4 p-4 bg-white" : "p-2 bg-white"
        }`}
        style={{
          display: "flex",
          ...(isBottom
            ? { transform: `rotate(45deg)` }
            : { transform: `rotate(15deg)` }),
        }}
      >
        <div
          className={`absolute ${
            isBottom
              ? "bg-white w-4 h-4 border-b border-r border-yellow-400"
              : "w-4 h-4 border-b border-r border-yellow-400 bg-white"
          }`}
          style={
            isBottom
              ? {
                  left: "70%",
                  bottom: "-9px",
                  transform: "translateX(-10%) rotate(45deg)",
                }
              : {
                  bottom: "-8px",
                  left: "60%",
                  transform: "rotate(42deg)",
                }
          }
        />
        <p className="relative text-black font-varela text-sm text-center min-w-[100px] max-w-[250px] whitespace-pre-line">
          {children}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center mt-10 md:mt-28 items-center  bg-cover bg-center bg-no-repeat">
      <div className="w-[90%] dotted-background mx-auto py-4.5 p-4 sm:p-8 relative">
        <div className="bg-black  w-full p-4 py-6">
          <div className="relative">
            <div ref={ref} className="relative">
              {currentMessageIndex === 1 && (
                <div className="absolute top-0 left-[62%] md:left-[52%] -translate-x-1/2">
                  <SpeechBubble rotation={25}>{messages[0]}</SpeechBubble>
                </div>
              )}

              <div className="relative mx-auto w-56 md:w-72 aspect-square overflow-hidden rounded-lg border border-white/10">
                <img
                  src="/images/about.png"
                  alt="תמונה שלי עם הכלב שלי"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className={`absolute ${
                  currentMessageIndex === 1 && "hidden"
                } -top-24 md:-top-16 left-[40%] md:left-[47%] translate-y-1/2`}
              >
                <SpeechBubble isBottom>{messages[1]}</SpeechBubble>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center mt-6 items-center w-full">
            <div
              dir="rtl"
              className="w-full max-w-4xl text-center px-4 md:px-8 lg:px-16"
            >
              <h1 className="font-varela text-xl md:text-2xl font-bold text-white">
                קצת עליי
              </h1>
              <h2 className="font-varela text-3xl md:text-4xl mb-2 font-light text-[#F3E618]">
                יגאל ליפסי
              </h2>

              <div className="space-y-4 font-varela text-sm md:text-lg leading-relaxed text-gray-300">
                <p>
                  הנדסאי תוכנה בוגר מכללת סינגאלובסקי בהצטיינות, עם תשוקה
                  לטכנולוגיה וליצירת פתרונות דיגיטליים חדשניים.
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
