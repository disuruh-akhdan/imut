"use client";

import Image from "next/image";
import { motion, Transition } from "framer-motion";
import RotatingText from "@/components/ui/rotating-text";

const bubbleTransition: Transition = {
  duration: 12,
  repeat: Infinity,
  ease: "easeInOut",
  times: [0, 0.2, 0.8, 1],
};

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden pt-28 pb-10">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        {/* LEFT CLOUDS */}
        <motion.div
          animate={{ y: [-15, 15, -15], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[-8%] w-[180px] sm:w-[240px] md:w-[300px] lg:w-[340px] opacity-80"
        >
          <Image src="/cloud.svg" alt="cloud" width={400} height={250} />
        </motion.div>

        <motion.div
          animate={{ y: [-20, 20, -20], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[4%] w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] opacity-70"
        >
          <Image src="/cloud.svg" alt="cloud" width={320} height={200} />
        </motion.div>

        <motion.div
          animate={{ y: [-18, 18, -18], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[2%] w-[120px] sm:w-[160px] md:w-[200px] lg:w-[220px] opacity-60"
        >
          <Image src="/cloud.svg" alt="cloud" width={260} height={170} />
        </motion.div>

        {/* RIGHT CLOUDS */}
        <motion.div
          animate={{ y: [-15, 15, -15], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] right-[-10%] w-[180px] sm:w-[240px] md:w-[300px] lg:w-[340px] opacity-80"
        >
          <Image src="/cloud.svg" alt="cloud" width={400} height={250} />
        </motion.div>

        <motion.div
          animate={{ y: [-20, 20, -20], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[4%] w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] opacity-70"
        >
          <Image src="/cloud.svg" alt="cloud" width={320} height={200} />
        </motion.div>

        <motion.div
          animate={{ y: [-18, 18, -18], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[32%] right-[2%] w-[120px] sm:w-[160px] md:w-[200px] lg:w-[220px] opacity-60"
        >
          <Image src="/cloud.svg" alt="cloud" width={260} height={170} />
        </motion.div>
      </div>

      {/* BUBBLES – RESPONSIVE POSITION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
        transition={{ ...bubbleTransition, delay: 0 }}
        className="absolute top-[40%] left-[5%] sm:left-[7%] md:left-[10%] w-[200px] sm:w-[230px] md:w-[260px] h-[90px] sm:h-[100px] md:h-[110px] flex items-center justify-center z-10"
      >
        <div className="absolute inset-0 bg-[#FCFFF8] blur-xl rounded-full" />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-[10px] sm:text-xs md:text-base text-center px-3 leading-tight">
          Semangat ya buat <br /> kamu!!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
        transition={{ ...bubbleTransition, delay: 3 }}
        className="absolute bottom-[33%] left-[5%] sm:left-[7%] w-[200px] sm:w-[230px] md:w-[260px] h-[90px] sm:h-[100px] md:h-[110px] flex items-center justify-center z-10"
      >
        <div className="absolute inset-0 bg-[#FCFFF8] blur-xl rounded-full" />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-[10px] sm:text-xs md:text-sm text-center px-4 leading-tight">
          Hai, apakah <br /> kamu baik-baik saja?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
        transition={{ ...bubbleTransition, delay: 6 }}
        className="absolute top-[40%] right-[5%] sm:right-[7%] md:right-[10%] w-[200px] sm:w-[230px] md:w-[260px] h-[90px] sm:h-[100px] md:h-[110px] flex items-center justify-center z-10"
      >
        <div className="absolute inset-0 bg-[#FCFFF8] blur-xl rounded-full" />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-[10px] sm:text-xs md:text-sm text-center px-4 leading-tight">
          Siapa yang menjadi <br /> sandaranmu saat ini?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
        transition={{ ...bubbleTransition, delay: 9 }}
        className="absolute bottom-[33%] right-[5%] sm:right-[7%] w-[200px] sm:w-[230px] md:w-[260px] h-[90px] sm:h-[100px] md:h-[110px] flex items-center justify-center z-10"
      >
        <div className="absolute inset-0 bg-[#FCFFF8] blur-xl rounded-full" />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-[10px] sm:text-xs md:text-sm text-center px-4 leading-tight">
          Setiap langkah kecilmu <br /> itu berarti!
        </p>
      </motion.div>

      {/* HEADER */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A90C8] mb-5 flex flex-col items-center">
          <span>Langkah Pertama Menuju</span>

          <div className="mt-3">
            <RotatingText
              texts={["pemulihan", "kekuatan", "harapan", "kedamaian"]}
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.04}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              rotationInterval={3000}
              mainClassName="bg-white text-[#4A90C8] px-5 sm:px-7 py-1.5 rounded-lg"
              splitLevelClassName="overflow-hidden pb-1"
            />
          </div>
        </h1>

        <p className="text-sm sm:text-base md:text-lg font-semibold text-[#6BA5D6] mb-10 max-w-xl mx-auto leading-relaxed"
          style={{
            textShadow: `
              0 0 15px rgba(255, 255, 255, 0.7),
              0 0 30px rgba(255, 255, 255, 0.5)
            `,
          }}
        >
          Temukan ruang tenang untuk mengenali perasaanmu dan mulai langkah kecil menuju pulih
        </p>

        <button className="bg-[#6BA5D6] hover:bg-[#5A94C5] text-white font-semibold text-xs sm:text-sm px-6 sm:px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl mb-6">
          Lihat Lebih Lanjut
        </button>

        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[170px] sm:w-[240px] md:w-[300px] lg:w-[400px] mx-auto sm:top-[50%] -translate-y-10 sm:-translate-y-16"
        >
          <Image
            src="/character_hero.svg"
            alt="Person"
            width={460}
            height={460}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}