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
  '/img/CSS.svg',
  '/img/nextjs.svg',
  '/img/React.svg',
  '/img/redux.svg',
  '/img/tailwindCSS.svg',
  '/img/typescript.svg',
];

const VelocityMarquee = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end 0%'],
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
  const xRaw = useTransform(scrollYProgress, [0, 1], ['50%', '-50%']);
  const x = useSpring(xRaw);
  return (
    <div className={'flex flex-col gap-y-4 w-full'} ref={targetRef}>
      <motion.div
        style={{
          skewX,
          x,
        }}
        className={'w-full flex shrink-0 justify-between items-center'}
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
