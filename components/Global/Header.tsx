import Logo from '@/public/img/logo.png';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

interface Data {
  title: string;
  link: string;
}

const data: Data[] = [
  {
    title: 'درباره من',
    link: '/about-me',
  },
  {
    title: 'پروژه ها',
    link: '/projects',
  },
  {
    title: 'بلاگ',
    link: '/blog',
  },
];

const Header = () => {
  return (
    <header
      className={
        'px-6 py-6 border-b dark:border-b-zinc-800 border-b-zinc-200 text-sm'
      }
    >
      <div className={'max-w-6xl mx-auto flex justify-center items-center'}>
        <Link href={'/'}>
          <Image
            src={Logo}
            alt={'Logo'}
            priority={true}
            placeholder={'blur'}
            width={35}
            height={35}
          />
        </Link>
        <nav>
          <ul></ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
