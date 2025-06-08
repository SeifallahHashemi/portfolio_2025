'use client';

import { sleep } from '@/lib/utils';
import LogoPop from '@/public/img/pop-1.png';
import MoviePop from '@/public/img/pop-2.png';
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
    src: LogoPop,
    alt: 'popularity football club image: barcelona',
  },
  {
    src: TeamPop,
    alt: 'popularity football club image: barcelona',
  },
  {
    src: MoviePop,
    alt: 'popularity football club image: barcelona',
  },
];

const TwistCard = () => {
  const [scope, animate] = useAnimate();
  const [activeCardInd, setActiveCardInd] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    const enterAnimation = async () => {
      if (activeCardInd % 2 === 0) {
        await animate(
          ':scope > div',
          { rotateY: 0 },
          { duration: 0.5, type: 'tween', ease: 'linear' }
        );
        await sleep(2000);
        await animate(
          ':scope > div',
          { rotateY: 90 },
          { duration: 0.5, type: 'tween', ease: 'linear' }
        );
        setActiveCardInd((prevState) => {
          if (prevState === cards.length - 1) {
            return 0;
          }
          return prevState + 1;
        });
      } else {
        await animate(
          ':scope > div',
          { rotateY: 0 },
          { duration: 0.5, type: 'tween', ease: 'linear' }
        );
        await sleep(2000);
        await animate(
          ':scope > div',
          { rotateY: 90 },
          { duration: 0.5, type: 'tween', ease: 'linear' }
        );
        setActiveCardInd((prevState) => {
          if (prevState === cards.length - 1) {
            return 0;
          }
          return prevState + 1;
        });
      }
    };
    const loop = async () => {
      while (isMounted) {
        await enterAnimation();
      }
    };
    loop();
    return () => {
      isMounted = false;
    };
  }, [animate, activeCardInd]);

  return (
    <div ref={scope} className={'w-screen h-96 flex justify-center relative'}>
      <motion.div
        initial={{ rotateY: 90 }}
        className={
          'max-w-fit max-h-fit bg-white/15 dark:bg-black/10 backdrop-blur-2xl rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
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
