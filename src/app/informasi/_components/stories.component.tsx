"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Calendar, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import type { Story } from "./informasi.main";

type StoriesGridProps = {
  stories: Story[];
  setSelectedStory: (id: number | null) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function StoriesGridSection({
  stories,
  setSelectedStory,
  currentPage,
  setCurrentPage
}: StoriesGridProps) {
  return (
    <motion.section 
      className="w-full py-8 px-4 md:px-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#3B7CA8] text-4xl font-black mb-3">
            Cerita Mereka, Inspirasi Kita
          </h2>
          <p className="text-[#4A90C8] text-lg font-medium">
            Setiap langkah kecil adalah kemenangan besar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }} // Stagger
              whileHover={{ y: -5 }}
              className="bg-white rounded-[20px] border-8 border-white/48 overflow-hidden cursor-pointer group"
              onClick={() => setSelectedStory(story.id)}
            >
              {/* Image placeholder with gradient */}
              <div className="relative h-48 bg-gradient-to-br from-[#D2E6F7] to-[#92D79E] overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {story.tags.map((tag, idx) => (
                    <span key={idx} className="bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-[#2B6CB0]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-[#2B6CB0] text-xl font-black mb-2 line-clamp-2">
                  {story.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <span className="font-semibold">{story.author}</span>
                  <span>•</span>
                  <span>{story.location}</span>
                </div>
                <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {story.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart size={14} />
                      {story.likes}
                    </span>
                  </div>
                  <button className="text-[#6BA5D6] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Baca
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="p-2 rounded-lg bg-white/70 hover:bg-white border-4 border-white/48 transition-colors">
            <ChevronLeft size={20} className="text-[#6BA5D6]" />
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                currentPage === page
                  ? "bg-[#6BA5D6] text-white"
                  : "bg-white/70 text-[#6BA5D6] hover:bg-white"
              } border-4 border-white/48`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 rounded-lg bg-white/70 hover:bg-white border-4 border-white/48 transition-colors">
            <ChevronRight size={20} className="text-[#6BA5D6]" />
          </button>
        </div>
      </div>
    </motion.section>
  );
}