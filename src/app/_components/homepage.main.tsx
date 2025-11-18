"use client";

import Footer from "@/components/footer.component";
import Navbar from "@/components/navbar.component";
import HeroSection from "../_components/hero.component";
import KenaliDiriSection from "./kenali-diri.component";
import BantuanSection from "./bantuan.component";
import PanduanResiliensiSection from "./panduan-resiliensi.component";
import MotionTreesBackground from "@/components/ui/motion-tree";
import LoadingScreen from "./loading-screen";
import { useEffect, useState } from "react";

export default function Home() {
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
      <div className="relative flex flex-col font-sans overflow-x-hidden min-h-screen">
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

        {/* Motion Trees Background - absolute positioning */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <MotionTreesBackground />
        </div>

        {/* Main content wrapper */}
        <main className="relative z-10 w-full" style={{ minHeight: "415vh" }}>
          <Navbar />

          {/* Hero Section - 980px = 90.7vh */}
          <div style={{ minHeight: "90.7vh" }}>
            <HeroSection />
          </div>

          {/* Kenali Diri Section - 966px = 89.4vh */}
          <div style={{ minHeight: "89.4vh" }}>
            <KenaliDiriSection />
          </div>

          {/* Bantuan Section - 915px = 84.7vh */}
          <div style={{ minHeight: "84.7vh" }}>
            <BantuanSection />
          </div>

          {/* Pusat Panduan & Resiliensi Section - 1633px = 151.2vh */}
          <div style={{ minHeight: "151.2vh" }}>
            <PanduanResiliensiSection />
          </div>
        </main>

        {/* Footer - always at bottom */}
        <footer className="relative z-20 w-full">
          <Footer />
        </footer>
      </div>
    </>
  );
}
