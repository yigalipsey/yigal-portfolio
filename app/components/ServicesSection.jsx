"use client";
import React, { useEffect, useRef, useState } from "react";

const ServicesSection = () => {
  const sectionRefs = useRef([]); // שמירה על כל הרפרנסים של הדיבים
  const [visibleSections, setVisibleSections] = useState([]); // רשימה של דיבים נראים

  // טעינת הסקריפט של Lordicon
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Intersection Observer לאנימציות נפרדות
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target]);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRefs.current.length > 0) {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (sectionRefs.current.length > 0) {
        sectionRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  const services = [
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
      description: "אני מפתח מערכות ווב מלאות, מהצד הקדמי ועד לצד השרת.",
      icon: "https://cdn.lordicon.com/wbthjkyu.json",
    },
  ];

  return (
    <section id="services" className="w-full mb-10">
      <div className="w-full mb-2 flex justify-end">
        <h1 className="rubik-bold mr-8 md:mr-32 md:mb-4 font-semibold text-[#9911ff] text-3xl md:text-5xl">
          השירותים <span className="text-white">שלי</span>
        </h1>
      </div>
      <div className="container w-11/12 font-varela mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)} // קישור של כל דיב ל-ref
              className={`rounded-xl overflow-hidden relative border-2 border-[#9911ff] bg-services-dots text-right p-4 transform transition-all duration-700 ${
                visibleSections.includes(sectionRefs.current[index])
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-20 opacity-0 scale-95"
              }`}
            >
              <div className="relative flex flex-col items-end">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
