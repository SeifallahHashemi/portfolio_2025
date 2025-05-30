'use client';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react';
import Image from 'next/image';
import React, { useRef } from 'react';

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
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end 10%'],
  });
  const scrollVelocity = useVelocity(scrollYProgress);
  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ['45deg', '-45deg']
  );
  const skewX = useSpring(skewXRaw, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });
  const xRaw = useTransform(scrollYProgress, [0, 1], ['100%', '0']);
  const x = useSpring(xRaw);
  return (
    <div className={'flex flex-col gap-y-4'} ref={targetRef}>
      <motion.div
        style={{
          skewX,
          x,
        }}
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
