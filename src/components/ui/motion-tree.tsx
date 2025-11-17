'use client';

import Image from 'next/image';

export default function MotionTreesBackground() {
  
  return (
    <div 
      className="relative w-full h-full pointer-events-none"
    >
      {/* Layer 1 - Background paling belakang */}
      <div
        className="absolute inset-x-0 z-0"
        style={{ top: '150vh' }}
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
      </div>
      
      {/* Layer 2 - Middle layer */}
      <div
        className="absolute inset-x-0 z-5"
        style={{ top: '120vh' }}
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
      </div>
      
      {/* Layer 3 - Foreground paling depan */}
      <div
        className="absolute inset-x-0 z-10"
        style={{ top: '300vh' }}
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
      </div>
    </div>
  );
}