"use client";

import { motion } from "framer-motion";

export default function SkeletonCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="
        w-full h-[280px] rounded-xl
        bg-white/5 border border-white/10
        animate-pulse
        backdrop-blur-md
      "
    >
      <div className="h-full w-full p-4 space-y-3">
        <div className="h-[60%] w-full rounded-md bg-white/10" />
        <div className="h-4 w-[70%] rounded bg-white/10" />
        <div className="h-4 w-[40%] rounded bg-white/10" />
      </div>
    </motion.div>
  );
}
