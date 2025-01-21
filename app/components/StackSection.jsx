"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Gravity, { MatterBody } from "../../components/fancy/gravity";

// ייבוא אייקונים של הטכנולוגיות
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiThreejs,
} from "react-icons/si";

// רשימת הטכנולוגיות
const techStack = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Three.js", icon: SiThreejs },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "Git", icon: FaGitAlt },
];

const StackSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto  flex flex-col items-center justify-start text-center text-white font-varela"
    >
      {/* כותרת בצד ימין למעלה */}
      <div className="w-4/5 flex justify-end ">
        <h2 className="font-bold text-[#f6e91f] text-2xl md:text-3xl">
          הטכנולוגיות שלי
        </h2>
      </div>

      {/* אזור האנימציה עם רקע נקודות דינמי */}
      <div className="relative w-4/5 h-[450px] border-4 border-[#f6e91f] rounded-xl overflow-hidden mt-2  md:mt-4 shadow-lg mx-auto bg-dynamic-pattern">
        {isVisible && (
          <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
            {/* אליפסות עם שמות הטכנולוגיות */}
            {techStack.map((tech, index) => (
              <MatterBody
                key={`${index}-text`}
                matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                x={`${Math.random() * 60 + 20}%`}
                y={`${Math.random() * 40 + 20}%`}
                angle={Math.random() * 360}
              >
                <motion.div
                  className="text-sm sm:text-lg md:text-xl bg-black text-[#f6e91f] border border-[#f6e91f] px-4 py-2 rounded-full shadow-lg hover:cursor-pointer hover:bg-[#f6e91f] hover:text-black transition-all duration-300"
                  whileTap={{ scale: 0.9 }}
                >
                  {tech.name}
                </motion.div>
              </MatterBody>
            ))}

            {/* אייקונים קטנים במקום כוכבים */}
            {techStack.map((tech, i) => (
              <MatterBody
                key={`icon-${i}`}
                matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                x={`${Math.random() * 60 + 20}%`}
                y={`${Math.random() * 20 + 40}%`}
                angle={Math.random() * 360}
              >
                <div className="aspect-square w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#f6e91f] text-black text-center flex items-center justify-center rounded-full shadow-lg">
                  {tech.icon && <tech.icon className="text-2xl md:text-3xl" />}
                </div>
              </MatterBody>
            ))}
          </Gravity>
        )}
      </div>
    </section>
  );
};

export default StackSection;
