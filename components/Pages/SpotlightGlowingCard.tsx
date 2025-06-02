'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react';
import React, { useRef, useState } from 'react';

const SpotlightGlowingCard = () => {
  return (
    <div
      className={
        'w-full flex flex-wrap gap-10 justify-center items-center group'
      }
    >
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  // Motion Value
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Spring Value
  const springX = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 40 });
  // Motion Template
  const spotlightBg = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(59,130,246,0.22), transparent 70%)`;
  const glowBorder = useMotionTemplate`radial-gradient(300px circle at ${springX}px ${springY}px, rgba(59,130,246,0.40), transparent 100%)`;
  // Handler
  const MouseHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  return (
    <div
      ref={ref}
      className={
        'relative overflow-clip rounded-xl bg-slate-800 w-[300px] h-[380px] group'
      }
      onMouseMove={MouseHandler}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* bg glowing */}
      <motion.div
        className={
          'absolute z-30 pointer-events-none inset-0 transition-opacity duration-500'
        }
        style={{
          background: spotlightBg,
          opacity: isHovered ? 1 : 0,
        }}
      ></motion.div>
      {/* border glowing */}
      <motion.div
        className={
          'absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500'
        }
        style={{
          background: glowBorder,
        }}
      ></motion.div>
      {/* content */}
      <div
        className={
          'absolute inset-1 rounded-xl overflow-clip bg-slate-900 grid place-content-center z-20'
        }
      >
        hello world
      </div>
    </div>
  );
};

export default SpotlightGlowingCard;
