"use client";

import { useState, useEffect, useRef } from "react";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    // Set initial position to center of screen
    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate shadow based on mouse position
  const calculateShadow = () => {
    // Base shadow yang selalu ada untuk glow effect
    const baseShadow = "drop-shadow(0px 20px 40px rgba(107, 165, 214, 0.5)) drop-shadow(0px 10px 20px rgba(74, 144, 200, 0.4)) drop-shadow(0px 0px 80px rgba(107, 165, 214, 0.3))";
    
    if (!characterRef.current || !isMounted) {
      return baseShadow;
    }
    
    const rect = characterRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate offset based on mouse position (inverted untuk parallax effect)
    const deltaX = (mousePosition.x - centerX) / 10;
    const deltaY = (mousePosition.y - centerY) / 10;
    
    // Dynamic shadows berdasarkan mouse position
    // Layer 1: Main shadow (paling gelap dan besar)
    const mainShadow = `drop-shadow(${-deltaX}px ${-deltaY + 20}px 50px rgba(107, 165, 214, 0.8))`;
    
    // Layer 2: Medium glow
    const mediumGlow = `drop-shadow(${-deltaX * 0.7}px ${-deltaY * 0.7 + 10}px 30px rgba(74, 144, 200, 0.6))`;
    
    // Layer 3: Soft outer glow (paling lebar)
    const outerGlow = `drop-shadow(${-deltaX * 0.4}px ${-deltaY * 0.4}px 80px rgba(107, 165, 214, 0.5))`;
    
    // Layer 4: Highlight shine
    const highlight = `drop-shadow(${-deltaX * 0.3}px ${-deltaY * 0.3}px 15px rgba(255, 255, 255, 0.4))`;
    
    return `${mainShadow} ${mediumGlow} ${outerGlow} ${highlight}`;
  };

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
          ref={characterRef}
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[170px] sm:w-[240px] md:w-[300px] lg:w-[400px] mx-auto sm:top-[50%] -translate-y-10 sm:-translate-y-16"
          style={{
            filter: calculateShadow(),
            transition: "filter 0.15s ease-out",
            willChange: "filter",
          }}
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