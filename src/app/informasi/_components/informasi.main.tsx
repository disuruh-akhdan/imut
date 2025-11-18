"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar.component";
import Footer from "@/components/footer.component";
import LoadingScreen from "@/app/_components/loading-screen";
import HeaderSection from "./header-component";
import QuickStatsSection from "./quick-stats.component";
import CategoryFilterSection from "./category.component";
import StoriesGridSection from "./stories.component";
import VideoSection from "./video.component";
import ResourceGuidesSection from "./guide.section";
import CtaSection from "./cta.component";
import StoryDetailModal from "./story-detail.component";

export type Story = {
  id: number;
  title: string;
  author: string;
  location: string;
  category: string;
  date: string;
  excerpt: string;
  fullStory: string;
  image: string;
  readTime: string;
  likes: number;
  tags: string[];
};

export type Category = {
  id: string;
  label: string;
  count: number;
};

export type Guide = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link: string;
};

const categories: Category[] = [
  { id: "semua", label: "Semua Kisah", count: 45 },
  { id: "gempa", label: "Gempa Bumi", count: 12 },
  { id: "banjir", label: "Banjir", count: 18 },
  { id: "longsor", label: "Tanah Longsor", count: 8 },
  { id: "tsunami", label: "Tsunami", count: 7 }
];

const inspirationalStories: Story[] = [
  {
    id: 1,
    title: "Bangkit dari Reruntuhan",
    author: "Budi Santoso",
    location: "Cianjur, Jawa Barat",
    category: "gempa",
    date: "November 2022",
    excerpt: "Kehilangan rumah dalam gempa Cianjur, kini membantu sesama survivor membangun kembali kehidupan...",
    fullStory: "Saat gempa 5.6 SR mengguncang Cianjur, saya kehilangan segalanya. Rumah rata dengan tanah, tapi semangat tetap berdiri. Dengan dukungan komunitas, kami bangkit bersama. Kini saya koordinator relawan pemulihan trauma untuk 200+ keluarga.",
    image: "/story-1.jpg",
    readTime: "5 menit",
    likes: 234,
    tags: ["Gempa", "Resiliensi", "Komunitas"]
  },
  {
    id: 2,
    title: "Air Mata Menjadi Senyuman",
    author: "Siti Nurhasanah",
    location: "Demak, Jawa Tengah",
    category: "banjir",
    date: "Januari 2023",
    excerpt: "Dari trauma banjir bandang hingga menjadi fasilitator pemulihan psikososial...",
    fullStory: "Banjir setinggi 2 meter menenggelamkan harapan kami. Tapi di pengungsian, saya menemukan kekuatan dari sesama penyintas. Program konseling mengubah trauma menjadi tekad. Sekarang saya membantu 50+ ibu-ibu pulih dari trauma.",
    image: "/story-2.jpg",
    readTime: "7 menit",
    likes: 189,
    tags: ["Banjir", "Perempuan Tangguh", "Psikososial"]
  },
  {
    id: 3,
    title: "Cahaya di Balik Longsor",
    author: "Ahmad Fauzi",
    location: "Natuna, Kepulauan Riau",
    category: "longsor",
    date: "Maret 2023",
    excerpt: "Longsor merenggut keluarga, tapi tidak merenggut harapan untuk menolong sesama...",
    fullStory: "Tanah longsor mengubur masa lalu, tapi tidak mengubur masa depan. Dengan terapi dan dukungan konselor, saya belajar memaafkan dan melanjutkan. Kini aktif di tim SAR lokal, menyelamatkan nyawa adalah terapi terbaik saya.",
    image: "/story-3.jpg",
    readTime: "6 menit",
    likes: 156,
    tags: ["Longsor", "SAR", "Pemulihan"]
  },
  {
    id: 4,
    title: "Ombak Takkan Memisahkan",
    author: "Ratna Dewi",
    location: "Pandeglang, Banten",
    category: "tsunami",
    date: "Desember 2018",
    excerpt: "5 tahun pasca tsunami Selat Sunda, trauma berubah menjadi kekuatan membantu...",
    fullStory: "Tsunami Selat Sunda merenggut banyak hal, tapi tidak harapan. Terapi EMDR dan dukungan psikolog mengubah mimpi buruk menjadi misi. Kini saya fasilitator di 3 desa, membantu 100+ penyintas menemukan kedamaian.",
    image: "/story-4.jpg",
    readTime: "8 menit",
    likes: 312,
    tags: ["Tsunami", "EMDR", "Fasilitator"]
  },
  {
    id: 5,
    title: "Merajut Asa dari Puing",
    author: "Wahyu Pratama",
    location: "Mamuju, Sulawesi Barat",
    category: "gempa",
    date: "Januari 2021",
    excerpt: "Gempa Mamuju mengajarkan arti kehilangan dan kekuatan berbagi...",
    fullStory: "Gempa 6.2 SR meruntuhkan fisik, tapi tidak mental. Program trauma healing mengajarkan saya bahwa berbagi cerita adalah obat. Sekarang saya mentor untuk 30+ remaja penyintas, bersama membangun Mamuju lebih baik.",
    image: "/story-5.jpg",
    readTime: "6 menit",
    likes: 198,
    tags: ["Gempa", "Remaja", "Mentoring"]
  },
  {
    id: 6,
    title: "Banjir Tak Tenggelamkan Mimpi",
    author: "Lestari",
    location: "Jakarta Timur",
    category: "banjir",
    date: "Februari 2023",
    excerpt: "Dari korban banjir tahunan menjadi pelopor kampung tangguh bencana...",
    fullStory: "Banjir tahunan bukan lagi mimpi buruk. Dengan pelatihan mitigasi dan konseling kelompok, kami warga RW 04 kini siap siaga. Trauma berubah jadi pembelajaran, kini kampung kami contoh ketangguhan menghadapi banjir.",
    image: "/story-6.jpg",
    readTime: "5 menit",
    likes: 145,
    tags: ["Banjir", "Mitigasi", "Komunitas"]
  }
];


export default function InformasiPage() {
  const [isLoading, setIsLoading] = useState(true);
  
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string>("semua");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const filteredStories = currentCategory === "semua" 
    ? inspirationalStories 
    : inspirationalStories.filter(story => story.category === currentCategory);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      {/* Main Content */}
      <div
        className={`
          relative flex flex-col font-sans overflow-x-hidden min-h-screen
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

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/cloud.svg"
            alt="Awan"
            width={700}
            height={250}
            className="absolute top-32 -left-52 w-[600px] lg:w-[700px] h-auto opacity-20"
          />
          <Image
            src="/cloud.svg"
            alt="Awan"
            width={800}
            height={300}
            className="absolute top-64 -right-48 w-[700px] lg:w-[800px] h-auto opacity-25"
          />
        </div>

        <main className="relative z-10 w-full">
          <Navbar />
          
          <HeaderSection />

          <QuickStatsSection />

          <CategoryFilterSection
            categories={categories}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />

          <StoriesGridSection
            stories={filteredStories}
            setSelectedStory={setSelectedStory}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

          <VideoSection />
          
          <ResourceGuidesSection />

          <CtaSection />
          
        </main>

        {/* Modal tetap di sini karena dikontrol oleh state 'page.tsx' */}
        <StoryDetailModal
          selectedStoryId={selectedStory}
          setSelectedStory={setSelectedStory}
          stories={inspirationalStories}
        />

        <Footer />
      </div>
    </>
  );
}