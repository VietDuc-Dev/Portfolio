"use client";

import TypingText from "@/components/common/TypingText";
import { Button } from "@/components/ui/button";
import { resume } from "@/constants/resume";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full flex justify-center min-h-[74vh]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 space-y-6"
        >
          <h1 className="text-5xl font-bold">Hi, I&apos;m Le Viet Duc</h1>
          <h2 className="text-2xl font-semibold text-secondary-foreground/70">
            <TypingText
              words={[
                "Web Developer",
                "Frontend Engineer",
                "Backend Engineer",
                "React/Next.js Developer",
              ]}
            />
          </h2>
          <p className="text-secondary-foreground/90 leading-relaxed max-w-lg">
            I am a web developer with over one years of experience in building
            and maintaining websites. I excel in creating visually polished,
            modern interfaces and seamless user experiences.
          </p>
          <ul className="space-y-2 text-secondary-foreground/90">
            <li>• Expert in React, Next.js & TypeScript</li>
            <li>• Strong UI/UX mindset</li>
            <li>• Passionate about animations & micro‑interactions</li>
          </ul>
          <div className="space-x-4">
            <Link href={"/contact"}>
              <Button className="px-6 py-2 rounded-xl bg-gray-600 hover:bg-gray-700">
                Hire me
              </Button>
            </Link>
            <Link href={"/projects"}>
              <Button variant="outline" className="rounded-xl px-6 py-2">
                My project
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-60 h-60 rounded-full p-[3px] shadow-[0_0_25px_rgba(0,0,0,0.4)] flex justify-center items-center">
            <div className="relative w-58 h-58 rounded-full overflow-hidden">
              <Image
                src={resume.basics.image}
                alt="Avatar"
                fill
                sizes="240px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
