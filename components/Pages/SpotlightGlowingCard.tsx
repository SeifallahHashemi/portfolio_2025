'use client';

import { motion } from 'motion/react';
import React from 'react';

const SpotlightGlowingCard = () => {
  return (
    <div
      className={
        'w-full xl:max-w-6xl mx-auto flex flex-wrap gap-10 justify-center items-center group'
      }
    >
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <div
      className={
        'relative overflow-clip rounded-xl bg-slate-800 w-[350px] h-[380px] '
      }
    >
      {/* bg glowing */}
      <motion.div
        className={
          'absolute z-30 pointer-events-none inset-0 opacity-0 hover:opacity-100'
        }
      ></motion.div>
      {/* border glowing */}
      <motion.div
        className={
          'absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100'
        }
      ></motion.div>
      {/* content */}
      <div
        className={
          'absolute inset-px rounded-xl overflow-clip bg-slate-900 grid place-content-center'
        }
      >
        hello world
      </div>
    </div>
  );
};

export default SpotlightGlowingCard;
