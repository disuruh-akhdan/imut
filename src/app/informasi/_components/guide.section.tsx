"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, BookOpen, Users, Heart, Award } from "lucide-react";

const resilenceGuides = [
  {
    icon: <BookOpen size={24} />,
    title: "Panduan Pemulihan Diri",
    desc: "Langkah-langkah praktis mengatasi trauma pasca bencana",
    link: "#"
  },
  {
    icon: <Users size={24} />,
    title: "Membangun Support System",
    desc: "Cara membangun jaringan dukungan yang kuat",
    link: "#"
  },
  {
    icon: <Heart size={24} />,
    title: "Teknik Self-Care",
    desc: "Metode perawatan diri untuk kesehatan mental",
    link: "#"
  },
  {
    icon: <Award size={24} />,
    title: "Kisah Sukses Pemulihan",
    desc: "Kompilasi cerita inspiratif para penyintas",
    link: "#"
  }
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function ResourceGuidesSection() {
  return (
    <motion.section 
      className="w-full py-16 px-4 md:px-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#3B7CA8] text-4xl font-black mb-3">
            Panduan & Sumber Daya
          </h2>
          <p className="text-[#4A90C8] text-lg font-medium">
            Materi edukatif untuk mendukung proses pemulihan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resilenceGuides.map((guide, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-[20px] border-8 border-white/48 p-6 text-center hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="w-16 h-16 bg-[#D2E6F7] rounded-full flex items-center justify-center mx-auto mb-4 text-[#2B6CB0]">
                {guide.icon}
              </div>
              <h3 className="text-[#2B6CB0] text-lg font-black mb-2">
                {guide.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {guide.desc}
              </p>
              <button className="text-[#6BA5D6] font-semibold flex items-center justify-center gap-1 mx-auto hover:gap-2 transition-all">
                Download
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}