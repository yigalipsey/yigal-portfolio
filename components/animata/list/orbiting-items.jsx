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
  <Github key="github" className="h-6 w-6 stroke-[#4FF0B7]" />,
  <Twitter key="twitter" className="h-6 w-6 stroke-[#4FF0B7]" />,
  <Code key="code" className="h-6 w-6 stroke-[#4FF0B7]" />,
  <Package2 key="tailwind" className="h-6 w-6 stroke-[#4FF0B7]" />,
  <Framer key="framer" className="h-6 w-6 stroke-[#4FF0B7]" />,
  <Apple key="apple" className="h-6 w-6 stroke-[#4FF0B7]" />,
  <Figma key="figma" className="h-6 w-6 stroke-[#4FF0B7]" />,
  <Cpu key="cpu" className="h-6 w-6 stroke-[#4FF0B7]" />,
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
        "storybook-fix group flex items-center justify-center py-32",
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
        <div className="absolute h-full w-full rounded-full border-2 border-white" />
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-black border-2 border-[#4FF0B7]"
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

        <div className={cn("absolute h-1/2 w-1/2", reverse)}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="curveTop"
                fill="none"
                d="M50,10 a40,40 0 0,1 0,80 a40,40 0 0,1 0,-80"
              />
              <path
                id="curveBottom"
                fill="none"
                d="M50,90 a40,40 0 0,1 0,-80 a40,40 0 0,1 0,80"
              />
            </defs>
            <text className="text-base font-varela   fill-white">
              <textPath
                xlinkHref="#curveTop"
                startOffset="50%"
                textAnchor="middle"
              >
                <tspan>א</tspan>
                <tspan>ר</tspan>
                <tspan>ג</tspan>
                <tspan>ז</tspan>
                <tspan> </tspan>
                <tspan>ה</tspan>
                <tspan>כ</tspan>
                <tspan>ל</tspan>
                <tspan>י</tspan>
                <tspan>ם</tspan>
                <tspan> </tspan>
                <tspan>ש</tspan>
                <tspan>ל</tspan>
                <tspan>י</tspan>
              </textPath>
            </text>
            <text className="text-base font-varela fill-white">
              <textPath
                xlinkHref="#curveBottom"
                startOffset="50%"
                textAnchor="middle"
              >
                <tspan>ה</tspan>
                <tspan>ת</tspan>
                <tspan>ו</tspan>
                <tspan>צ</tspan>
                <tspan>א</tspan>
                <tspan>ו</tspan>
                <tspan>ת</tspan>
                <tspan> </tspan>
                <tspan>ש</tspan>
                <tspan>ל</tspan>
                <tspan>ך</tspan>
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
