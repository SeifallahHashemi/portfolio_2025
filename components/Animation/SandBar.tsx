'use client';

import { AnimationControls, motion } from 'motion/react';
import React from 'react';

const SandBar = ({ controls }: { controls: AnimationControls }) => {
  return (
    <div className={'absolute inset-0 flex justify-end'}>
      <motion.div
        className={
          'sticky top-4 left-10 w-8 h-60 rounded-4xl bg-white/50 dark:bg-black/10 backdrop-blur-3xl border border-zinc-100 dark:border-zinc-900 overflow-clip'
        }
      >
        <motion.div
          initial={{
            top: '-100%',
          }}
          animate={controls}
          transition={{
            duration: 2.5,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className={'absolute left-0 w-full h-full bg-rose-950'}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default SandBar;
