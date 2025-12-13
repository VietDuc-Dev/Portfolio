"use client";
import Image from "next/image";

export default function CardProject() {
  return (
    <div
      className="group relative inline-block transition-all duration-500 
      hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,150,255,0.35)]
      hover:filter-[brightness(1.07)] rounded-sm"
    >
      {/* CARD */}
      <div className="relative h-full w-full glassBase overflow-hidden">
        {/* Light Sweep Animation */}
        <div className="absolute inset-0 pointer-events-none translate-x-[-120%] group-hover:translate-x-[130%] transition-transform duration-1200 ease-out bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12" />

        {/* IMAGE */}
        <div className="max-h-50 m-3 overflow-hidden rounded-sm">
          <Image
            alt="image"
            src="/image-1.jpg"
            width={500}
            height={100}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.08]"
          />
        </div>

        {/* TITLE */}
        <div className="px-1.5 ml-4 max-w-[75%] mb-3">
          <p className="text-[1rem] font-semibold tracking-wide">
            Teams Project Management App
          </p>
        </div>
      </div>

      <button className="absolute bottom-2 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 px-3 py-1.5 min-w-[120px] glassBase text-center cursor-pointer">
        <p className="text-[0.85rem] font-semibold">View Detail</p>
      </button>
    </div>
  );
}
