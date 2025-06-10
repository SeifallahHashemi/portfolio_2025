'use client';

import SandBar from '@/components/Animation/SandBar';
import Whispers from '@/components/Animation/Whispers';
import { sleep } from '@/lib/utils';
import ActPop from '@/public/img/act-pop.png';
import LogoPop from '@/public/img/pop-1.png';
import MoviePop from '@/public/img/pop-2.png';
import TeamPop from '@/public/img/pop.png';
import SeriesPop from '@/public/img/series-pop.png';
import YoutubeChanelPop from '@/public/img/yc-pop.png';
import {
  AnimationControls,
  motion,
  useAnimate,
  useAnimation,
} from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

interface TCard {
  src: string | StaticImageData;
  alt: string;
}

const cards: TCard[] = [
  {
    src: LogoPop,
    alt: 'site logo',
  },
  {
    src: TeamPop,
    alt: 'popularity football club image: barcelona',
  },
  {
    src: MoviePop,
    alt: 'popularity Movie image: LOTR',
  },
  {
    src: ActPop,
    alt: 'popularity Actor image: LOTR',
  },
  {
    src: SeriesPop,
    alt: 'popularity Series image: LOTR',
  },
  {
    src: YoutubeChanelPop,
    alt: 'popularity Youtube image: LOTR',
  },
];

const TwistCard = () => {
  const [scope, animate] = useAnimate();
  const [activeCardInd, setActiveCardInd] = useState<number>(0);
  const controls = useAnimation();
  const whisperControls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const enterAnimation = async () => {
      controls.start('animate');
      whisperControls.start('animate');

      await animate(
        ':scope > div',
        { rotateY: 0 },
        { duration: 0.5, type: 'tween', ease: 'linear' }
      );

      await sleep(2000);

      whisperControls.start('exit');

      await animate(
        ':scope > div',
        { rotateY: 90 },
        { duration: 0.5, type: 'tween', ease: 'linear' }
      );

      controls.set('initial');

      setActiveCardInd((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
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
  }, [animate, activeCardInd, controls, whisperControls]);

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
      <Hourglass controls={controls} />
      <Whispers activeInd={activeCardInd} controls={whisperControls} />
    </>
  );
};

const Hourglass = ({ controls }: { controls: AnimationControls }) => {
  return (
    <div className={'absolute inset-0 flex justify-end'}>
      <SandBar controls={controls} containerControls={controls} />
    </div>
  );
};

export default TwistCard;
