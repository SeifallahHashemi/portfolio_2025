'use client';

import LogoPop from '@/public/img/pop-1.png';
import TeamPop from '@/public/img/pop.png';
import { motion, useAnimation } from 'motion/react';
import Image from 'next/image';
import React, { useEffect } from 'react';

const variants = {
  initial: {
    rotateY: 0,
  },
};
const hiddenVariants = {
  initial: {
    rotateY: 90,
  },
};

const TwistCard = () => {
  const teamPopControls = useAnimation();
  const logoPopControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await teamPopControls.start({
        rotateY: 90,
      });
      await logoPopControls.start({
        rotateY: 0,
      });
    };

    sequence();
  }, [teamPopControls, logoPopControls]);
  return (
    <div
      className={'w-screen h-screen flex justify-center items-center relative'}
    >
      <motion.div
        variants={variants}
        initial={'initial'}
        animate={teamPopControls}
        transition={{
          duration: 0.5,
          type: 'tween',
          ease: 'linear',
          delay: 0.5,
        }}
        className={
          'max-w-fit max-h-fit bg-zinc-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        }
      >
        <Image src={TeamPop} alt={'Team Pop'} width={300} height={300} />
      </motion.div>
      <motion.div
        variants={hiddenVariants}
        initial={'initial'}
        animate={logoPopControls}
        transition={{
          duration: 0.5,
          type: 'tween',
          ease: 'linear',
        }}
        className={
          'max-w-fit max-h-fit bg-zinc-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        }
      >
        <Image src={LogoPop} alt={'Team Pop'} width={300} height={300} />
      </motion.div>
    </div>
  );
};

export default TwistCard;
