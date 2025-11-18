"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Eye, Ear, Link2, X } from "lucide-react";
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
  const [showP3K, setShowP3K] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <section className="w-full py-12 px-4 md:px-12 overflow-hidden relative min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-80">

          <div className="lg:col-span-7 flex flex-col items-center lg:items-stretch z-10">
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
                            fringilla vestibulum viverra volutpat nulla
                            porttitor.
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

          {/* === KOLOM KANAN (Area Rumah & Tas P3K) === */}
          <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[500px]">
            <motion.div
              className="absolute -bottom-50 -right-20 flex items-center cursor-pointer z-20 group"
              onClick={() => setShowP3K(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Bubble "click me" */}
              <motion.div
                className="bg-white px-4 py-1.5 rounded-full shadow-md mr-3 relative -right-25"
                initial={{ x: 0 }}
                animate={{ x: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xs font-bold text-gray-700">
                  click me
                </span>
              </motion.div>

              {/* Gambar Tas P3K */}
              <div className="relative w-80 h-80">
                <Image
                  src="/p3k-bag.svg"
                  alt="P3K Emosional"
                  fill
                  className="object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  style={{ filter: "none" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    filter:
                      "drop-shadow(0px 0px 4px white) drop-shadow(0px 0px 8px white)",
                  }}
                >
                  <Image
                    src="/p3k-bag.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showP3K && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl rounded-3xl p-6 md:p-10 shadow-2xl border-8 border-[#ffffff7a] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/kenali-card.svg')",
              }}
            >
              <button
                onClick={() => setShowP3K(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white bg-white/20 hover:bg-white/30 rounded-full border-2 border-white transition-colors"
              >
                <X size={24} strokeWidth={2.5} />
              </button>

              {/* Judul Modal */}
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
                P3K Emosional (Pertolongan Pertama)
              </h2>

              <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
                {/* Teks Modal */}
                <div className="flex-1 w-full space-y-6">
                  
                  {/* Section Gejala */}
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <h4 className="text-[#2B6CB0] text-xl font-bold mb-3">
                      Kapan Membuka Tas Ini?
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Jantung berdebar kencang tiba-tiba",
                        "Napas terasa pendek",
                        "Merasa tidak nyata (disosiasi)",
                        "Ingin menangis tak tertahankan",
                      ].map((g, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-700 font-medium leading-relaxed text-sm"
                        >
                          <span className="mr-2 text-[#4A90C8]">•</span>
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Langkah Cepat */}
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <h4 className="text-[#C05621] text-xl font-bold mb-2">
                      Isi Tas (Latihan Grounding)
                    </h4>
                    <p className="text-gray-700 font-medium leading-relaxed text-sm">
                      <strong>Teknik 5-4-3-2-1:</strong> Cari 5 benda yang bisa
                      dilihat, 4 yang bisa disentuh, 3 suara yang didengar, 2
                      bau yang dicium, dan 1 rasa di lidah. Tarik napas dalam.
                    </p>
                  </div>

                  <button className="w-full bg-[#E53E3E] hover:bg-[#C53030] text-white font-bold py-3 rounded-lg transition-colors shadow-lg mt-2">
                    Hubungi Konselor Darurat
                  </button>
                </div>

                {/* Gambar Kanan */}
                <div className="hidden md:flex flex-1 flex-col items-center justify-center relative">
                  <div className="relative w-90 h-90 animate-pulse-slow">
                    <Image
                      src="/p3k-bag.svg"
                      alt="Medicine Bag"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                  <p className="text-center text-white text-xs italic mt-4">
                    &quot;Kamu aman sekarang. Tarik napas perlahan.&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}