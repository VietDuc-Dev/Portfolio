"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CardProject from "@/components/common/CardProject";
import { DropdownMenuCheckboxes } from "@/components/features/FilterProject";
import { MotionCard } from "@/components/common/MotionCard";
import { Project } from "@/types/project";
import ProjectAPI from "@/lib/server/ProjectAPI";

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    ProjectAPI.getAllProjects().then(setProjects);
  }, []);

  if (!projects) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <motion.h1
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="
            text-3xl font-bold tracking-tight bg-linear-to-r 
            from-pink-500 to-blue-500 bg-clip-text text-transparent
          "
        >
          My Portfolio
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-x-4 flex"
        >
          <DropdownMenuCheckboxes title="Language" />
          <DropdownMenuCheckboxes title="Sort" />
        </motion.div>
      </div>

      {/* Grid (loading vs real data) */}
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <MotionCard key={project.slug}>
            <CardProject project={project} />
          </MotionCard>
        ))}
      </div>
    </motion.div>
  );
}
