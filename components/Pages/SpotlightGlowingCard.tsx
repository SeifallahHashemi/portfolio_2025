'use client';

import React, { useEffect, useRef, useState } from 'react';

const SpotlightGlowingCard = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const HandleMouseMove = (e: MouseEvent) => {
      cardsRef.current.forEach((card) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        }
      });
    };
    document.addEventListener('mousemove', HandleMouseMove);

    return () => {
      document.removeEventListener('mousemove', HandleMouseMove);
    };
  }, []);
  return (
    <div
      className={
        'w-full flex flex-wrap gap-10 justify-center items-center group'
      }
    >
      {Array.from({ length: 3 }).map((_item, ind) => {
        return (
          <Card
            key={ind}
            ref={(el: HTMLDivElement | null) => {
              if (el) {
                cardsRef.current[ind] = el;
              }
            }}
          />
        );
      })}
    </div>
  );
};

const Card = ({ ref }: { ref: React.RefCallback<HTMLDivElement> }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={
        'relative overflow-clip rounded-xl bg-zinc-800 w-[300px] h-[380px] group'
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* bg glowing */}
      <div
        className={
          'absolute z-30 pointer-events-none inset-0 transition-opacity duration-500 blur-md'
        }
        style={{
          background:
            'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(148,163,184,0.25), transparent 70%)',
          opacity: isHovered ? 1 : 0,
        }}
      ></div>
      {/* border glowing */}
      <div
        className={
          'absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md'
        }
        style={{
          background:
            'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(148,163,184,0.5), transparent 70%)',
        }}
      ></div>
      {/* content */}
      <div
        className={
          'absolute inset-0.5 rounded-xl overflow-clip bg-zinc-900 grid place-content-center z-20'
        }
      >
        hello world
      </div>
    </div>
  );
};

export default SpotlightGlowingCard;
