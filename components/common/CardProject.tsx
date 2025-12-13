"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "../ui/button";

export default function CardProject() {
  return (
    <div className="group rounded overflow-hidden flex flex-col max-w-xl mx-auto transition-all duration-500 hover:-translate-y-2">
      {/* IMAGE */}
      <a href="projects/123" className="overflow-hidden">
        <img
          className="w-full max-h-52 object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] "
          src="https://cdn.sanity.io/images/fpx3afrv/production/c9735ae7e20ef26c90fc7e1607c2bfdc08097792-4320x4320.png?w=1080&h=1080&fm=webp&q=85"
          alt="Sunset in the mountains"
        />
      </a>

      {/* CONTENT */}
      <div className="relative -mt-12 px-4 py-2 glassBase m-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:backdrop-blur-lg text-black/80">
        <a
          href="projects/123"
          className="font-semibold text-lg inline-block transition-colors duration-300 group-hover:text-black"
        >
          Teams Project Management App
        </a>
        <Button variant="link" className="rounded-sm text-gray-800">
          <Github /> Github
        </Button>
        <Button variant="link" className="rounded-sm text-gray-800">
          <ArrowUpRight /> Demo
        </Button>
      </div>
    </div>
  );
}
