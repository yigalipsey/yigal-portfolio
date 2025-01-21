"use client";
import React, { useEffect, useState } from "react";
import {
  Apple,
  BadgeCent,
  BadgeInfo,
  BadgeX,
  Banana,
  Bolt,
  LayoutList, // importing a random icon from lucide, as a placeholder
} from "lucide-react";
import { cn } from "@/lib/utils";

export const CenterIcon = (
  <LayoutList // now using the LayoutList from lucide-react as the center icon, as an example.
    className="center z-0 h-32 w-32 animate-float rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shadow-lg"
    style={{
      boxShadow: "0 0 20px 10px rgba(128, 90, 213, 0.6)",
    }}
  />
);
export const LucideIcons = [
  <Banana key="banana" className="h-12 w-12" />,
  <Bolt key="bolt" className="h-12 w-12" />,
  <BadgeX key="badge-x" className="h-12 w-12" />,
  <BadgeCent key="badge-cent" className="h-12 w-12" />,
  <BadgeInfo key="badge-info" className="h-12 w-12" />,
  <Apple key="apple" className="h-12 w-12" />,
];

export default function OrbitingItems3D({
  radiusX = 120,
  radiusY = 30,
  tiltAngle = 360 - 30,
  duration = 25,
  items = LucideIcons,
  backgroundClassName,
  containerClassName,
  className,
}) {
  // The OrbitingItems3D component creates an animated elliptical orbiting effect for a set of items around a central element.
  // It allows for a visually dynamic layout, where items revolve around the center in a smooth, continuous motion,
  // creating the illusion of 3D movement. The component provides a range of customizable options to control the orbit,
  // including the size of the elliptical path, tilt angle, and animation duration.

  const CalculateItemStyle = ({
    index,
    radiusX,
    radiusY,
    totalItems,
    tiltAngle,
    duration,
  }) => {
    const angleStep = 360 / totalItems;
    const [angle, setAngle] = useState(index * angleStep);
    useEffect(() => {
      const animation = setInterval(() => {
        setAngle((prevAngle) => (prevAngle + 1) % 360);
      }, duration);

      return () => clearInterval(animation);
    }, [duration]);
    // Calculate the current angle for the item on the orbit

    const radians = (angle * Math.PI) / 180;

    // X and Y positions before tilt
    const x = radiusX * Math.cos(radians);
    const y = radiusY * Math.sin(radians);

    // Apply the tilt using rotation matrix
    const tiltRadians = (tiltAngle * Math.PI) / 180;
    const xTilted = x * Math.cos(tiltRadians) - y * Math.sin(tiltRadians);
    const yTilted = x * Math.sin(tiltRadians) + y * Math.cos(tiltRadians);
    const zIndex = angle > 180 ? -1 : 1;
    const scale = angle < 180 ? 1.2 : 1.0;

    return {
      left: `${50 + xTilted}%`,
      top: `${50 + yTilted}%`,
      transform: `translate(-50%, -50%) scale(${scale})`,
      zIndex: zIndex,
      transition: "transform 0.8s ease-in-out",
    };
  };

  const reverse = cn(
    "transition-transform ease-linear direction-reverse repeat-infinite"
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
          "absolute inset-0 -z-10 h-full w-full items-center bg-gradient-to-r from-violet-200 to-pink-200",
          backgroundClassName
        )}
      />
      <div
        className={cn(
          "relative flex h-64 w-64 items-center justify-center ease-linear repeat-infinite",
          className
        )}
      >
        {CenterIcon}
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="absolute flex h-20 w-20 items-center justify-center rounded-full shadow-xl  backdrop-blur-md transition-transform duration-500 ease-out"
              style={CalculateItemStyle({
                index,
                radiusX,
                radiusY,
                tiltAngle,
                totalItems: items.length,
                duration,
              })}
            >
              <div className={reverse}>{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
