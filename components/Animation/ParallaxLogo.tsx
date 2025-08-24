'use client';

import CSS from '@/components/Icons/css';
import NextJsSvg from '@/components/Icons/next-js-svg';
import ReactSVG from '@/components/Icons/react-svg';
import ReduxSvg from '@/components/Icons/redux-svg';
import TailwindSvg from '@/components/Icons/tailwind-svg';
import TypescriptSvg from '@/components/Icons/typescript-svg';
import React from 'react';

const logos = [CSS, NextJsSvg, ReactSVG, ReduxSvg, TailwindSvg, TypescriptSvg];

interface Props {
  className: string;
  baseVelocity: number;
}
const ParallaxLogo = ({
  className,
  baseVelocity = 100,
}: Props): React.ReactElement => {
  return <div className={className}></div>;
};

export default ParallaxLogo;
