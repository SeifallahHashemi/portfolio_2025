'use client';

import { cn } from '@/lib/utils';
import { AnimationProps, motion, useAnimation, useInView } from 'motion/react';
import React, { RefObject, useEffect, useRef } from 'react';

interface AnimateSectionProps extends AnimationProps {
  className?: string;
  children?: Readonly<React.ReactNode>;
  delay?: number;
}

const AnimateSection = ({
  className,
  delay,
  children,
}: AnimateSectionProps) => {
  // hooks:
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as RefObject<Element>, { once: true });
  const controls = useAnimation();
  const variants = {
    initial: { filter: 'blur(0.5rem)', opacity: 0, translateY: '1rem' },
    animate: { filter: 'blur(0)', opacity: 1, translateY: '0' },
  };

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(
        () => {
          controls.start('animate');
        },
        (delay ?? 0) * 1000
      ); // تبدیل delay به میلی‌ثانیه

      return () => clearTimeout(timeout);
    }
  }, [controls, isInView, delay]);
  return (
    <motion.div
      ref={ref}
      initial={'initial'}
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className={cn('', className)}>{children}</div>
    </motion.div>
  );
};

export default AnimateSection;
