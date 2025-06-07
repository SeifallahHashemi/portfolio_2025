'use client';

import LogoPop from '@/public/img/pop-1.png';
import TeamPop from '@/public/img/pop.png';
import { motion, useAnimation } from 'motion/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface TCard {
  id: number;
  frontImage: string | StaticImageData;
  backImage: string | StaticImageData;
  alt: string;
}

const Cards: TCard[] = [
  {
    id: 1,
    frontImage: TeamPop,
    backImage: LogoPop,
    alt: 'popularity football club image: barcelona',
  },
  {
    id: 1,
    frontImage: LogoPop,
    backImage: TeamPop,
    alt: 'popularity football club image: barcelona',
  },
];

const TwistCard = () => {
  const [activeCardInd, setActiveCardInd] = useState<number>(0);
  const frontControl = useAnimation();
  const backControl = useAnimation();

  useEffect(() => {
    const timer = setTimeout(async () => {
      await frontControl.start({
        rotateY: 90,
      });
      await backControl.start({
        rotateY: 0,
      });
      setActiveCardInd(1);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [frontControl, backControl]);

  // useEffect(() => {
  //   const sequence = async () => {
  //     await teamPopControls.start({
  //       rotateY: 90,
  //     });
  //     await logoPopControls.start({
  //       rotateY: 0,
  //     });
  //   };
  //
  //   sequence();
  // }, [teamPopControls, logoPopControls]);
  return (
    <div
      className={'w-screen h-screen flex justify-center items-center relative'}
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={frontControl}
        transition={{
          duration: 0.5,
          type: 'tween',
          ease: 'linear',
        }}
        className={
          'max-w-fit max-h-fit bg-zinc-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        }
      >
        <Image
          src={Cards[activeCardInd].frontImage}
          alt={'Team Pop'}
          width={300}
          height={300}
        />
      </motion.div>
      <motion.div
        initial={'initial'}
        animate={backControl}
        transition={{
          duration: 0.5,
          type: 'tween',
          ease: 'linear',
        }}
        className={
          'max-w-fit max-h-fit bg-zinc-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        }
      >
        <Image
          src={Cards[activeCardInd].backImage}
          alt={'Team Pop'}
          width={300}
          height={300}
        />
      </motion.div>
    </div>
  );
};

export default TwistCard;
