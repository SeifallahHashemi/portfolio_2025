'use client';

import { sleep } from '@/lib/utils';
import LogoPop from '@/public/img/pop-1.png';
import TeamPop from '@/public/img/pop.png';
import { motion, useAnimate } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

interface TCard {
  src: string | StaticImageData;
  alt: string;
}

const cards: TCard[] = [
  {
    src: TeamPop,
    alt: 'popularity football club image: barcelona',
  },
  {
    src: LogoPop,
    alt: 'popularity football club image: barcelona',
  },
];

const TwistCard = () => {
  const [scope, animate] = useAnimate();
  const [activeCardInd, setActiveCardInd] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    const enterAnimation = async () => {
      if (activeCardInd === 0) {
        await animate(
          ':scope > div:first-of-type',
          { rotateY: activeCardInd % 2 === 0 ? 0 : 90 },
          { duration: 0.5, type: 'tween', ease: 'linear' }
        );
        await sleep(2000);
        await animate(
          ':scope > div:first-of-type',
          { rotateY: activeCardInd % 2 === 0 ? 90 : 0 },
          { duration: 0.5, type: 'tween', ease: 'linear' }
        );
      }
    };
    const exitAnimation = async () => {
      await animate(
        ':scope > div:nth-of-type(2)',
        { rotateY: activeCardInd % 2 === 0 ? 0 : 90 },
        { duration: 0.5, type: 'tween', ease: 'linear' }
      );
      await sleep(2000);
      await animate(
        ':scope > div:nth-of-type(2)',
        { rotateY: activeCardInd % 2 === 0 ? 90 : 0 },
        { duration: 0.5, type: 'tween', ease: 'linear' }
      );
    };
    const loop = async () => {
      while (isMounted) {
        await enterAnimation();
        await exitAnimation();
      }
    };
    loop();
    return () => {
      isMounted = false;
    };
  }, [animate, activeCardInd]);

  return (
    <div
      ref={scope}
      className={'w-screen h-screen flex justify-center items-center relative'}
    >
      <motion.div
        initial={{ rotateY: 90 }}
        className={
          'max-w-fit max-h-fit bg-zinc-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        }
      >
        <Image
          src={cards[activeCardInd].src}
          alt={'Team Pop'}
          width={300}
          height={300}
        />
      </motion.div>
      <motion.div
        initial={{ rotateY: 90 }}
        className={
          'max-w-fit max-h-fit bg-zinc-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        }
      >
        <Image
          src={cards[activeCardInd].src}
          alt={'Team Pop'}
          width={300}
          height={300}
        />
      </motion.div>
    </div>
  );
};

export default TwistCard;
