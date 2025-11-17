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
    <section className="relative w-full max-h-full flex flex-col items-center justify-start overflow-hidden pt-32 pb-2">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Awan */}
        <Image
          src="/cloud.svg"
          alt="Awan"
          width={800}
          height={300}
          className="absolute -top-10 -left-40 w-[600px] lg:w-[800px] h-auto opacity-30"
        />
        <Image
          src="/cloud.svg"
          alt="Awan Latar Belakang"
          width={900}
          height={350}
          className="absolute -top-20 -right-60 w-[700px] lg:w-[900px] h-auto opacity-40"
        />
        <Image
          src="/cloud.svg"
          alt="Awan Latar Belakang"
          width={700}
          height={250}
          className="absolute top-[35vh] -left-52 w-[500px] lg:w-[700px] h-auto opacity-20"
        />
        <Image
          src="/cloud.svg"
          alt="Awan Latar Belakang"
          width={600}
          height={200}
          className="absolute top-[40vh] -right-48 w-[400px] lg:w-[600px] h-auto opacity-25"
        />
      </div>

      {/* Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
        transition={{ ...bubbleTransition, delay: 0 }}
        className="absolute top-[36%] left-[6%] lg:left-[10%] w-[260px] h-[110px] flex items-center justify-center z-10"
      >
        <div
          className="absolute inset-0 bg-[#FCFFF8]"
          style={{
            filter: "blur(10px)",
            borderRadius: "50% / 50%",
          }}
        />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-xs lg:text-base text-center px-3 leading-tight">
          Semangat ya buat <br /> kamu!!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
        transition={{ ...bubbleTransition, delay: 3 }}
        className="absolute bottom-[30%] left-[5%] lg:bottom-[35%] lg:left-[7%] w-[260px] h-[110px] flex items-center justify-center z-10"
      >
        <div
          className="absolute inset-0 bg-[#FCFFF8]"
          style={{
            filter: "blur(10px)",
            borderRadius: "50% / 50%",
          }}
        />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-xs lg:text-sm text-center px-4 leading-tight">
          Hai, apakah <br /> kamu baik-baik saja?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
        transition={{ ...bubbleTransition, delay: 6 }}
        className="absolute top-[36%] right-[6%] lg:right-[10%] w-[260px] h-[110px] flex items-center justify-center z-10"
      >
        <div
          className="absolute inset-0 bg-[#FCFFF8]"
          style={{
            filter: "blur(10px)",
            borderRadius: "50% / 50%",
          }}
        />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-xs lg:text-sm text-center px-4 leading-tight">
          Siapa yang menjadi <br /> sandaranmu saat ini?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95] }}
        transition={{ ...bubbleTransition, delay: 9 }}
        className="absolute bottom-[30%] right-[5%] lg:bottom-[35%] lg:right-[7%] w-[260px] h-[110px] flex items-center justify-center z-10"
      >
        <div
          className="absolute inset-0 bg-[#FCFFF8]"
          style={{
            filter: "blur(10px)",
            borderRadius: "50% / 50%",
          }}
        />
        <p className="relative z-10 text-[#3B7CA8] font-semibold text-xs lg:text-sm text-center px-4 leading-tight">
          Setiap langkah kecilmu <br /> itu berarti!
        </p>
      </motion.div>

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-8">
        <h1
          className="text-5xl md:text-5xl font-bold text-[#4A90C8] mb-5 flex flex-wrap justify-center items-center"
          style={{
            textShadow: `
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 255, 255, 0.6),
              0 0 60px rgba(255, 255, 255, 0.4)
            `,
          }}
        >
          <span className="whitespace-nowrap">
            Langkah pertama menuju&nbsp;
          </span>

          <RotatingText
            texts={["pemulihan.", "kekuatan.", "harapan.", "kedamaian."]}
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.04}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            rotationInterval={3000}
            mainClassName="bg-[#92D79E] text-[#4A90C8] px-3 py-1 rounded-lg"
            splitLevelClassName="overflow-hidden pb-1"
          />
        </h1>

        <p
          className="text-base md:text-lg font-semibold text-[#6BA5D6] mb-10 max-w-2xl mx-auto"
          style={{
            textShadow: `
              0 0 15px rgba(255, 255, 255, 0.7),
              0 0 30px rgba(255, 255, 255, 0.5)
            `,
          }}
        >
          Temukan ruang tenang untuk mengenali perasaanmu dan mulai langkah
          kecil menuju pulih
        </p>

        <button className="bg-[#6BA5D6] hover:bg-[#5A94C5] text-white font-semibold text-sm px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl mb-6">
          Lihat Lebih Lanjut
        </button>

        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[200px] sm:w-[280px] md:w-[360px] lg:w-[400px] mx-auto -translate-y-20"
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
