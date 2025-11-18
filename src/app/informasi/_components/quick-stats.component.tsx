"use client";

import { motion, Variants } from "framer-motion";

const stats = [
  { number: "2,500+", label: "Penyintas Pulih" },
  { number: "150+", label: "Kisah Inspiratif" },
  { number: "50+", label: "Komunitas Aktif" },
  { number: "95%", label: "Tingkat Pemulihan" }
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: "easeOut"
    }
  }
};

export default function QuickStatsSection() {
  return (
    <motion.section 
      className="w-full py-8 px-4 md:px-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/70 backdrop-blur-sm rounded-[20px] border-4 border-white/48 p-4 text-center"
            >
              <h3 className="text-3xl font-black text-[#2B6CB0]">{stat.number}</h3>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}