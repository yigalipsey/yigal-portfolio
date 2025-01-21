"use client";

import Image from "next/image";

export default function OutlinedNumberCard({ number }) {
  return (
    <div className="relative flex items-center justify-start w-full max-w-6xl mx-auto p-6">
      {/* מספר הרקע (צורת דיב) */}
      <div className="absolute left-10 text-outline text-[250px] font-extrabold opacity-30">
        {number}
      </div>
    </div>
  );
}
