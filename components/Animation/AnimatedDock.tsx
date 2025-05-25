'use client';

import { motion, useMotionValue } from 'motion/react';
import React from 'react';

interface Items {
  title: string;
  href: string;
  icon: React.ReactNode;
}

type AnimatedDockProps = {
  items: Items[];
  className?: string;
};
const AnimatedDock = ({ items, className }: AnimatedDockProps) => {
  const mouseXPosition = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(event) => {
        mouseXPosition.set(event.pageX);
      }}
      onMouseLeave={() => {
        mouseXPosition.set(Infinity);
      }}
    ></motion.div>
  );
};

export default AnimatedDock;
