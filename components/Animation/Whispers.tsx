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
  return <div>{sentence[activeInd]}</div>;
};

export default Whispers;
