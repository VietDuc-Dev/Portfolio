"use client";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Cake, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div className="m-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        {/* Top Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left – Avatar + Name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-start"
          >
            <p className="text-sm text-primary mb-2">Nice to meet you!</p>

            <h1 className="text-4xl font-bold tracking-tight mb-8">
              WELCOME TO ...
            </h1>

            <div className="w-full flex justify-center">
              <div className="flex flex-col justify-center items-center text-center">
                {/* Avatar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-60 h-60 rounded-full overflow-hidden shadow-md"
                >
                  <img
                    src="/avatar.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Name */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-4xl mt-4 font-extrabold bg-linear-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent"
                >
                  LE VIET DUC
                </motion.h2>

                {/* Role */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl mt-2"
                >
                  <span className="font-semibold">Frontend Developer</span> •
                  ReactJS / Next.js / TypeScript
                  <br />
                  <span className="font-semibold italic">
                    Based in Thu Duc City, Viet Nam
                  </span>
                </motion.p>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button className="mt-6">Download CV</Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right – Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="space-y-4">
              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex items-start gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <p className="font-medium">Phone: +84 386 631 531</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <Cake className="w-5 h-5" />
                  <p className="font-medium">Date of birth: 23/07/2002</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex items-start gap-3"
                >
                  <Mail className="w-5 h-5" />
                  <p className="font-medium">Email: levietduc.dev@gmail.com</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <MapPin className="w-5 h-5" />
                  <p className="font-medium">Location: Thu Duc City, HCMC</p>
                </motion.div>
              </div>

              <div className="border-t border-gray-300 my-4" />

              <div className="grid grid-cols-2 gap-10">
                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                >
                  <h3 className="text-5xl font-bold bg-linear-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
                    EDUCATION
                  </h3>

                  <p className="font-semibold mt-1">Academic Background</p>

                  <p className="mt-3">
                    Bachelor of{" "}
                    <span className="font-bold">Information Technology</span>
                    <br />
                    <span className="text-blue-600 font-semibold">
                      UTC2 – HCMC | Graduated 2024
                    </span>
                    <br />
                    Focused on{" "}
                    <span className="font-semibold">
                      ReactJS, Next.js, TS
                    </span>{" "}
                    and modern web development.
                  </p>
                </motion.div>

                {/* Experience */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-5xl font-bold bg-linear-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                    1.5+
                  </h3>
                  <p className="font-semibold mt-1">Years of Experience</p>
                  <p className="mt-3">
                    Specialized in{" "}
                    <span className="font-bold text-blue-600">
                      ReactJS / Next.js / TypeScript
                    </span>{" "}
                    with clean UI, smooth UX & scalable architecture.
                  </p>
                </motion.div>
              </div>

              {/* Quote Section */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <Container className="px-10 py-3 text-center text-xl leading-relaxed">
                  <p>
                    “Code is not just about solving problems — it&apos;s about
                    crafting experiences people enjoy using.”
                  </p>
                </Container>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
