"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={cn(
          "flex-grow leading-5 text-right",
          !isLast && "mb-32 pb-20"
        )}
      >
        {customRender ? (
          customRender(event)
        ) : (
          <>
            <h3
              className="mb-6 text-4xl font-semibold"
              style={{ color: styles.titleColor }}
            >
              {event.title}
            </h3>
            <p
              className="mb-6 text-2xl"
              style={{ color: styles.descriptionColor }}
            >
              {event.description}
            </p>
            <span className="text-xl" style={{ color: styles.dateColor }}>
              {event.date}
            </span>
          </>
        )}
      </div>
      <div className="relative mr-16 flex flex-col items-center">
        <div
          className={`absolute ${
            isLast ? "hidden" : "block"
          } bottom-0 top-0 w-3`}
          style={{ backgroundColor: styles.lineColor }}
        >
          <motion.div
            className="w-full origin-top"
            style={{
              height: "100%",
              backgroundColor: styles.activeLineColor,
              scaleY: scale,
            }}
          />
        </div>
        <motion.div
          className="relative z-10 rounded-full border-4"
          style={{
            width: styles.dotSize,
            height: styles.dotSize,
            borderColor: styles.dotColor,
            backgroundColor: "Background",
            borderWidth: "8px",
          }}
          animate={{
            scale: isActive ? 1.2 : 1,
            backgroundColor: isActive ? styles.activeDotColor : "Background",
            borderColor: isActive ? styles.activeDotColor : styles.dotColor,
          }}
        />
      </div>
    </motion.div>
  );
};

const defaultStyles = {
  lineColor: "#d1d5db",
  activeLineColor: "#22c55e",
  dotColor: "#d1d5db",
  activeDotColor: "#22c55e",
  dotSize: "4rem",
  titleColor: "inherit",
  descriptionColor: "inherit",
  dateColor: "inherit",
};

const DefaultEvents = [
  {
    id: "1",
    title: "אירוע 1",
    description: "תיאור 1",
    date: "01/01/2023",
  },
  {
    id: "2",
    title: "אירוע 2",
    description: "תיאור 2",
    date: "01/02/2023",
  },
  {
    id: "3",
    title: "אירוע 3",
    description: "תיאור 3",
    date: "01/03/2023",
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
            setActiveIndex(index);
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

  const defaultTitle = "ציר זמן";

  return (
    <div
      className={cn(
        "container mx-auto rounded-lg  px-20 py-32 text-foreground",
        containerClassName
      )}
      dir="rtl"
      ref={containerRef}
    >
      <h1 className="mb-20 text-6xl font-bold">{title || defaultTitle}</h1>
      <div className={`relative py-4 max-w-6xl`}>
        {events.map((event, index) => (
          <div key={event.id} data-index={index}>
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
