"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import type { Story } from "./informasi.main";

type ModalProps = {
  selectedStoryId: number | null;
  setSelectedStory: (id: number | null) => void;
  stories: Story[];
};

export default function StoryDetailModal({
  selectedStoryId,
  setSelectedStory,
  stories
}: ModalProps) {
  const story = stories.find(s => s.id === selectedStoryId);

  return (
    <AnimatePresence>
      {story && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedStory(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[30px] bg-white border-8 border-white/70 shadow-2xl"
          >
            <>
              {/* Header */}
              <div className="relative h-64 bg-gradient-to-br from-[#D2E6F7] to-[#92D79E]">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
                >
                  <span className="text-2xl text-gray-700">×</span>
                </button>
                <div className="absolute bottom-6 left-8 right-8">
                  <h2 className="text-3xl font-black text-white mb-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                    {story.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-[#2B6CB0]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  {/* Author image placeholder */}
                  <div className="w-16 h-16 bg-[#D2E6F7] rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-[#2B6CB0] text-lg">{story.author}</h3>
                    <p className="text-gray-600 text-sm">{story.location} • {story.date}</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    {story.fullStory}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t gap-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-[#6BA5D6] font-semibold">
                      <Heart size={20} />
                      {story.likes} Terinspirasi
                    </button>
                    <span className="text-gray-500 text-sm">
                      {story.readTime} baca
                    </span>
                  </div>
                  <button className="px-6 py-2 bg-[#6BA5D6] text-white font-semibold rounded-xl hover:bg-[#5A94C5] transition-colors w-full sm:w-auto">
                    Bagikan Kisah
                  </button>
                </div>
              </div>
            </>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}