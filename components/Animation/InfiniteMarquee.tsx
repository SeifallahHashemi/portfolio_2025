import AnimateSection from '@/components/Animation/AnimateSection';
import React from 'react';

const InfiniteMarquee = () => {
  return (
    <section>
      <AnimateSection delay={0.9}>
        <h2
          className={
            'font-bold text-lg text-center font-iranYWL  text-zinc-800 dark:text-white'
          }
        >
          مهارت ها
        </h2>
      </AnimateSection>
    </section>
  );
};

export default InfiniteMarquee;
