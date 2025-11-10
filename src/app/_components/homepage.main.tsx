// app/page.tsx or homepage.main.tsx
'use client';

import Footer from "@/components/footer.component";
import Navbar from "@/components/navbar.component";
import HeroSection from "../_components/hero.component";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans">
      {/* Background Gradient */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #C6E5F7 20%, #E5F2FF 58%, #C6E5F7 95%)",
        }}
      />
      
      {/* Radial Gradient Effect */}
      <div
        className="
          pointer-events-none
          fixed
          inset-x-0
          -top-44
          h-[532px]
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle_at_center,#E8EBD6_0,#E8EBD6_40%,transparent_75%)]
          blur-3xl
          opacity-90
          -z-10
        "
        aria-hidden="true"
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Other sections will go here */}
      
      <Footer />
    </div>
  );
}