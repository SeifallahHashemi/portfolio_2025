'use client';

import { AnimationControls, motion } from 'motion/react';
import React from 'react';

const SandBar = ({
  controls,
  containerControls,
}: {
  controls: AnimationControls;
  containerControls: AnimationControls;
}) => {
  const variants = {
    initial: {
      top: '-100%',
      scale: 0.8,
    },
    animate: {
      top: '0%',
      scale: 1,
    },
  };
  const containerVariants = {
    initial: {
      scale: 0.8,
    },
    animate: {
      scale: 1,
    },
  };
  return (
    <div className={'absolute inset-0 flex justify-end'}>
      <motion.div
        variants={containerVariants}
        initial={'initial'}
        animate={containerControls}
        className={
          'sticky top-4 left-10 w-8 h-60 rounded-4xl bg-white/50 dark:bg-black/10 backdrop-blur-3xl border border-zinc-100 dark:border-zinc-900 overflow-clip'
        }
      >
        <motion.div
          variants={variants}
          initial={'initial'}
          animate={controls}
          transition={{
            duration: 2.5,
            ease: [0.36, 0, 0.64, 1],
            // repeat: Infinity,
          }}
          className={'absolute left-0 w-full h-full bg-rose-950'}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default SandBar;
