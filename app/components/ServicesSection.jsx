"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  // טעינת הסקריפט של Lordicon
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // אנימציה - fade-in + slide-up
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full mb-10">
      <div className="w-full mb-2 flex justify-end">
        <h1 className="rubik-bold mr-8 md:mr-32 md:mb-4 font-semibold text-[#9911ff] text-3xl md:text-5xl">
          השירותים <span className="text-white">שלי</span>
        </h1>
      </div>
      <div className="container w-11/12 font-varela mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "עיצוב ופיתוח אתרים",
              description:
                "אני יוצר אתרי אינטרנט מודרניים, עם עיצוב ייחודי וחווית משתמש מצוינת.",
              icon: "https://cdn.lordicon.com/eyjfodee.json",
            },
            {
              title: "פיתוח אפליקציות ווב",
              description:
                "אני מפתח אפליקציות ווב מתקדמות, עם דגש על ביצועים ונוחות שימוש.",
              icon: "https://cdn.lordicon.com/bzxxzycl.json",
            },
            {
              title: "פיתוח פולסטאק",
              description:
                "אני מפתח מערכות ווב מלאות, מהצד הקדמי ועד לצד השרת.",
              icon: "https://cdn.lordicon.com/wbthjkyu.json",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="rounded-xl overflow-hidden relative border-2 border-[#9911ff] bg-services-dots opacity-90 text-right p-4"
            >
              <div className="relative flex flex-col items-end">
                {/* אייקון Lordicon */}
                <div className="flex justify-end w-full">
                  <lord-icon
                    src={service.icon}
                    trigger="loop"
                    delay="2000"
                    colors="primary:#9911ff,secondary:#9911ff"
                    style={{ width: "65px", height: "65px" }}
                  ></lord-icon>
                </div>
                <h3 className="text-xl mt-1 font-semibold text-white">
                  {service.title}
                </h3>
                <p dir="rtl" className="text-gray-300 mt-1">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
