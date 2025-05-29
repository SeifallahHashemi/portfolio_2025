import AnimateSection from '@/components/Animation/AnimateSection';
import VelocityMarquee from '@/components/Animation/VelocityMarquee';
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
      <AnimateSection delay={1}>
        <VelocityMarquee />
      </AnimateSection>
    </section>
  );
};

export default InfiniteMarquee;
