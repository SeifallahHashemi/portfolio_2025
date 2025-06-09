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
    },
    animate: {
      top: '0%',
    },
  };
  const containerVariants = {
    initial: {
      scaleY: 0.95,
    },
    animate: {
      scaleY: 1,
    },
  };
  return (
    <div className={'absolute inset-0 flex justify-end'}>
      <motion.div
        variants={containerVariants}
        initial={'initial'}
        animate={containerControls}
        transition={{
          duration: 2.5,
          ease: [0.36, 0, 0.64, 1],
        }}
        className={
          'sticky top-4 left-10 w-6 h-60 rounded-4xl bg-white/50 dark:bg-black/10 backdrop-blur-3xl border border-zinc-100 dark:border-zinc-900 overflow-clip origin-top'
        }
      >
        <motion.div
          variants={variants}
          initial={'initial'}
          animate={controls}
          transition={{
            duration: 2.5,
            ease: [0.36, 0, 0.64, 1],
          }}
          className={
            'absolute left-0 w-full h-full bg-zinc-200 dark:bg-gray-300 rounded-4xl'
          }
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default SandBar;
