"use client";

import { motion, Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function CtaSection() {
  return (
    <motion.section 
      className="w-full py-16 px-4 md:px-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="bg-[#6BA5D6] rounded-[30px] border-8 border-white/48 p-12 text-center"
        >
          <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
            Bagikan Kisah Anda
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Cerita Anda bisa menjadi cahaya harapan bagi mereka yang sedang berjuang. Mari berbagi kekuatan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#6BA5D6] font-bold rounded-xl hover:shadow-lg transition-all">
              Tulis Kisah Anda
            </button>
            <button className="px-8 py-4 bg-white/20 text-white font-bold rounded-xl border-2 border-white hover:bg-white/30 transition-all">
              Baca Panduan
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}