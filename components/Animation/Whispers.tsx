'use client';

import React from 'react';

const sentence = [
  'من سپهر هاشمی',
  'تیم محبوب: بارسلونا',
  'فیلم محبوب: ارباب حلقه ها',
];

interface WhispersProps {
  activeInd: number;
}
const Whispers = ({ activeInd }: WhispersProps) => {
  return (
    <div
      className={
        'w-full flex justify-center items-center font-bold font-iranSans text-base leading-relaxed'
      }
    >
      {sentence[activeInd]}
    </div>
  );
};

export default Whispers;
