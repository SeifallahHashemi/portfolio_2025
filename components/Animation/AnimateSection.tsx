import { cn } from '@/lib/utils';
import { AnimationProps, motion } from 'motion/react';
import React from 'react';

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
  const variants = {
    initial: { filter: 'blur(0.5rem)', opacity: 0, translateY: '1rem' },
    animate: { filter: 'blur(0)', opacity: 1, translateY: '0' },
  };
  return (
    <motion.div
      initial={'initial'}
      animate={'animate'}
      variants={variants}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className={cn('', className)}>{children}</div>
    </motion.div>
  );
};

export default AnimateSection;
