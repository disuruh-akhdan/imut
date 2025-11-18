"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar.component";
import Footer from "@/components/footer.component";
import Image from "next/image";
import LoadingScreen from "@/app/_components/loading-screen";

import HeaderSection from "./header.component";
import TypesSection from "./session-types.component";
import CounselorSection from "./conselour.component";
import FaqSection from "./faq.component";

import type { SessionType } from "./session-types.component";

const counselors = [
  {
    id: 1,
    name: "Dr. Sarah Wijaya",
    specialization: "Trauma & PTSD",
    experience: "15 tahun",
    rating: 4.9,
    availability: "Senin - Jumat",
    image: "/counselor-1.svg",
  },
  {
    id: 2,
    name: "Psikolog Andi Rahman",
    specialization: "Krisis & Bencana",
    experience: "12 tahun",
    rating: 4.8,
    availability: "Selasa - Sabtu",
    image: "/counselor-2.svg",
  },
  {
    id: 3,
    name: "Dr. Maya Putri",
    specialization: "Pemulihan Pasca Trauma",
    experience: "10 tahun",
    rating: 4.9,
    availability: "Senin - Kamis",
    image: "/counselor-3.svg",
  },
];

const sessionTypes: SessionType[] = [
  {
    icon: "MessageCircle",
    title: "Chat Konseling",
    desc: "Konsultasi via chat real-time",
    price: "Mulai Rp 75.000",
    duration: "60 menit",
  },
  {
    icon: "Video",
    title: "Video Call",
    desc: "Sesi tatap muka virtual",
    price: "Mulai Rp 150.000",
    duration: "50 menit",
  },
  {
    icon: "Phone",
    title: "Konseling Telepon",
    desc: "Konsultasi via panggilan suara",
    price: "Mulai Rp 100.000",
    duration: "45 menit",
  },
];

const emergencySection = {
  title: "Butuh Bantuan Segera?",
  desc: "Jika Anda dalam situasi krisis atau darurat, silakan hubungi:",
  contacts: [
    { name: "Hotline Krisis 24/7", number: "119", available: "24 Jam" },
    { name: "Layanan Darurat", number: "112", available: "24 Jam" },
  ],
};

export default function KonsultasiPageMain() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      {/* Main Content */}
      <div
        className={`
          relative flex flex-col font-sans overflow-x-hidden min-h-screen pt-6
          transition-opacity duration-500
          ${isLoading ? "opacity-0" : "opacity-100"}
        `}
      >
        <div
          className="fixed inset-0 -z-20"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #C6E5F7 20%, #E5F2FF 58%, #C6E5F7 95%)",
          }}
        />

        <div
          className="
            pointer-events-none fixed inset-x-0 -top-44 h-100vh -translate-y-1/2 rounded-full
            bg-[radial-gradient(circle_at_center,#E8EBD6_0,#E8EBD6_40%,transparent_75%)]
            blur-3xl opacity-90 -z-10
          "
          aria-hidden="true"
        />

        {/* Clouds */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/cloud.svg"
            alt="Awan"
            width={600}
            height={200}
            className="absolute top-20 -left-40 w-[500px] lg:w-[600px] h-auto opacity-20"
          />
          <Image
            src="/cloud.svg"
            alt="Awan"
            width={700}
            height={250}
            className="absolute top-40 -right-60 w-[600px] lg:w-[700px] h-auto opacity-25"
          />
        </div>

        <main className="relative z-10 w-full">
          <Navbar />

          <HeaderSection emergencySection={emergencySection} />

          <TypesSection sessionTypes={sessionTypes} />

          <CounselorSection counselors={counselors} />

          <FaqSection />
        </main>

        <Footer />
      </div>
    </>
  );
}