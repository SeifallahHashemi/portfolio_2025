'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

const upperMarquee = [
  '/img/01.svg',
  '/img/02.svg',
  '/img/03.svg',
  '/img/04.svg',
  '/img/05.svg',
  '/img/06.svg',
  '/img/07.svg',
  '/img/08.svg',
  '/img/09.svg',
];

const VelocityMarquee = () => {
  return (
    <div className={'flex flex-col gap-y-4'}>
      <motion.div
        initial={{ x: '-100%' }}
        // animate={{ x: '100%' }}
        // transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className={'flex shrink-0 gap-x-4'}
      >
        {upperMarquee.map((src, ind) => {
          return (
            <Image src={src} alt={'pic'} width={100} height={120} key={ind} />
          );
        })}
      </motion.div>
    </div>
  );
};

export default VelocityMarquee;
