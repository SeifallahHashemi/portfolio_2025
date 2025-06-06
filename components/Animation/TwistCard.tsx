'use client';

import TeamPop from '@/public/img/pop.png';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

const TwistCard = () => {
  return (
    <motion.div>
      <Image src={TeamPop} alt={'Team Pop'} width={150} height={150} />
    </motion.div>
  );
};

export default TwistCard;
