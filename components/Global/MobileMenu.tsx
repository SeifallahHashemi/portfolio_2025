'use client';

import { Button } from '@/components/ui/button';
import Logo from '@/public/img/logo.png';
import { AnimatePresence, motion } from 'framer-motion';
import { BookMarked, FlaskConical, Menu, User, X } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
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
          }}
          className={
            'w-full h-full fixed top-0 left-0 z-40 transform !ease-[cubic-bezier(0.7,0,0,1)] md:hidden bg-white dark:bg-zinc-900'
          }
        >
          <div className={'mt-6 px-8 flex justify-between items-center'}>
            <Link href={'/'}>
              <Image
                src={Logo}
                alt={'Logo'}
                priority={true}
                width={35}
                height={35}
              />
            </Link>
            <Button
              variant={'outline'}
              size={'icon'}
              aria-label={'Toggle Menu'}
              onClick={onToggleMobileNav}
            >
              <X />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
