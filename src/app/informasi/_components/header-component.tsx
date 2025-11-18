"use client";

import { motion } from "framer-motion";

export default function HeaderSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-start overflow-hidden pt-32 pb-16">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-5xl font-bold text-[#4A90C8] mb-5"
          style={{
            textShadow: `
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 255, 255, 0.6)
            `,
          }}
        >
          Kisah Harapan & Ketangguhan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg font-semibold text-[#6BA5D6] mb-10 max-w-3xl mx-auto"
          style={{
            textShadow: `0 0 15px rgba(255, 255, 255, 0.7)`,
          }}
        >
          Temukan inspirasi dari mereka yang telah bangkit. Setiap cerita adalah bukti bahwa badai pasti berlalu.
        </motion.p>
      </div>
    </section>
  );
}