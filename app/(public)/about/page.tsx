"use client";

import Container from "@/components/common/Container";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 p-10">
      {/* ABOUT ME */}
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg text-black/80 leading-relaxed">
            Hello! I&apos;m <span className="font-semibold">Lê Việt Đức</span>,
            a passionate frontend engineer who loves creating modern, polished,
            and smooth user experiences. I focus heavily on UI/UX, animations,
            and interactive elements that make a website truly come alive.
          </p>
          <p className="text-lg text-black/80 leading-relaxed">
            With a strong foundation in React, Next.js, and TypeScript, I build
            scalable, high-quality interfaces that blend functionality with
            visual finesse.
          </p>
        </motion.div>
      </Container>

      {/* EDUCATION */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold">My Education</h1>

        <Container className="w-full">
          <h3 className="text-xl font-semibold">University of Technology</h3>
          <p className="text-black/70 text-md mt-1">
            Computer Science — 2020–2024
          </p>
          <ul className="mt-3 space-y-2 text-black/80 list-disc pl-5">
            <li>Frontend development & modern UI/UX</li>
            <li>Web performance & optimization</li>
            <li>Human-computer interaction</li>
          </ul>
        </Container>

        <Container className="w-full">
          <h3 className="text-xl font-semibold">Online Certifications</h3>
          <ul className="mt-3 space-y-2 text-black/80 list-disc pl-5">
            <li>Meta Frontend Developer Professional Certificate</li>
            <li>Google UI/UX Design Certification</li>
            <li>Advanced React with TypeScript</li>
          </ul>
        </Container>
      </motion.div>
    </div>
  );
}
