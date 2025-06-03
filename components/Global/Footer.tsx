import RefLink from '@/components/Shared/RefLink';
import DarkNextJs from '@/public/img/Next.js_wordmark_dark.svg';
import LightNextJs from '@/public/img/Next.js_wordmark_light.svg';
import Sanity from '@/public/img/sanity.svg';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer
      className={
        'w-screen overflow-clip h-fit p-6 border-t border-t-zinc-200 dark:border-zinc-900'
      }
    >
      <div
        className={'w-full max-w-6xl mx-auto flex justify-between items-center'}
      >
        <div className={'flex gap-2 items-center'}>
          <h3 className={'font-iranYWR font-medium text-xs'}>
            فناوری مورد استفاده:
          </h3>
          <ul className={'flex flex-wrap gap-2 items-center'}>
            <li>
              <RefLink href={'https://sanity.io'} target={'_blank'}>
                <Image
                  src={Sanity}
                  alt={'sanity logo'}
                  width={40}
                  height={40}
                />
              </RefLink>
            </li>
            <li>
              <RefLink href={'https://nextjs.org'} target={'_blank'}>
                <Image
                  alt={'Next.js Logo'}
                  src={LightNextJs}
                  width={40}
                  height={40}
                  className={'dark:hidden inline-flex'}
                />
                <Image
                  alt={'Next.js Logo'}
                  src={DarkNextJs}
                  width={40}
                  height={40}
                  className={'hidden dark:inline-flex'}
                />
              </RefLink>
            </li>
            {/*<li>*/}
            {/*  <RefLink href={''} target={'_blank'}>*/}
            {/*    <Image alt={'Vercel Logo'} src={''} width={40} height={40} />*/}
            {/*  </RefLink>*/}
            {/*</li>*/}
          </ul>
        </div>
        <div>
          <small className="text-zinc-500 font-mono text-xs">
            Copyright &copy; Sepehr Dev {new Date().getFullYear()} All rights
            Reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
