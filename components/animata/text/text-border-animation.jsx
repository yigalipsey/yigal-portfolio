"use client";

import { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";

export default function TextBorderAnimation({
  text = "Programming",
  className,
  textSize = "text-lg", // גודל טקסט גדול יותר כברירת מחדל
  textColor = "text-white", // צבע טקסט לבן כברירת מחדל
  borderColor = "bg-white", // צבע הקו - לבן כברירת מחדל
}) {
  const [isHoveredIn, setIsHoveredIn] = useState(false);
  const [isHoveredOut, setIsHoveredOut] = useState(false);

  const handleHover = () => {
    setIsHoveredIn(true);
  };

  const handleHoverExit = () => {
    setIsHoveredIn(false);
    setIsHoveredOut(true);
  };

  useEffect(() => {
    if (isHoveredOut) {
      const timer = setTimeout(() => {
        setIsHoveredOut(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isHoveredOut]);

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
      className="overflow-hidden"
    >
      <span className={cn(`font-varela ${textSize} ${textColor}`, className)}>
        {text}
      </span>
      <div className="relative mt-1 h-1 w-full">
        <div
          className={cn(
            `absolute left-0 top-0 h-full w-full ${borderColor} transition-transform duration-300`,
            isHoveredIn
              ? "translate-x-0 transform opacity-100"
              : "-translate-x-full transform opacity-0"
          )}
        ></div>
        <div
          className={cn(
            `absolute left-0 top-0 h-full w-full translate-x-0 transform ${borderColor} opacity-0 transition-transform duration-300`,
            isHoveredOut && "translate-x-full opacity-100"
          )}
        ></div>
      </div>
    </div>
  );
}
