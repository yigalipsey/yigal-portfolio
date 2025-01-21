"use client";

import AiButton from "@/components/ui/AiButton"; // נתיב לכפתור
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center text-white bg-gradient-to-b from-black via-gray-900 to-gray-800">
      {/* כותרת עם אפקט אנימציה */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        בנה <span className="text-[#f6e91f]">תמונות ממוזערות</span> בקליק!
      </motion.h1>

      {/* טקסט תיאור קצר */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300"
      >
        כלי חכם ליצירת תמונות ממוזערות עם אפקטים ייחודיים בצורה אוטומטית.
      </motion.p>

      {/* כפתור עם Particles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <AiButton />
      </motion.div>
    </section>
  );
}
