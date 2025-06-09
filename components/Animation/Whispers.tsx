'use client';

import { motion } from 'motion/react';
import React from 'react';

const sentence = [
  'من سپهر هاشمی',
  'تیم محبوب: بارسلونا',
  'فیلم محبوب: ارباب حلقه ها',
];

interface WhispersProps {
  activeInd: number;
}

const variants = {
  initial: { filter: 'blur(0.5rem)', opacity: 0 },
  animate: { filter: 'blur(0)', opacity: 1 },
  exit: { filter: 'blur(0.5rem)', opacity: 0 },
};

const Whispers = ({ activeInd }: WhispersProps) => {
  return (
    <motion.div
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
      variants={variants}
      className={
        'w-full flex justify-center items-center font-bold font-iranSans text-base leading-relaxed'
      }
    >
      {sentence[activeInd]}
    </motion.div>
  );
};

export default Whispers;
