import MobileMenu from '@/components/Global/MobileMenu';
import { ThemeModeToggle } from '@/components/Theme/ThemeModeToggle';
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
        'px-6 py-6 border-b dark:border-b-zinc-900 border-b-zinc-200 text-sm z-40 font-iranSans md:mb-20 mb-10 md:px-16'
      }
    >
      <div className={'max-w-6xl mx-auto flex justify-between items-center'}>
        <Link href={'/'} className={'rounded-full overflow-clip'}>
          <Image
            src={Logo}
            alt={'Logo'}
            priority={true}
            placeholder={'blur'}
            width={35}
            height={35}
          />
        </Link>
        <nav className={'md:block hidden'}>
          <ul className={'flex items-center gap-x-8'}>
            {data.toReversed().map((item, index) => (
              <li key={'navigation-' + index}>
                <Link
                  href={item.link}
                  className={
                    'dark:text-white text-zinc-700 font-bold dark:hover:text-portfolio-primary hover:text-zinc-900 duration-300 text-base'
                  }
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={'flex items-center gap-x-4'}>
          <ThemeModeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
