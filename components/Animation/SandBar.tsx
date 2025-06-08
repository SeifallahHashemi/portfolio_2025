'use client';

import { motion } from 'motion/react';
import React from 'react';

const SandBar = () => {
  return (
    <div className={'absolute inset-0 flex justify-end'}>
      <motion.div
        className={
          'sticky top-4 left-10 w-8 h-60 rounded-4xl bg-white/50 dark:bg-black/10 backdrop-blur-3xl border border-zinc-100 dark:border-zinc-900 overflow-clip'
        }
      >
        <motion.div
          className={'absolute top-0 left-0 w-full h-full bg-violet-950'}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default SandBar;
