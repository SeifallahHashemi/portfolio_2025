'use client';

import { AnimationControls, motion, useAnimate } from 'motion/react';
import React, { useEffect, useRef } from 'react';

const SandBar = ({
  containerControls,
  activeInd,
}: {
  containerControls: AnimationControls;
  activeInd: number;
}) => {
  const [scope, animate] = useAnimate();
  const prevIndex = useRef(0);
  useEffect(() => {
    const enterAnimation = async () => {
      await animate(`:scope > div:nth-child(${prevIndex.current + 1})`, {
        top: '-100%',
      });
      await animate(`:scope > div:nth-child(${activeInd + 1})`, {
        top: '0%',
      });
      prevIndex.current = activeInd;
    };
    enterAnimation();
  }, [activeInd]);
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
    <div
      ref={scope}
      className={
        'sticky top-4 left-4 w-4 h-12 rounded-4xl bg-white/50 dark:bg-black/10 backdrop-blur-3xl border border-zinc-100 dark:border-zinc-900 overflow-clip origin-top'
      }
    >
      <div
        style={{
          top: '-100%',
        }}
        className={
          'absolute left-0 w-full h-full bg-zinc-200 dark:bg-zinc-900 rounded-4xl'
        }
      ></div>
    </div>
  );
};

export default SandBar;
