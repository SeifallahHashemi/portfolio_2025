'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react';
import React, { useRef, useState } from 'react';

const SpotlightGlowingCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 40 });

  // اصلاح با useMotionTemplate
  const spotlightBg = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(59,130,246,0.22), transparent 70%)`;
  const glowBorder = useMotionTemplate`radial-gradient(300px circle at ${springX}px ${springY}px, rgba(59,130,246,0.40), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl shadow-xl bg-neutral-900 border border-neutral-700 transition
        
        ${className || ''}`}
      style={{
        scale: isHovered ? 1.025 : 1,
        transition: 'scale 0.2s cubic-bezier(.4,0,.2,1)',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing spotlight effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s',
          background: spotlightBg,
        }}
      />
      {/* Glowing border */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 rounded-xl"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s',
          background: glowBorder,
          filter: 'blur(12px)',
        }}
      />
      <div className="relative z-30 p-6 text-white">{children}</div>
    </motion.div>
  );
};

export default SpotlightGlowingCard;
