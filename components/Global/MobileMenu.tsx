'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence } from 'framer-motion';
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
    </AnimatePresence>
  );
};

export default MobileMenu;
