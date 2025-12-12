"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CardProject from "@/components/common/CardProject";
import { DropdownMenuCheckboxes } from "@/components/features/FilterProject";
import SkeletonCard from "@/components/common/SkeletonCard";
import { MotionCard } from "@/components/common/MotionCard";

export default function ProjectPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Fake loading (API real thì thay bằng fetch)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

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
        {isLoading
          ? [...Array(4)].map((_, i) => <SkeletonCard key={i} />)
          : [...Array(4)].map((_, i) => (
              <MotionCard key={i}>
                <CardProject />
              </MotionCard>
            ))}
      </div>
    </motion.div>
  );
}
