"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MotionTreesBackground() {
  const { scrollYProgress } = useScroll();

  const layer1Y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const layer1Scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  const layer2Y = useTransform(scrollYProgress, [0.1, 0.4], [60, 0]);
  const layer2Scale = useTransform(scrollYProgress, [0.1, 0.4], [0.97, 1]);

  const layer3Y = useTransform(scrollYProgress, [0.35, 0.65], [80, 0]);
  const layer3Scale = useTransform(scrollYProgress, [0.35, 0.75], [0.96, 1]);

  return (
    <div
      className="relative w-full h-full pointer-events-none overflow-hidden"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Layer 1 */}
      <motion.div
        className="absolute z-0"
        style={{
          left: "-5%",
          right: "-5%",
          width: "110%",
          top: "150vh",
          y: layer1Y,
          scale: layer1Scale,
          transformOrigin: "center bottom",
        }}
      >
        <div className="relative w-full h-[840px]">
          <Image
            src="/layer-1.svg"
            alt=""
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </motion.div>

      {/* Layer 2 dengan WebM */}
      <motion.div
        className="absolute z-5"
        style={{
          left: "-3%",
          right: "-3%",
          width: "106%",
          top: "120vh",
          y: layer2Y,
          scale: layer2Scale,
          transformOrigin: "center bottom",
        }}
      >
        <div className="relative w-full h-[2420px]">
          <Image
            src="/layer-2.svg"
            alt=""
            fill
            className="object-cover object-bottom"
            priority
          />

          <motion.div
            className="absolute"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: "easeOut",
            }}
            style={{
              left: "12%",
              bottom: "180px",
            }}
          >
            <video
              className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[240px] h-auto"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
              }}
            >
              <source src="/akhdan-idle.webm" type="video/webm" />
              <source src="/akhdan-idle.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                         w-[100px] sm:w-[120px] md:w-[140px] h-[15px] sm:h-[20px] 
                         bg-black/10 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Layer 3 */}
      <motion.div
        className="absolute z-10"
        style={{
          left: "-2%",
          right: "-2%",
          width: "104%",
          top: "300vh",
          y: layer3Y,
          scale: layer3Scale,
          transformOrigin: "center bottom",
        }}
      >
        <div className="relative w-full h-[2200px]">
          <Image
            src="/layer-3.svg"
            alt=""
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
