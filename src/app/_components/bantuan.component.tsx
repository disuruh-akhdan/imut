"use client";

import { motion } from "framer-motion"

export default function BantuanSection() {
  return (
    <section className="w-full py-12 px-4 md:px-12 overflow-hidden relative min-h-screen flex flex-col items-center justify-end">
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-start">
        
        <div className="hidden lg:block"></div>

        <motion.div
          className="absolute left-8 md:left-12 lg:left-16 top-1/4 w-48 lg:w-56 xl:w-64 h-auto z-10 hidden lg:block"
          initial="rest"
          whileHover="hover"
        >
          <motion.img
            src="/papan-bantuan.svg"
            alt=""
            className="absolute inset-0 w-full h-full"
            style={{
              filter: "brightness(0) invert(1) drop-shadow(0 0 10px rgba(255,255,255,0.8))",
            }}
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />

          <img
            src="/papan-bantuan.svg"
            alt="Papan Bantuan"
            className="relative w-full h-auto z-10"
          />
        </motion.div>

        <div className="lg:hidden text-center mb-4">
          <h2 className="text-4xl font-black text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            Bantuan Profesional
          </h2>
        </div>


        <div className="flex justify-center">
          <div
            className="bg-white rounded-[20px] border-8 p-6 pb-8 h-auto w-full max-w-[320px] flex flex-col items-center justify-center gap-3"
            style={{
              boxShadow: "none",
              borderColor: "rgba(255, 255, 255, 0.48)",
            }}
          >
            
            <div className="w-24 h-24 bg-[#D2E6F7] rounded-full shrink-0"></div>

            <h3 className="text-[#2B6CB0] text-xl font-black text-center">
              Hotline Krisis 24/7
            </h3>

            <p className="text-black text-base font-medium leading-relaxed text-center">
              Hubungi kami kapan saja. <br />
              Kami ada untuk <br />
              mendengarkan.
            </p>

            <div className="h-2"></div>

            <button className="w-full py-2.5 bg-[#6BA5D6] hover:bg-[#5A94C5] text-white text-base font-semibold rounded-xl transition-colors shadow-md">
              Hubungi Kami
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className="bg-white rounded-[20px] border-8 p-6 pb-8 h-auto w-full max-w-[320px] flex flex-col items-center justify-center gap-3"
            style={{
              boxShadow: "none",
              borderColor: "rgba(255, 255, 255, 0.48)",
            }}
          >
          
            <div className="w-24 h-24 bg-[#D2E6F7] rounded-full shrink-0"></div>

            <h3 className="text-[#2B6CB0] text-xl font-black text-center">
              Konsultasi
            </h3>

            <p className="text-black text-base font-medium leading-relaxed text-center">
              Temukan psikolog atau konselor <br />
              dalam Penanganan Trauma <br />
              Pasca Bencana (PTSD)
            </p>

            <div className="h-2"></div>

            <button className="w-full py-2.5 bg-[#6BA5D6] hover:bg-[#5A94C5] text-white text-base font-semibold rounded-xl transition-colors shadow-md">
              Jadwalkan Sesi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}