'use client';

import React from "react";

const Navbar = () => {
  const [active, setActive] = React.useState<"beranda" | "konsultasi" | "informasi">(
    "beranda"
  );
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const items = [
    { id: "beranda", label: "Beranda" },
    { id: "konsultasi", label: "Konsultasi" },
    { id: "informasi", label: "Informasi" },
  ] as const;

  const handleItemClick = (id: typeof items[number]['id']) => {
    setActive(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed inset-x-0 top-8 flex justify-center px-4 max-h-20 z-50">
      <nav
        className="
          flex w-full lg:w-7/12 lg:max-w-7/12 items-center justify-between lg:justify-center lg:gap-x-16
          rounded-[23px]
          border-4 border-[#FFFFFF]
          bg-white/55
          px-6 lg:px-12 py-5 lg:py-7
          shadow-[0_18px_40px_rgba(0,0,0,0.08)]
          backdrop-blur-md
        "
      >
        {/* Placeholder logo*/}
        <div className="h-[34px] w-[100px] rounded-full bg-[#FFD5D5]" />

        <ul className="hidden lg:flex items-center justify-center gap-x-16 text-base">
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

        <div className="flex items-center gap-4">
          {/* Placeholder profile */}
          <div className="h-[34px] w-[34px] rounded-full bg-[#6CB4EE]" />
          
          {/* Hamburger*/}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-4 mx-4 rounded-[23px] border-4 border-[#FFFFFF] bg-white/95 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
            <ul className="py-2">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleItemClick(item.id)}
                    className={`
                      w-full text-left px-6 py-4 transition-colors text-lg
                      ${
                        active === item.id
                          ? "font-bold text-black bg-white/50"
                          : "font-medium text-black/60"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;