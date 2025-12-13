"use client";

import { motion } from "motion/react";
import ContactForm from "@/components/common/forms/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex items-center justify-center mt-10"
    >
      <div className="max-w-7xl w-80% grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* LEFT */}
        <div className="text-white space-y-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Let&apos;s Work Together
            </h1>
            <p className="text-gray-300 leading-relaxed max-w-md">
              I’m available for freelance projects, collaborations and new
              opportunities. Feel free to reach out anytime.
            </p>
          </motion.div>

          {/* Contact Items */}
          <div className="space-y-6 pt-2">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-4 p-4"
            >
              <div className="p-3 glass">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-300">Phone</p>
                <p className="font-semibold">+84 386 631 531</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-4 p-4"
            >
              <div className="p-3 glass">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <p className="font-semibold">levietduc.dev@gmail.com</p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-4 p-4"
            >
              <div className="p-3 glass">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-300">Address</p>
                <p className="font-semibold">
                  Hiep Binh Chanh, Thu Duc, HCM City
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
}
