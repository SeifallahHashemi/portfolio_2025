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
          <h3 className={'font-iranYWR font-medium text-base'}>
            فناوری مورد استفاده:
          </h3>
          <ul className={''}></ul>
        </div>
        <div>
          <small className="text-zinc-500">
            Copyright &copy; Sepehr Dev {new Date().getFullYear()} All rights
            Reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
