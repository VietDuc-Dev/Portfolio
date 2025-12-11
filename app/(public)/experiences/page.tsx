"use client";

import { motion } from "framer-motion";
import TechItem from "@/components/common/TechIcon/TechItem";
import {
  techIconBackend,
  techIconFrontend,
  techIconTool,
} from "@/constants/techIcon";
import { timelineData } from "@/constants/timeline";

export default function ExperiencesPage() {
  return (
    <motion.div
      className="w-full py-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE – SKILLS */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl font-bold tracking-tight mb-4 bg-linear-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Skills & Expertise
          </motion.h1>

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>

            <div className="space-y-3">
              <div className="flex justify-center space-x-3">
                {techIconFrontend.slice(0, 4).map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: 0.2 + i * 0.05,
                      duration: 0.4,
                    }}
                  >
                    <TechItem name={item.name} icon={item.icon} />
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center space-x-3">
                {techIconFrontend.slice(4).map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: 0.4 + i * 0.05,
                      duration: 0.4,
                    }}
                  >
                    <TechItem name={item.name} icon={item.icon} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">Backend</h3>

            <div className="flex justify-center space-x-3">
              {techIconBackend.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.35 + i * 0.05,
                    duration: 0.4,
                  }}
                >
                  <TechItem name={item.name} icon={item.icon} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <h3 className="text-xl font-semibold mb-2">Tools & DevOps</h3>

            <div className="flex justify-center space-x-3">
              {techIconTool.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.5 + i * 0.05,
                    duration: 0.4,
                  }}
                >
                  <TechItem name={item.name} icon={item.icon} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE – TIMELINE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold tracking-tight mb-6 bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Work & Education Timeline
          </h1>

          <div>
            <ol className="relative space-y-6 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700">
              {timelineData.map((item, i) => (
                <motion.li
                  key={i}
                  className="relative -ms-1.5 flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.4 + i * 0.15,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

                  <div className="-mt-2">
                    <time className="text-xs/none font-medium  dark:text-gray-200">
                      {item.time}
                    </time>

                    <h3 className="text-lg font-bold  dark:text-white">
                      {item.title}
                    </h3>

                    <ul className="space-y-2 text-secondary-foreground/90">
                      {item.desc.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
