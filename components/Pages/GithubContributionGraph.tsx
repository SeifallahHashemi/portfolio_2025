import AnimateSection from '@/components/Animation/AnimateSection';
import ContributionGraph from '@/components/Pages/ContributionGraph';
import React from 'react';

const GithubContributionGraph = () => {
  return (
    <section
      className={
        'flex flex-col gap-y-8 my-20 w-full xl:max-w-6xl mx-auto justify-center items-center'
      }
    >
      <AnimateSection delay={0.7}>
        <h2
          className={
            'text-zinc-800 dark:text-white text-base font-iranYWL font-bold leading-relaxed text-right'
          }
        >
          نمودار فعالیت گیت هاب
        </h2>
      </AnimateSection>
      <AnimateSection delay={0.8}>
        <ContributionGraph />
      </AnimateSection>
    </section>
  );
};

export default GithubContributionGraph;
