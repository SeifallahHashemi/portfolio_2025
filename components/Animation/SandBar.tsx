'use client';

import { AnimationControls, motion, useAnimate } from 'motion/react';
import React, { useEffect } from 'react';

const SandBar = ({
  controls,
  containerControls,
  activeInd,
}: {
  controls: AnimationControls;
  containerControls: AnimationControls;
  activeInd: number;
}) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {}, [activeInd]);
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
    <motion.div
      ref={scope}
      variants={containerVariants}
      initial={'initial'}
      animate={containerControls}
      transition={{
        duration: 2.5,
        ease: 'linear',
      }}
      className={
        'sticky top-4 left-4 w-4 h-12 rounded-4xl bg-white/50 dark:bg-black/10 backdrop-blur-3xl border border-zinc-100 dark:border-zinc-900 overflow-clip origin-top'
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
          'absolute left-0 w-full h-full bg-zinc-200 dark:bg-zinc-900 rounded-4xl'
        }
      ></motion.div>
    </motion.div>
  );
};

export default SandBar;
