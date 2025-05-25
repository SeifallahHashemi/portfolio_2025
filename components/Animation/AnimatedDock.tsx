'use client';

import { cn } from '@/lib/utils';
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
      className={cn(
        'fixed bottom-4 left-1/2 -translate-x-1/2 hidden md:flex gap-x-4 rounded-full border border-zinc-200 dark:border-zinc-900',
        className
      )}
    ></motion.div>
  );
};

export default AnimatedDock;
