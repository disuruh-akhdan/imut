import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[400px] xl:min-h-[450px] 2xl:min-h-[470px]">
      {/* Image */}
      <div
        className="absolute inset-0 -ml-4 -z-10"
        style={{
          backgroundImage: "url('/footer.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute z-10"
        style={{ top: "30px", left: "30px" }}
      >
        <Image
          src="/kucing.svg"
          alt="Ilustrasi Kucing"
          width={130}
          height={130}
        />
      </div>

      {/* Responsive positioning */}
      <style jsx>{`
        @media (min-width: 640px) {
          footer > div:first-child {
            background-position: 30% center;
          }
        }
        @media (min-width: 768px) {
          footer > div:first-child {
            background-position: 50% center;
          }
        }
        @media (min-width: 1024px) {
          footer > div:first-child {
            background-position: 80% center;
          }
        }
        @media (min-width: 1280px) {
          footer > div:first-child {
            background-position: 90% center;
          }
        }
        @media (min-width: 1536px) {
          footer > div:first-child {
            background-position: 95% center;
          }
        }
        
        @media (min-width: 1537px) { 
          footer > div:first-child {
            background-size: 100% 100%; 
            background-position: center center; 
          }
      `}</style>

      {/* Content */}
      <div className="relative px-10 lg:px-12 w-full min-h-[400px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-24 lg:gap-8 w-full">
          {/* Left */}
          <div className="lg:col-span-2 -mr-4 xl:mt-8 2xl:mt-10">
            <div className="flex items-start gap-3 mb-4">
              {/* Logo Icon */}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                <div className="w-3 h-3 bg-black rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-white">Air Berotot</h3>
            </div>

            <p className="text-sm font-semibold text-white mb-6 max-w-xs leading-relaxed">
              Lorem Ipsum Dolor Sit Amet Consectetur. Eu Arcu Malesuada Sit
              Etiam Amet Vitae Nunc Eget. Urna Quis Sed Morbi Urna Eleifend
              Sollicitudin Porttitor Vivamus.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z" />
                </svg>
              </Link>

              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>

              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 xl:mt-8 2xl:mt-10">
              {/* Site Map*/}
              <div>
                <h4 className="text-base font-bold text-white mb-4">
                  Site Map
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      Homepage
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      Resources & News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portal"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      Portal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      Lorem Ipsum
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal*/}
              <div>
                <h4 className="text-base font-bold text-white mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      Privacy & Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      Terms of Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      Terms of Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
