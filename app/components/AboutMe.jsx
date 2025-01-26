"use client";

import React, { useRef, useState, useEffect } from "react";
import Script from "next/script";

function useClientEffect(effect, deps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      return effect();
    }
  }, [isClient, effect, ...(deps || [])]);
}

const AboutMe = () => {
  const topSvgRef = useRef(null);
  const bottomSvgRef = useRef(null);
  const animationTriggerRef = useRef(null);
  const topTriggerRef = useRef(null);
  const messageIndexRef = useRef(0);
  const [, forceUpdate] = useState({});

  const [rocketState, setRocketState] = useState("onEarth");
  const [rocketPosition, setRocketPosition] = useState({ x: 0, y: 0 });
  const [starState, setStarState] = useState({
    sizes: {
      star4: 20,
      star5: 30,
      star6: 40,
    },
    rotating: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      messageIndexRef.current = messageIndexRef.current === 0 ? 1 : 0;
      forceUpdate({});
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useClientEffect(() => {
    const bottomObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && rocketState === "onEarth") {
          moveRocket();
        }
      },
      { threshold: 0.5 }
    );

    const topObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && rocketState === "onMoon") {
          returnRocket();
        }
      },
      { threshold: 0.5 }
    );

    if (animationTriggerRef.current) {
      bottomObserver.observe(animationTriggerRef.current);
    }

    if (topTriggerRef.current) {
      topObserver.observe(topTriggerRef.current);
    }

    return () => {
      if (animationTriggerRef.current) {
        bottomObserver.unobserve(animationTriggerRef.current);
      }
      if (topTriggerRef.current) {
        topObserver.unobserve(topTriggerRef.current);
      }
    };
  }, [rocketState]);

  const messages = ["תקשיבו לו", "לא קיבלתי חטיף\n כדי להגיד את זה"];

  const SpeechBubble = ({ children, isBottom = false }) => (
    <div className="relative animate-[pulse-scale_1s_ease-in-out_infinite] inline-block mt-12">
      <div
        className={`rounded-2xl relative border border-yellow-400 ${
          isBottom ? "mr-4 p-4 bg-white" : "p-2 bg-white"
        } `}
      >
        <div
          className={`absolute ${
            isBottom
              ? "bg-white w-4 h-4 border-b border-r border-yellow-400"
              : "w-4 h-4 border-b border-r border-yellow-400 bg-white"
          }`}
          style={{
            left: isBottom ? "70%" : "60%",
            bottom: isBottom ? "-9px" : "-8px",
            transform: isBottom
              ? "translateX(-10%) rotate(45deg)"
              : "rotate(42deg)",
          }}
        />
        <p className="relative text-black font-varela text-sm text-center min-w-[100px] max-w-[250px] whitespace-pre-line">
          {children}
        </p>
      </div>
    </div>
  );

  const getStarStyle = (size, top, right, bottom, left, index) => ({
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    top,
    right,
    bottom,
    left,
    background:
      "radial-gradient(circle, rgba(251, 239, 63, 1) 0%, rgba(255, 253, 212, 1) 100%)",
    clipPath:
      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    transition: "all 3.4s ease",
    animation: starState.rotating
      ? `rotate ${3 + index * 2}s normal linear infinite`
      : "none",
  });

  const moveRocket = () => {
    if (topSvgRef.current && bottomSvgRef.current) {
      const topRect = topSvgRef.current.getBoundingClientRect();
      const bottomRect = bottomSvgRef.current.getBoundingClientRect();

      const x = topRect.left - bottomRect.left;
      const y = topRect.top - bottomRect.top;

      setRocketPosition({ x, y });
      setRocketState("moving");
      setStarState({
        sizes: {
          star4: 30,
          star5: 45,
          star6: 55,
        },
        rotating: true,
      });

      setTimeout(() => {
        setRocketState("onMoon");
      }, 1000);
    }
  };

  const returnRocket = () => {
    setRocketState("returning");
    setRocketPosition({ x: 0, y: 0 });
    setStarState({
      sizes: {
        star4: 20,
        star5: 30,
        star6: 40,
      },
      rotating: false,
    });

    setTimeout(() => {
      setRocketState("onEarth");
    }, 1000);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/+972YOUR_PHONE_NUMBER", "_blank");
  };

  return (
    <div className="flex relative justify-center mt-10 md:mb-28 mb-10 items-center bg-cover bg-center bg-no-repeat">
      <Script src="https://cdn.lordicon.com/lordicon.js" />
      <div ref={topTriggerRef} className="h-1 w-full absolute top-0" />
      <div className="w-[90%] dotted-background mx-auto py-4.5 p-4 sm:p-8 relative">
        <div className="bg-black w-full p-4 py-6">
          <div className="relative">
            <div className="relative">
              {messageIndexRef.current === 1 && (
                <div className="absolute top-0 left-[62%] md:left-[52%] -translate-x-1/2">
                  <SpeechBubble>{messages[0]}</SpeechBubble>
                </div>
              )}

              <div
                style={getStarStyle(
                  starState.sizes.star4,
                  "4%",
                  "5px",
                  undefined,
                  undefined,
                  1
                )}
              />
              <div
                style={getStarStyle(
                  starState.sizes.star5,
                  undefined,
                  undefined,
                  "24%",
                  undefined,
                  2
                )}
              />
              <div
                style={getStarStyle(
                  starState.sizes.star6,
                  undefined,
                  "25%",
                  "20%",
                  undefined,
                  3
                )}
              />

              <div className="relative mx-auto w-56 md:w-72 aspect-square rounded-lg ">
                <img
                  src="/images/about.png"
                  alt="תמונה שלי עם הכלב שלי"
                  className="w-full h-full object-cover"
                />
                <svg
                  ref={topSvgRef}
                  className="absolute -bottom-[40px] -right-[10px] w-12 h-12 text-white fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M 12.993 6.552 c 0 -2.259 -0.795 -4.33 -2.117 -5.955 C 15.66 1.042 19.406 5.07 19.406 9.98 c 0 5.207 -4.211 9.426 -9.406 9.426 c -2.94 0 -5.972 -1.354 -7.696 -3.472 c 0.289 0.026 0.987 0.044 1.283 0.044 C 8.781 15.979 12.993 11.759 12.993 6.552 z" />
                </svg>
              </div>

              <div
                className={`absolute ${
                  messageIndexRef.current === 1 ? "hidden" : ""
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
              <div className="flex justify-center">
                <h1 className="font-varela text-xl md:text-2xl font-bold text-white">
                  קצת עליי
                </h1>
              </div>
              <div>
                <h2 className="font-varela text-3xl md:text-4xl mb-2 font-light text-[#F3E618]">
                  יגאל ליפסי
                </h2>
              </div>

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

                <div className="flex relative justify-center mt-3">
                  <lord-icon
                    ref={bottomSvgRef}
                    src="https://cdn.lordicon.com/kkjdkiwn.json"
                    trigger={
                      rocketState === "moving" || rocketState === "returning"
                        ? "loop"
                        : ""
                    }
                    state={
                      rocketState === "moving" || rocketState === "returning"
                        ? "loop-flying"
                        : ""
                    }
                    colors="primary:#ffffff,secondary:#ffffff"
                    style={{
                      width: "50px",
                      height: "50px",
                      position: "absolute",
                      left: "5%",
                      bottom: "10px",
                      transform:
                        rocketState !== "onEarth"
                          ? `translate(${rocketPosition.x - 15}px, ${
                              rocketPosition.y
                            }px) scale(0.7) rotate(${
                              rocketState === "returning" ? "131deg" : "-49deg"
                            })`
                          : "none",
                      transition: "all 1s ease-in-out",
                    }}
                  ></lord-icon>
                  <button
                    className="bg-black border border-1 mt-3 border-[#F3E618] hover:text-[#F3E618] font-bold py-2 px-4 rounded"
                    onClick={openWhatsApp}
                  >
                    תבנה לי אתר שמעיף לחלל{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={animationTriggerRef} className="h-1 w-full absolute bottom-0" />
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(50deg);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
