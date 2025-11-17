"use client";

export default function BantuanSection() {
  return (
    <section className="w-full py-12 px-4 md:px-12 overflow-hidden relative min-h-screen flex flex-col items-center justify-end">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-start">
        <div className="hidden lg:block"></div>

        {/* Hotline Krisis */}
        <div className="flex justify-center">
          <div
            className="bg-white rounded-[20px] border-8 p-6 pb-8 h-auto w-full max-w-[320px] flex flex-col items-center justify-center gap-3"
            style={{
              boxShadow: "none",
              borderColor: "rgba(255, 255, 255, 0.48)",
            }}
          >
            
            <div className="w-24 h-24 bg-[#D2E6F7] rounded-full shrink-0"></div>

            <h3 className="text-[#2B6CB0] text-xl font-black text-center">
              Hotline Krisis 24/7
            </h3>

            <p className="text-black text-base font-medium leading-relaxed text-center">
              Hubungi kami kapan saja. <br />
              Kami ada untuk <br />
              mendengarkan.
            </p>

            <div className="h-2"></div>

            <button className="w-full py-2.5 bg-[#6BA5D6] hover:bg-[#5A94C5] text-white text-base font-semibold rounded-xl transition-colors shadow-md">
              Hubungi Kami
            </button>
          </div>
        </div>

        {/* Konsultasi */}
        <div className="flex justify-center">
          <div
            className="bg-white rounded-[20px] border-8 p-6 pb-8 h-auto w-full max-w-[320px] flex flex-col items-center justify-center gap-3"
            style={{
              boxShadow: "none",
              borderColor: "rgba(255, 255, 255, 0.48)",
            }}
          >
          
            <div className="w-24 h-24 bg-[#D2E6F7] rounded-full shrink-0"></div>

            <h3 className="text-[#2B6CB0] text-xl font-black text-center">
              Konsultasi
            </h3>

            <p className="text-black text-base font-medium leading-relaxed text-center">
              Temukan psikolog atau konselor <br />
              dalam Penanganan Trauma <br />
              Pasca Bencana (PTSD)
            </p>

            <div className="h-2"></div>

            <button className="w-full py-2.5 bg-[#6BA5D6] hover:bg-[#5A94C5] text-white text-base font-semibold rounded-xl transition-colors shadow-md">
              Jadwalkan Sesi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}