'use client';

import React from "react";

const Navbar = () => {
  const [active, setActive] = React.useState<"beranda" | "konsultasi" | "informasi">(
    "beranda"
  );

  const items = [
    { id: "beranda", label: "Beranda" },
    { id: "konsultasi", label: "Konsultasi" },
    { id: "informasi", label: "Informasi" },
  ] as const;

  return (
    <div className="fixed inset-x-0 top-8 flex justify-center px-4 max-h-20">
      <nav
        className="
          flex w-7/12 max-w-7/12 items-center justify-center gap-x-16
          rounded-[23px]
          border-4 border-[#FFFFFF]
          bg-white/55
          px-12 py-7
          shadow-[0_18px_40px_rgba(0,0,0,0.08)]
          backdrop-blur-md
        "
      >
        {/* Placeholder logo*/}
        <div className="h-[34px] w-[100px] rounded-full bg-[#FFD5D5]" />

        <ul className="flex items-center justify-center gap-x-16 text-base">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setActive(item.id)}
                className={`
                  transition-colors
                  text-xl
                  px-4
                  ${
                    active === item.id
                      ? "font-bold text-black"
                      : "font-medium text-black/60"
                  }
                `}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Placeholder profile */}
        <div className="h-[34px] w-[34px] rounded-full bg-[#6CB4EE]" />
      </nav>
    </div>
  );
};

export default Navbar;
