'use client';

import OptimizedImage from '@/components/Image/OptimizedImage';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

interface CardProps {
  src: string;
  title: string;
  text: string;
  link: string;
  date: string;
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
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(81, 47, 76, 1), transparent 40%)',
        }}
      />
      <div className="absolute inset-0.5 rounded-[9px] bg-[#161B22] z-10 p-8 flex flex-col">
        <OptimizedImage
          src={src}
          alt={'blog post image'}
          priority={false}
          quality={75}
          sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        />
        <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-400 text-sm mb-6 flex-grow">{text}</p>
        <p className="text-gray-400 text-sm mb-6 flex-grow">{date}</p>
      </div>
    </Link>
  );
};

export default SpotlightGlowingCard;
