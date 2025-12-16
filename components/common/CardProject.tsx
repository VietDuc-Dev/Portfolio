"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Project } from "@/types/project";
import Link from "next/link";

export default function CardProject({ project }: { project: Project }) {
  return (
    <div className="group rounded overflow-hidden flex flex-col max-w-xl mx-auto transition-all duration-500 hover:-translate-y-2">
      {/* IMAGE */}
      <Link href={`projects/${project.slug}`}>
        <div className="w-full max-h-48 overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            width={500}
            height={500}
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
            priority
          />
        </div>
      </Link>

      {/* CONTENT */}
      <div className="relative -mt-12 px-4 py-2 glassBase m-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:backdrop-blur-lg text-black/80">
        <Link href={`projects/${project.slug}`}>
          <p className="font-semibold text-lg inline-block transition-colors duration-300 group-hover:text-black">
            {project.title}
          </p>
        </Link>

        <div>
          <Link href={project.githubUrl}>
            <Button variant="link" className="rounded-sm text-gray-800">
              <Github /> Github
            </Button>
          </Link>

          <Link href={project.liveUrl}>
            <Button variant="link" className="rounded-sm text-gray-800">
              <ArrowUpRight /> Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
