"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";
import {
  Github,
  Twitter,
  Code,
  Package2,
  Framer,
  Apple,
  Figma,
  Cpu,
} from "lucide-react";

export const testOrbitingItems = [
  <Github key="github" className="h-6 w-6" />,
  <Twitter key="twitter" className="h-6 w-6" />,
  <Code key="code" className="h-6 w-6" />,
  <Package2 key="tailwind" className="h-6 w-6" />,
  <Framer key="framer" className="h-6 w-6" />,
  <Apple key="apple" className="h-6 w-6" />,
  <Figma key="figma" className="h-6 w-6" />,
  <Cpu key="cpu" className="h-6 w-6" />,
];

const calculateItemStyle = ({ index, radius, totalItems, angle }) => {
  const itemAngle = (index / totalItems) * 360 + angle;
  const radians = (itemAngle * Math.PI) / 180;
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);
  return {
    left: `${50 + x}%`,
    top: `${50 + y}%`,
    transform: `translate(-50%, -50%)`,
  };
};

export default function OrbitingItems({
  radius = 50,
  items = testOrbitingItems,
  pauseOnHover,
  containerClassName,
  className,
}) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const animation = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 25);

    return () => clearInterval(animation);
  }, []);

  const reverse = cn(
    "transition-transform ease-linear direction-reverse repeat-infinite",
    {
      "group-hover:[animation-play-state:paused]": pauseOnHover,
    }
  );

  return (
    <div
      className={cn(
        "storybook-fix group flex items-center justify-center py-16",
        containerClassName
      )}
    >
      <div
        className={cn(
          "relative flex h-64 w-64 items-center justify-center",
          className
        )}
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <div className="absolute h-full w-full rounded-full border-2 border-gray-500" />
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-gray-200"
              style={calculateItemStyle({
                index,
                radius,
                totalItems: items.length,
                angle: 0,
              })}
            >
              <div
                className={reverse}
                style={{ transform: `rotate(-${angle}deg)` }}
              >
                {item}
              </div>
            </div>
          );
        })}

        <div
          className={cn(
            "absolute h-1/2 w-1/2 rounded-full border-2 border-gray-700",
            reverse
          )}
        />
      </div>
    </div>
  );
}
