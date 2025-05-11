import Logo from '@/public/img/logo.png';
import Image from 'next/image';
import Link from 'next/link';
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
    <header>
      <div>
        <Link href={'/'}>
          <Image src={Logo} alt={'Logo'} priority={true} placeholder={'blur'} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
