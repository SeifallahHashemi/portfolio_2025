'use client';

import TeamPop from '@/public/img/pop.png';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

const variants = {
  initial: {
    rotateY: 0,
  },
  animate: {
    rotateY: 90,
  },
};

const TwistCard = () => {
  return (
    <motion.div
      variants={variants}
      initial={'initial'}
      animate={'animate'}
      transition={{
        duration: 0.5,
        type: 'tween',
        ease: 'linear',
      }}
      className={'max-w-fit max-h-fit bg-zinc-100 rounded-full'}
    >
      <Image src={TeamPop} alt={'Team Pop'} width={300} height={300} />
    </motion.div>
  );
};

export default TwistCard;
