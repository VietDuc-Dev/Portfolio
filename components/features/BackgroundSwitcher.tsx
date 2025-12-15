"use client";

import { useBackground } from "@/lib/contexts/BackgroundContext";
import Image from "next/image";

export default function BackgroundSwitcher() {
  const { backgrounds, setBackground, background } = useBackground();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-3 rounded-xl glass p-3">
      {backgrounds.map((bg, index) => (
        <button
          key={bg}
          onClick={() => setBackground(bg)}
          className={`relative h-14 w-14 overflow-hidden rounded-lg border
            ${background === bg ? "border-white" : "border-white/20"}
          `}
          aria-label={`Change background ${index + 1}`}
        >
          <Image
            src={bg}
            alt={`Background ${index + 1}`}
            fill
            className="object-cover"
          />
        </button>
      ))}
    </div>
  );
}
