'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-60 pb-20">
      {/* Clouds with Parallax - Top Left */}
      <div 
        className="absolute top-32 left-10 w-32 h-24 opacity-80"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          src="/cloud.png"
          alt="Cloud"
          fill
          className="object-contain"
        />
      </div>

      {/* Clouds with Parallax - Top Right */}
      <div 
        className="absolute top-20 right-20 w-40 h-28 opacity-80"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        <Image
          src="/cloud.png"
          alt="Cloud"
          fill
          className="object-contain"
        />
      </div>

      {/* Clouds with Parallax - Bottom Left */}
      <div 
        className="absolute bottom-40 left-5 w-36 h-26 opacity-80"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <Image
          src="/cloud.png"
          alt="Cloud"
          fill
          className="object-contain"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <h1 
          className="text-6xl md:text-5xl font-bold text-[#4A90C8] mb-6"
          style={{
            textShadow: `
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 255, 255, 0.6),
              0 0 60px rgba(255, 255, 255, 0.4)
            `
          }}
        >
          Pulihkan Diri, Kuatkan Jiwa
        </h1>

        <p 
          className="text-xl font-semibold md:text-2xl text-[#6BA5D6] mb-12 max-w-2xl mx-auto"
          style={{
            textShadow: `
              0 0 15px rgba(255, 255, 255, 0.7),
              0 0 30px rgba(255, 255, 255, 0.5)
            `
          }}
        >
          Temukan ruang tenang untuk mengenali perasaanmu
          dan mulai langkah kecil menuju pulih
        </p>

        <button className="bg-[#6BA5D6] hover:bg-[#5A94C5] text-white font-semibold text-base px-10 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl">
          Lihat Lebih Lanjut
        </button>

        <div 
          className="relative w-64 h-96 md:w-80 md:h-[480px] mx-auto mt-16"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <Image
            src="/orang.png"
            alt="Person"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}