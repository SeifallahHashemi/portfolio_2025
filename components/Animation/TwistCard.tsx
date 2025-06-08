'use client';

import LogoPop from '@/public/img/pop-1.png';
import TeamPop from '@/public/img/pop.png';
import { motion, useAnimate } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

interface TCard {
  id: number;
  frontImage: string | StaticImageData;
  backImage: string | StaticImageData;
  alt: string;
}

const cards: TCard[] = [
  {
    id: 1,
    frontImage: TeamPop,
    backImage: LogoPop,
    alt: 'popularity football club image: barcelona',
  },
  {
    id: 2,
    frontImage: LogoPop,
    backImage: TeamPop,
    alt: 'popularity football club image: barcelona',
  },
];

const TwistCard = () => {
  const [scope, animate] = useAnimate();
  const [activeCardInd, setActiveCardInd] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    const loop = async () => {
      while (isMounted) {
        await animate(
          'div:first-child',
          { rotateY: 90 },
          { duration: 0.5, type: 'tween', ease: 'linear' }
        );
      }
    };
    loop();
    return () => {
      isMounted = false;
    };
  }, [animate]);

  return (
    <div
      ref={scope}
      className={'w-screen h-screen flex justify-center items-center relative'}
    >
      <motion.div
        initial={{ rotateY: 0 }}
        className={
          'max-w-fit max-h-fit bg-zinc-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        }
      >
        <Image
          src={cards[activeCardInd].frontImage}
          alt={'Team Pop'}
          width={300}
          height={300}
        />
      </motion.div>
      <motion.div
        initial={{ rotateY: 0 }}
        className={
          'max-w-fit max-h-fit bg-zinc-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        }
      >
        <Image
          src={cards[activeCardInd].backImage}
          alt={'Team Pop'}
          width={300}
          height={300}
        />
      </motion.div>
    </div>
  );
};

export default TwistCard;
