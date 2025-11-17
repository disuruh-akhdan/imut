"use client";

import { useState } from "react";
import Image from "next/image";
import TiltedCard from "@/components/ui/tilted-card.jsx";
import { X } from "lucide-react";

interface ContentItem {
  id: number;
  src: string;
  label: string;
  caption: string;
  title: string;
  gejala: string[];
  langkah: string;
  buttonText: string;
}

export default function KenaliDiriSection() {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);

  const items: ContentItem[] = [
    {
      id: 1,
      src: "/kenali-1.svg",
      label: "Tumbuh dan Bangkit",
      caption: "Proses penyembuhan diri",
      title: "#1 Tumbuh dan Bangkit",
      gejala: [
        "Mulai kembali beraktivitas",
        "Fokus membantu sekitar",
        "Merasakan rasa syukur kecil",
        "Siap melanjutkan hidup.",
      ],
      langkah: "Anda siap membangun resiliensi dan membagikan kisah.",
      buttonText: "Baca Kisah Harapan",
    },
    {
      id: 2,
      src: "/kenali-2.svg",
      label: "Luka yang Terabaikan",
      caption: "Jangan biarkan luka batin",
      title: "#2 Luka yang Terabaikan",
      gejala: [
        "Sulit tidur/mimpi buruk",
        "Menyendiri",
        "Sering panik",
        "Menghindari tempat/orang yang mengingatkan kejadian.",
      ],
      langkah: "Anda perlu validasi emosi dan dukungan mendesak.",
      buttonText: "Baca Kisah Harapan",
    },
    {
      id: 3,
      src: "/kenali-3.svg",
      label: "Membutuhkan Dukungan",
      caption: "Cari bantuan profesional",
      title: "#3 Membutuhkan Dukungan",
      gejala: [
        "Fluktuasi emosi drastis",
        "Merasa bersalah atas kejadian",
        "Sulit fokus",
        "Butuh teman bicara rutin.",
      ],
      langkah:
        "Anda perlu struktur rutinitas baru dan teknik menenangkan diri.",
      buttonText: "Lihat Modul Self-Care",
    },
  ];

  return (
    <>
      <section className="w-full py-20 px-4 overflow-hidden relative min-h-screen flex flex-col items-center justify-start">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-2.5">
          <h3 className="text-[#4A90C8] text-4xl md:text-3xl font-medium">
            Kenali Dirimu
          </h3>
          <h2 className="text-[#3B7CA8] text-5xl md:text-4xl font-black">
            Dimanakah Posisi Emosimu?
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-12 md:gap-20">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-105"
            >
              {/* PERBAIKAN DI SINI: Hapus 'pointer-events-none' */}
              <div className="relative w-56 h-56 md:w-64 md:h-64">
                <TiltedCard
                  imageSrc={item.src}
                  altText={item.label}
                  captionText={item.caption}
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={15}
                  scaleOnHover={1.0}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                  isCircle={true}
                />
              </div>

              <p className="mt-8 text-center font-medium text-[#333333] text-lg leading-snug whitespace-pre-line transition-colors duration-300 group-hover:font-bold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Popup */}
      {selectedItem && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <div
            className="relative w-full max-w-4xl rounded-3xl p-6 md:p-10 shadow-2xl border-8 border-[#ffffff7a] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/kenali-card.svg')",
            }}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white bg-white/20 hover:bg-white/30 rounded-full border-2 border-white transition-colors"
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            {/* Judul Modal */}
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
              {selectedItem.title}
            </h2>

            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
              {/* Teks Modal */}
              <div className="flex-1 w-full space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="text-[#7A512F] text-xl font-bold mb-3">
                    Gejala umum
                  </h4>
                  <ul className="space-y-1">
                    {selectedItem.gejala.map((g, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-800 font-medium leading-relaxed"
                        style={{ lineHeight: "15px" }}
                      >
                        <span className="mr-2">•</span>
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Langkah Cepat */}
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h4 className="text-[#6D5446] text-xl font-bold mb-2">
                    Langkah Cepat
                  </h4>
                  <p
                    className="text-gray-800 font-medium leading-relaxed"
                    style={{ lineHeight: "15px" }}
                  >
                    {selectedItem.langkah}
                  </p>
                </div>

                {/* Tombol Action  */}
                <button className="w-full md:hidden bg-[#6CA5D6] hover:bg-[#5b90bf] text-white font-bold py-3 rounded-lg transition-colors shadow-lg mt-4">
                  {selectedItem.buttonText}
                </button>
              </div>

              {/* Gambar */}
              <div className="flex-1 flex flex-col items-center justify-center relative">
                <div
                  className={`w-70 h-70 rounded-full flex items-center justify-center`}
                >
                  <div className="relative w-120 h-120">
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tombol Action */}
            <div className=" hidden md:block w-full max-w-[48%]">
              <button className="w-full bg-[#6CA5D6] hover:bg-[#5b90bf] text-white font-bold py-3 rounded-lg transition-colors shadow-lg">
                {selectedItem.buttonText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
