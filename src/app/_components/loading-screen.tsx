"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({
  onLoadingComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete?.();
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-9999 flex flex-col items-center justify-center
        transition-opacity duration-500
        ${progress >= 100 ? "opacity-0" : "opacity-100"}
      `}
      style={{
        backgroundImage:
          "linear-gradient(180deg, #C6E5F7 20%, #E5F2FF 58%, #C6E5F7 95%)",
      }}
    >
      <div
        className="
          pointer-events-none absolute inset-x-0 top-1/2 h-screen -translate-y-1/2 rounded-full
          bg-[radial-gradient(circle_at_center,#E8EBD6_0,#E8EBD6_40%,transparent_75%)]
          blur-3xl opacity-50
        "
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center space-y-3">
          <div className="animate-pulse">
            <Image
              src="/logo_reka.svg"
              alt="Reka Logo"
              width={180}
              height={180}
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44"
              priority
            />
          </div>
        </div>

        <div className="w-64 sm:w-80 lg:w-96 space-y-3">
          <div className="relative h-3 bg-white/40 rounded-full overflow-hidden shadow-inner backdrop-blur-sm">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#5BA8D0] to-[#3D8CB8] rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>

          <div className="text-center">
            <span className="text-lg font-bold text-[#2C5F7C] tabular-nums">
              {Math.floor(Math.min(progress, 100))}%
            </span>
          </div>
        </div>

        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-[#5BA8D0] rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 bg-[#5BA8D0] rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 bg-[#5BA8D0] rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
