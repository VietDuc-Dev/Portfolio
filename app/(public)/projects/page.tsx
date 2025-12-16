"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CardProject from "@/components/common/CardProject";
import { DropdownMenuCheckboxes } from "@/components/features/FilterProject";
import { MotionCard } from "@/components/common/MotionCard";
import { Project } from "@/types/project";
import ProjectAPI from "@/lib/server/ProjectAPI";
import SkeletonCard from "@/components/common/SkeletonCard";

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await ProjectAPI.getAllProjects();
        setProjects(data ?? []);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (!loading && projects.length === 0) {
    return (
      <p className="text-muted-foreground text-center mt-12">
        No projects found.
      </p>
    );
  }

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
            text-4xl font-bold tracking-tight
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
      {loading ? (
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <MotionCard key={project.slug}>
              <CardProject project={project} />
            </MotionCard>
          ))}
        </div>
      )}
    </motion.div>
  );
}
