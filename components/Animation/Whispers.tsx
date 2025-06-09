'use client';

import { AnimatePresence, AnimationControls, motion } from 'motion/react';
import React from 'react';

const sentence = [
  'من سپهر هاشمی 👋',
  'تیم محبوب: بارسلونا ❤️💙',
  'فیلم محبوب: ارباب حلقه ها 💍',
  'بازیگر محبوب: تام کروز 🤵',
  'سریال محبوب: جداسازی 📽️',
  'کانال محبوب: آکادمایند 💻 ️',
];

interface WhispersProps {
  activeInd: number;
  controls: AnimationControls;
}

const variants = {
  initial: { filter: 'blur(1rem)', opacity: 0 },
  animate: { filter: 'blur(0)', opacity: 1 },
  exit: { filter: 'blur(1rem)', opacity: 0 },
};

const Whispers = ({ activeInd, controls }: WhispersProps) => {
  return (
    <AnimatePresence mode={'wait'}>
      <motion.div
        initial={'initial'}
        animate={controls}
        exit={'exit'}
        variants={variants}
        transition={{
          duration: 0.5,
          type: 'tween',
          ease: 'linear',
        }}
        className={
          'w-full flex justify-center items-center font-bold font-iranSans text-xl leading-relaxed'
        }
      >
        {sentence[activeInd]}
      </motion.div>
    </AnimatePresence>
  );
};

export default Whispers;
