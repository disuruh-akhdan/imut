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

      {/* Layer 2 */}
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
        </div>
      </motion.div>

      {/* Layer 3  */}
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
