'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react';
import React, { useRef } from 'react';

const SpotlightGlowingCard = () => {
  return (
    <div
      className={
        'w-full xl:max-w-6xl mx-auto flex flex-wrap gap-10 justify-center items-center group'
      }
    >
      <Card />
    </div>
  );
};

const Card = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  // Motion Value
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Sping Value
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
        'relative overflow-clip rounded-xl bg-slate-800 w-[350px] h-[380px] '
      }
      onMouseMove={MouseHandler}
    >
      {/* bg glowing */}
      <motion.div
        className={
          'absolute z-30 pointer-events-none inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500'
        }
      ></motion.div>
      {/* border glowing */}
      <motion.div
        className={
          'absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500'
        }
      ></motion.div>
      {/* content */}
      <div
        className={
          'absolute inset-px rounded-xl overflow-clip bg-slate-900 grid place-content-center'
        }
      >
        hello world
      </div>
    </div>
  );
};

export default SpotlightGlowingCard;
