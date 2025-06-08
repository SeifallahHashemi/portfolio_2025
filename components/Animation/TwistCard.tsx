'use client';

import SandBar from '@/components/Animation/SandBar';
import { sleep } from '@/lib/utils';
import LogoPop from '@/public/img/pop-1.png';
import MoviePop from '@/public/img/pop-2.png';
import TeamPop from '@/public/img/pop.png';
import { motion, useAnimate, useAnimation } from 'motion/react';
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
  const controls = useAnimation();
  const containerControls = useAnimation();

  useEffect(() => {
    let isMounted = true;
    const enterAnimation = async () => {
      if (activeCardInd % 2 === 0) {
        controls.start('animate');
        containerControls.start('animate');
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
        controls.set('initial');
        containerControls.set('initial');
        setActiveCardInd((prevState) => {
          if (prevState === cards.length - 1) {
            return 0;
          }
          return prevState + 1;
        });
      } else {
        controls.start('animate');
        containerControls.start('animate');
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
        controls.set('initial');
        containerControls.set('initial');
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
  }, [animate, activeCardInd, controls, containerControls]);

  return (
    <>
      <div ref={scope} className={'w-screen h-96 flex justify-center relative'}>
        <motion.div
          initial={{ rotateY: 90 }}
          className={
            'max-w-fit max-h-fit bg-white/30 dark:bg-slate-950/10 backdrop-blur-xl border border-zinc-200 dark:border-zinc-900 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-500'
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
      <SandBar controls={controls} containerControls={containerControls} />
    </>
  );
};

export default TwistCard;
