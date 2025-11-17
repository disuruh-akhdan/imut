"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Eye, Ear, Link2 } from "lucide-react";
import Image from "next/image";

const pfaItems = [
  {
    title: "Lihat & Amati (Look)",
    icon: <Eye size={24} />,
    desc: "Pastikan keamanan area. Cek siapa yang butuh prioritas.",
  },
  {
    title: "Dengar (Listen)",
    icon: <Ear size={24} />,
    desc: "Dengarkan tanpa memaksa. Validasi perasaan mereka.",
  },
  {
    title: "Hubungkan (Link)",
    icon: <Link2 size={24} />,
    desc: "Bantu penuhi kebutuhan dasar & hubungkan ke bantuan.",
  },
];

const storyItems = [
  {
    id: 1,
    title: "Bangkit dari Abu",
    desc: "Hubungi kami kapan saja. Kami ada untuk mendengarkan.",
    image: "/cerita-1.png",
  },
  {
    id: 2,
    title: "Harapan Baru",
    desc: "Hubungi kami kapan saja. Kami ada untuk mendengarkan.",
    image: "/cerita-1.png",
  },
  {
    id: 3,
    title: "Melangkah Maju",
    desc: "Kisah inspiratif tentang pemulihan trauma.",
    image: "/cerita-1.png",
  },
];

export default function PanduanResiliensiSection() {
  const [openSection, setOpenSection] = useState<string | null>("jejak");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="w-full py-12 px-4 md:px-12 overflow-hidden relative min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-80">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-stretch">
          {/* Judul Section */}
          <div className="text-center mb-8 text-white drop-shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pusat <br /> Panduan & Resiliensi
            </h2>
          </div>

          <div className="bg-white rounded-[30px] p-6 md:p-8 w-full h-auto shadow-xl">
            {/* Accordion PFA */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection("pfa")}
                className={`w-full flex items-center justify-between px-6 py-3.5 rounded-xl transition-all duration-300 ${
                  openSection === "pfa"
                    ? "bg-[#D2E6F7] text-[#2B6CB0]"
                    : "bg-[#6BA5D6] text-white"
                }`}
              >
                <span className="text-lg font-semibold tracking-wide">
                  Panduan PFA
                </span>
                {openSection === "pfa" ? (
                  <Minus size={24} />
                ) : (
                  <Plus size={24} />
                )}
              </button>

              <AnimatePresence>
                {openSection === "pfa" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-5 pb-2 px-2">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {pfaItems.map((item, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-50 p-4 rounded-xl border border-slate-100"
                          >
                            <div className="text-[#6BA5D6] mb-2">
                              {item.icon}
                            </div>
                            <h4 className="font-bold text-slate-700 mb-1 text-sm md:text-base">
                              {item.title}
                            </h4>
                            <p className="text-xs text-slate-500 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion Jejak Harapan */}
            <div>
              <button
                onClick={() => toggleSection("jejak")}
                className={`w-full flex items-center justify-between px-6 py-3.5 rounded-t-xl transition-all duration-300 ${
                  openSection === "jejak"
                    ? "bg-[#D2E6F7] text-[#2B6CB0] rounded-b-none"
                    : "bg-[#6BA5D6] text-white rounded-b-xl"
                }`}
              >
                <span className="text-lg font-semibold tracking-wide">
                  Jejak Harapan
                </span>
                {openSection === "jejak" ? (
                  <Minus size={24} />
                ) : (
                  <Plus size={24} />
                )}
              </button>

              <AnimatePresence>
                {openSection === "jejak" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-x border-b border-gray-100 rounded-b-xl"
                  >
                    <div className="p-5">
                      <div className="flex gap-4 overflow-x-auto pb-5 scrollbar-hide snap-x">
                        {storyItems.map((item) => (
                          <div
                            key={item.id}
                            className="relative shrink-0 w-[280px] h-[180px] rounded-2xl overflow-hidden group cursor-pointer snap-start shadow-sm"
                          >
                            <div className="absolute inset-0 bg-gray-300">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                              <h4 className="font-bold text-lg mb-1">
                                {item.title}
                              </h4>
                              <p className="text-[10px] opacity-90 leading-tight max-w-[90%]">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 flex flex-col md:flex-row items-end gap-5 justify-between">
                        <p className="text-sm text-gray-600 leading-relaxed font-medium max-w-lg">
                          Lorem ipsum dolor sit consectetur. Velit amet
                          fringilla vestibulum viverra volutpat nulla porttitor.
                        </p>
                        <button className="bg-[#6BA5D6] hover:bg-[#5A94C5] text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-colors text-center whitespace-nowrap shrink-0">
                          Bagikan <br /> Kisahmu
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5 relative h-full">
        </div>
      </div>
    </section>
  );
}