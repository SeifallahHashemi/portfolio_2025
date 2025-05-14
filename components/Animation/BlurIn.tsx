'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React from 'react';

type BlurInProps = {
  text: string;
  className?: string;
};

const BlurIn = ({ text, className }: BlurInProps) => {
  return <motion.p className={cn('', className)}>{text}</motion.p>;
};

export default BlurIn;
