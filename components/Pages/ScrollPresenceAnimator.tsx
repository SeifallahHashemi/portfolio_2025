'use client';

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  usePresence,
  useScroll,
  useTransform,
} from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

const ScrollPresenceAnimator = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isPresent, safeToRemove] = usePresence();
  const [toggleList, setToggleList] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useMotionValueEvent(opacity, 'change', (latest) => {
    if (latest === 0) {
      setToggleList(false);
    } else if (latest > 0) {
      setToggleList(true);
    }
  });

  useEffect(() => {
    if (!isPresent) {
      safeToRemove();
    }
  }, [isPresent]);

  return (
    <AnimatePresence>
      <section className={'h-screen relative'} ref={ref}>
        {toggleList && (
          <motion.div
            key={'toggle-list'}
            style={{
              opacity,
            }}
          >
            {children}
          </motion.div>
        )}
      </section>
    </AnimatePresence>
  );
};

export default ScrollPresenceAnimator;
