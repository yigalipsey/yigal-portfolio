"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const TimelineItem = ({
  event,
  isActive,
  isLast,
  index,
  styles,
  customRender,
}) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <motion.div
      ref={itemRef}
      className="flex last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div
        className={cn(
          " w-full leading-5 text-right p-3 md:p-4 rounded-lg",
          !isLast && "mb-16 md:mb-24 ",
          "border-2 bg-black border-[#4FF0B7] border-dotted rounded-xl "
        )}
      >
        {customRender ? (
          customRender(event)
        ) : (
          <>
            <h3
              className="text-xl md:text-2xl font-semibold mb-2 rubik-bold"
              style={{ color: styles.titleColor }}
            >
              {event.title}
            </h3>
            <p
              className="mb-3 text-base md:text-xl"
              style={{ color: styles.descriptionColor }}
            >
              {event.description}
            </p>
          </>
        )}
      </div>
      <div className="relative mr-3 md:mr-6 flex flex-col items-center">
        <motion.div
          className={cn(
            "absolute bottom-0 top-0 border-l-4 border-dotted",
            isLast ? "hidden" : "block"
          )}
          style={{ borderColor: "#4FF0B7" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <motion.div
            className="absolute inset-0 origin-top border-l-4"
            style={{
              borderColor: "#4FF0B7",
              scaleY: scale,
              borderStyle: "solid",
            }}
          />
        </motion.div>
        <motion.div
          className="relative z-10 rounded-full border-4"
          style={{
            width: "2rem",
            height: "2rem",
            borderColor: "#4FF0B7",
            backgroundColor: isActive ? "#4FF0B7" : "transparent",
            borderWidth: "4px",
          }}
          initial={{ scale: 0 }}
          animate={{
            scale: isInView ? 1 : 0,
            backgroundColor: isActive ? "#4FF0B7" : "transparent",
            borderColor: "#4FF0B7",
          }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        />
      </div>
    </motion.div>
  );
};

const defaultStyles = {
  dotSize: "2rem",
  titleColor: "white",
  descriptionColor: "white",
  backgroundColor: "black",
  dateColor: "white",
};

const DefaultEvents = [
  {
    id: "1",
    title: "פגישת היכרות",
    description: "זום עם הלקוח, הבנת צרכים וחזון הפרויקט",
  },
  {
    id: "2",
    title: "תכנון ראשוני",
    description: "סקיצות ועיצוב ראשוני, גיבוש כיוון עיצובי",
    date: "גיבוש קונספט",
  },
  {
    id: "3",
    title: "פיתוח אתר",
    description: "מימוש עיצוב, קידוד ראשוני, יישום פונקציונליות",
    date: "בניית מוצר",
  },
  {
    id: "4",
    title: "השקה וליטוש",
    description: "בדיקות סופיות, תיקונים, העלאה לאוויר",
    date: "גמר פרויקט",
  },
];

function HowItWorksPage({
  events = DefaultEvents,
  title,
  containerClassName,
  timelineStyles,
  customEventRender,
  onEventActivate,
  initialActiveIndex,
}) {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex ?? -1);
  const styles = { ...defaultStyles, ...timelineStyles };
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.dataset.index, 10);
            setActiveIndex((prevIndex) => Math.max(prevIndex, index));
            onEventActivate?.(events[index]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const container = containerRef.current;
    if (container) {
      const items = container.querySelectorAll("[data-index]");
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (container) {
        const items = container.querySelectorAll("[data-index]");
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, [events, onEventActivate]);

  return (
    <div
      className={cn(
        "   mb-20   mt-20 font-varela px-4 md:px-8 text-foreground",
        containerClassName
      )}
      dir="rtl"
      id="how-it-works"
      ref={containerRef}
    >
      <div className="md:w-4/5 md:mx-auto  md:mb-4 flex justify-start">
        <h1 className="rubik-bold font-semibold text-[#4FF0B7] text-2xl md:text-4xl">
          תהליך <span className="text-white">העבודה</span>
        </h1>
      </div>
      <div className={`relative  mx-auto py-4 max-w-6xl`}>
        {events.map((event, index) => (
          <div className="" key={event.id} data-index={index}>
            <TimelineItem
              event={event}
              isActive={index <= activeIndex}
              isFirst={index === 0}
              isLast={index === events.length - 1}
              index={index}
              styles={styles}
              customRender={customEventRender}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorksPage;
