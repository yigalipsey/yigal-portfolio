"use client";
import React, { useEffect } from "react";

const ServicesSection = () => {
  // טעינת הסקריפט של Lordicon
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="w-full py-8">
      <div className="w-full mb-2 flex justify-end">
        <h1 className="rubik-bold mr-8 md:mr-32 md:mb-4 font-semibold text-[#9911ff] text-3xl md:text-5xl">
          השירותים <span className="text-white">שלי</span>
        </h1>
      </div>
      <div className="container w-11/12 font-varela mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* שירות 1 - עיצוב ופיתוח אתרים */}
          <div className="rounded-xl overflow-hidden relative border-2 border-[#9911ff] bg-services-dots opacity-90 text-right p-4">
            <div className="relative flex flex-col items-end">
              {/* אייקון Lordicon */}
              <div className="flex justify-end w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/eyjfodee.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#9911ff,secondary:#9911ff"
                  style={{ width: "65px", height: "65px" }}
                ></lord-icon>
              </div>
              <h3 className="text-xl mt-1 font-semibold text-white">
                עיצוב ופיתוח אתרים
              </h3>
              <p dir="rtl" className="text-gray-300  mt-1">
                אני יוצר אתרי אינטרנט מודרניים, עם עיצוב ייחודי וחווית משתמש
                מצוינת.
              </p>
            </div>
          </div>

          {/* שירות 2 - פיתוח אפליקציות ווב */}
          <div className="rounded-xl overflow-hidden relative border-2 border-[#9911ff] bg-services-dots opacity-90 text-right p-4">
            <div className="relative flex flex-col items-end">
              {/* אייקון Lordicon */}
              <div className="flex justify-end w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/bzxxzycl.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#9911ff,secondary:#9911ff"
                  style={{ width: "65px", height: "65px" }}
                ></lord-icon>
              </div>
              <h3 className="text-xl mt-1 font-semibold text-white">
                פיתוח אפליקציות ווב
              </h3>
              <p dir="rtl" className="text-gray-300 mt-1">
                אני מפתח אפליקציות ווב מתקדמות, עם דגש על ביצועים ונוחות שימוש.
              </p>
            </div>
          </div>

          {/* שירות 3 - פיתוח פולסטאק */}
          <div className="rounded-xl overflow-hidden relative border-2 border-[#9911ff] bg-services-dots opacity-90 text-right p-4">
            <div className="relative flex flex-col items-end">
              {/* אייקון Lordicon */}
              <div className="flex justify-end w-full">
                <lord-icon
                  src="https://cdn.lordicon.com/wbthjkyu.json"
                  trigger="loop"
                  colors="primary:#9911ff,secondary:#9911ff"
                  style={{ width: "65px", height: "65px" }}
                ></lord-icon>
              </div>
              <h3 className="text-xl mt-1 font-semibold text-white">
                פיתוח פולסטאק
              </h3>
              <p dir="rtl" className="text-gray-300  mt-1">
                אני מפתח מערכות ווב מלאות, מהצד הקדמי ועד לצד השרת.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
