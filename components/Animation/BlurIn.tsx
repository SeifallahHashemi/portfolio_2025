'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React from 'react';

type BlurInProps = {
  text: string;
  className?: string;
};

const BlurIn = ({ text, className }: BlurInProps) => {
  const variants = {
    initial: { filter: 'blur(0.5rem)', opacity: 0, translateY: '1rem' },
    animate: { filter: 'blur(0)', opacity: 1, translateY: '0' },
  };

  return (
    <motion.p
      initial={'initial'}
      animate={'animate'}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={cn(
        'font-iranYWR drop-shadow-sm tracking-[-0.02em] md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]',
        className
      )}
    >
      {text}
    </motion.p>
  );
};

export default BlurIn;
