"use client";

import { DropdownMenuCheckboxes } from "@/components/features/FilterProject";
import { motion } from "framer-motion";

export default function BlogPage() {
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
          className="text-4xl font-bold tracking-tight"
        >
          Blog
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-x-4 flex"
        >
          <DropdownMenuCheckboxes title="Sort" />
        </motion.div>
      </div>

      {/* Grid (loading vs real data) */}
      <div className="grid grid-cols-3 gap-4">...</div>
    </motion.div>
  );
}
