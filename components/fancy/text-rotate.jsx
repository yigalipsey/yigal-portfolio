"use client";

import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import TextRotate, { TextRotateRef } from "../../components/fancy/text-rotate";

// רשימת הפרויקטים שלך
const projects = [
  {
    name: "יועד ליפסי - קריינות מקצועית",
    url: "https://www.yoadlipsey.com",
    image: "/images/yoadlipsey.jpg",
  },
  {
    name: "Smart Sales - מערכת לניהול מכירות",
    url: "https://www.smartsalesil.com/",
    image: "/images/smartsales.jpg",
  },
  {
    name: "TK Group - ייבוא רהיטים",
    url: "https://websitetomtk.vercel.app/",
    image: "/images/tkgroup.jpg",
  },
];

function ProjectItem({ index, project, onInView }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    onInView(isInView, index);
  }, [isInView, index, onInView]);

  return (
    <section
      ref={ref}
      key={index}
      className="h-screen w-full flex justify-center items-center snap-center"
    >
      <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80">
        <a href={project.url} target="_blank" rel="noreferrer">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-xl shadow-lg border-4 border-[#f6e91f]"
          />
        </a>
      </div>
    </section>
  );
}

export default function ProjectsSection() {
  const textRotateRef = useRef(null);

  const handleInView = (inView, index) => {
    if (inView && textRotateRef.current) {
      textRotateRef.current.jumpTo(index);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-auto snap-y snap-mandatory bg-black text-white">
      {/* אנימציית טקסט בצד ימין */}
      <div className="sticky top-0 right-0 h-full w-full flex items-center justify-end pr-10">
        <div className="w-2/3">
          <TextRotate
            ref={textRotateRef}
            texts={projects.map((project) => project.name)}
            mainClassName="text-xl sm:text-3xl md:text-4xl w-full flex justify-center font-bold text-[#f6e91f]"
            splitLevelClassName="overflow-hidden pb-2"
            staggerFrom="first"
            animatePresenceMode="wait"
            loop={false}
            auto={false}
            staggerDuration={0.01}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0 }}
          />
        </div>
      </div>

      {/* רשימת הפרויקטים עם תמונות */}
      <div className="absolute inset-0 flex flex-col items-center">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            index={index}
            project={project}
            onInView={handleInView}
          />
        ))}
      </div>
    </div>
  );
}
