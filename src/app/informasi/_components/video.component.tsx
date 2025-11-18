"use client";

import { motion, Variants } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Dokumenter: Bangkit dari Cianjur",
    duration: "15:30",
    views: "12.5K"
  },
  {
    title: "Webinar: Trauma Healing Pasca Bencana",
    duration: "45:00",
    views: "8.2K"
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

export default function VideoSection() {
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
            Video Inspirasi
          </h2>
          <p className="text-[#4A90C8] text-lg font-medium">
            Dengar langsung dari mereka yang telah melewati badai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative bg-gradient-to-br from-[#D2E6F7] to-[#6BA5D6] rounded-[20px] border-8 border-white/48 overflow-hidden group cursor-pointer h-64"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="text-[#6BA5D6] ml-1" size={32} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-bold text-lg mb-1">{video.title}</h3>
                <div className="flex gap-4 text-white/80 text-sm">
                  <span>{video.duration}</span>
                  <span>{video.views} tayangan</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}