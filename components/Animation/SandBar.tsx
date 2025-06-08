'use client';

import { motion } from 'motion/react';
import React from 'react';

const SandBar = () => {
  return (
    <div className={'sticky top-10 left-20 mb-20 w-fit'}>
      <motion.div
        className={
          'relative w-2 h-32 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-2xl overflow-clip'
        }
      >
        <motion.div
          className={'absolute top-0 left-0 w-full h-full bg-rose-950'}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default SandBar;
