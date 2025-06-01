'use client';

import OptimizedImage from '@/components/Image/OptimizedImage';
import ProductImage from '@/public/img/img-1.jpg';
import { Link } from 'next-view-transitions';
import { StaticImageData } from 'next/image';
import React, { useEffect, useRef } from 'react';

const dataCards = [
  {
    id: 1,
    src: ProductImage,
    title: 'Copilot Practice 1',
    text: '1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, numquam earum.',
    link: '',
    date: '',
  },
];

interface CardProps {
  src: string | StaticImageData;
  title: string;
  text: string;
  link: string;
  date: string;
  ref?: React.Ref<HTMLAnchorElement>;
}

const SpotlightGlowingCard = () => {
  const ref = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      ref.current.forEach((card) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={
        'w-full xl:max-w-6xl mx-auto flex flex-wrap gap-12 items-center justify-center'
      }
    >
      {dataCards.map((card, ind) => (
        <Card
          key={ind}
          src={ProductImage}
          title={card.title}
          text={card.text}
          link={'/'}
          date={''}
          ref={(el: HTMLAnchorElement | null) => {
            ref.current[ind] = el;
          }}
        />
      ))}
    </div>
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
