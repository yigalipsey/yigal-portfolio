"use client";

import Image from "next/image"; // ייבוא Next.js Image
import TiltedCover from "../../components/animata/image/TiltedCover"; // נתיב נכון לרכיב
import { motion } from "framer-motion";

// ייבוא תמונות בצורה ישירה
import YoadImg from "../../public/images/yoadlipsey.jpg";
import SmartSalesImg from "../../public/images/smartsales.jpg";
import TkGroupImg from "../../public/images/tkgroup.jpg";

const projects = [
  {
    name: "יועד ליפסי - קריינות מקצועית",
    url: "https://www.yoadlipsey.com",
    image: YoadImg,
    description: "שירותי קריינות מקצועיים לפרסומות, סרטים ותוכן דיגיטלי.",
  },
  {
    name: "Smart Sales - מערכת לניהול מכירות",
    url: "https://www.smartsalesil.com/",
    image: SmartSalesImg,
    description: "פלטפורמת מכירות מתקדמת לניהול עסקי וייעול תהליכי מכירה.",
  },
  {
    name: "TK Group - ייבוא רהיטים",
    url: "https://websitetomtk.vercel.app/",
    image: TkGroupImg,
    description: "חברה מובילה בייבוא רהיטים מסין לתאילנד.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative font-varela  flex mt-12 bg-grainy flex-col items-center justify-center  text-center text-white">
      {/* כותרת עם אנימציה */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl md:text-4xl font-bold leading-tight text-[#F71186]"
      >
        הפרויקטים שלי
      </motion.h2>

      {/* תיאור קצר */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="mt-1 text-lg md:text-xl max-w-2xl  text-gray-300"
      >
        מבחר עבודות נבחרות שפיתחתי בשנים האחרונות
      </motion.p>

      {/* פרויקטים */}
      <div className="flex w-full flex-wrap items-center justify-center mt-8 gap-8">
        {projects.map((project, index) => (
          <TiltedCover
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
            image={{
              alt: project.name,
              src: project.image,
            }}
          >
            <div className="p-4">
              <div className="mb-2 text-lg font-semibold text-foreground/80">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {project.name}
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>
          </TiltedCover>
        ))}
      </div>
    </section>
  );
}
