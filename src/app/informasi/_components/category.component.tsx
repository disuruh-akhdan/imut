"use client";

import { motion, Variants } from "framer-motion";
import type { Category } from "./informasi.main";

type CategoryFilterProps = {
  categories: Category[];
  currentCategory: string;
  setCurrentCategory: (id: string) => void;
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function CategoryFilterSection({
  categories,
  currentCategory,
  setCurrentCategory
}: CategoryFilterProps) {
  return (
    <motion.section 
      className="w-full py-8 px-4 md:px-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCurrentCategory(cat.id)}
              className={`px-6 py-3 rounded-[18px] font-semibold transition-all ${
                currentCategory === cat.id
                  ? "bg-[#6BA5D6] text-white shadow-lg"
                  : "bg-white/70 text-[#6BA5D6] hover:bg-white/90"
              } border-4 border-white/48`}
            >
              {cat.label}
              <span className="ml-2 text-sm opacity-80">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}