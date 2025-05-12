'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { BookMarked, FlaskConical, Menu, User } from 'lucide-react';
import React, { useState } from 'react';

const data = [
  {
    title: 'درباره من',
    link: '/about-me',
    icon: <User />,
  },
  {
    title: 'پروژه ها',
    link: '/projects',
    icon: <FlaskConical />,
  },
  {
    title: 'بلاگ',
    link: '/blog',
    icon: <BookMarked />,
  },
] as const;

const MobileMenu = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState<boolean>(false);

  const onToggleMobileNav = (): void => {
    setToggleMobileNav((prevState) => {
      document.body.style.overflowY = prevState ? 'auto' : 'hidden';
      return !prevState;
    });
  };

  return (
    <AnimatePresence mode={'popLayout'}>
      <Button
        variant={'outline'}
        size={'icon'}
        aria-label={'Toggle Menu'}
        onClick={onToggleMobileNav}
      >
        <Menu />
      </Button>
      {toggleMobileNav && (
        <motion.div
          initial={{
            translateX: '-100%',
          }}
          animate={{
            translateX: '0%',
          }}
          exit={{
            translateX: '-100%',
          }}
          transition={{
            duration: 300,
            ease: 'easeInOut',
          }}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
