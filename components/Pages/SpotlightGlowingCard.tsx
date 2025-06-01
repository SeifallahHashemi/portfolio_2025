'use client';

import { Link } from 'next-view-transitions';
import React from 'react';

interface CardProps {
  src: string;
  title: string;
  text: string;
  link: string;
  date: Date;
  ref: React.Ref<HTMLAnchorElement>;
}

const SpotlightGlowingCard = () => {
  return (
    <div
      className={
        'w-full xl:max-w-6xl mx-auto flex flex-wrap gap-12 items-center justify-center'
      }
    ></div>
  );
};

const Card = ({ src, title, text, link, date, ref }: CardProps) => {
  return (
    <Link
      href={link}
      ref={ref}
      className={
        'relative h-72 w-96 rounded-xl overflow-clip group bg-white/5 dark:bg-black/5 backdrop-blur-md'
      }
    >
      <div
        className={
          'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
        }
        style={{
          background:
            'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(51, 26, 52, 0.4), transparent 40%)',
        }}
      />
    </Link>
  );
};

export default SpotlightGlowingCard;
