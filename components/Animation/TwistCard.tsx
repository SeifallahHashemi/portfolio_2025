'use client';

import LogoPop from '@/public/img/pop-1.png';
import TeamPop from '@/public/img/pop.png';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

const initVariants = {
  show: {
    rotateY: 0,
  },
  hide: {
    rotateY: 90,
  },
};

const cards = [
  {
    id: 1,
    src: TeamPop,
    variants: initVariants,
    initial: 'show',
    animate: 'hide',
    delay: 2,
  },
  {
    id: 2,
    src: LogoPop,
    variants: initVariants,
    initial: 'hide',
    animate: 'show',
    delay: 2.5,
  },
];

const TwistCard = () => {
  return (
    <div
      className={'w-screen h-screen flex justify-center items-center relative'}
    >
      {cards.map((card) => (
        <motion.div
          key={card.id}
          variants={card.variants}
          initial={card.initial}
          animate={card.animate}
          transition={{
            duration: 0.5,
            type: 'tween',
            ease: 'linear',
            delay: card.delay,
          }}
          className={
            'max-w-fit max-h-fit bg-zinc-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          }
        >
          <Image src={card.src} alt={'Team Pop'} width={300} height={300} />
        </motion.div>
      ))}
    </div>
  );
};

export default TwistCard;
