"use client";

import Container from "@/components/common/Container";
import TypingText from "@/components/common/TypingText";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { motion } from "motion/react";

export default function HomePage() {
  const { user } = useUser();

  return (
    <Container className="w-full flex justify-center min-h-[74vh]">
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
                "UI/UX Enthusiast",
                "React/Next.js Developer",
              ]}
            />
          </h2>
          <p className="text-secondary-foreground/80 leading-relaxed max-w-lg">
            I am a web developer with over three years of experience in building
            and maintaining websites. I excel in creating visually polished,
            modern interfaces and seamless user experiences.
          </p>
          <ul className="space-y-2 text-secondary-foreground/80">
            <li>• Expert in React, Next.js & TypeScript</li>
            <li>• Strong UI/UX mindset</li>
            <li>• Passionate about animations & micro‑interactions</li>
          </ul>
          <Button className="px-6 py-2 rounded-xl bg-secondary-foreground text-white hover:bg-secondary-foreground/80">
            View Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src="https://ss-images.saostar.vn/wp700/pc/1655895094264/saostar-zemx7kpv9n1wnysy.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-2xl font-semibold mt-4">Lê Việt Đức</p>
          <p className="text-secondary-foreground/60 mt-1">Frontend Engineer</p>
          <div className="flex gap-4 mt-4">
            <Button variant="outline" className="rounded-full px-4">
              Contact
            </Button>
            <Button variant="outline" className="rounded-full px-4">
              Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
