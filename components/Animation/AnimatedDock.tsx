'use client';

import { cn } from '@/lib/utils';
import { MotionValue } from 'motion';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import { Link } from 'next-view-transitions';
import React, { useRef, useState } from 'react';

interface Items {
  title: string;
  href: string;
  icon: React.ReactNode;
}

type AnimatedDockProps = {
  items: Items[];
  className?: string;
};

type DockIcon = Items & {
  mouseX: MotionValue;
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
        'fixed bottom-4 left-1/2 -translate-x-1/2 hidden md:flex justify-center items-center cursor-pointer gap-x-2 rounded-full border border-zinc-200 dark:border-zinc-900 bg-white/10 dark:bg-black/10 backdrop-blur-2xl h-16 py-2 px-4',
        className
      )}
    >
      {items.map((item) => (
        <DockIcon key={item.title} mouseX={mouseXPosition} {...item} />
      ))}
    </motion.div>
  );
};

const DockIcon = ({ mouseX, icon, title, href }: DockIcon) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const distanceFromMouse = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthTransform = useTransform(
    distanceFromMouse,
    [-150, 0, 150],
    [40, 80, 40]
  );
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          'relative flex justify-center items-center aspect-square rounded-full text-black shadow-lg dark:text-white'
        )}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              className="absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md border border-zinc-200 bg-white/80 px-2 py-0.5 text-xs text-neutral-700 dark:border-zinc-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className={'w-10 aspect-square flex justify-center items-center'}>
          {icon}
        </div>
      </motion.div>
    </Link>
  );
};

export default AnimatedDock;
