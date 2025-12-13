"use client";

import { motion } from "motion/react";
import ContactForm from "@/components/common/forms/ContactForm";
import ContactCard from "@/components/features/ContactCard";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-[70vh]"
    >
      <div className="max-w-7xl w-80% grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT */}
        <div className="text-white space-y-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-2"
          >
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight bg-linear-to-r 
            from-pink-500 to-blue-500 bg-clip-text text-transparent"
            >
              Let&apos;s Work Together
            </h1>
            <p className="text-gray-300 leading-relaxed max-w-md">
              I’m available for freelance projects, collaborations and new
              opportunities. Feel free to reach out anytime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <ContactCard />
          </motion.div>
        </div>

        {/* RIGHT - Contact Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="md:mt-20"
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
}
