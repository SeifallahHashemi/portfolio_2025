import AnimateSection from '@/components/Animation/AnimateSection';
import ContributionGraph from '@/components/Pages/ContributionGraph';
import React from 'react';

const GithubContributionGraph = () => {
  return (
    <section className={'flex flex-col gap-y-4 my-20'}>
      <AnimateSection delay={0.7}>
        <h2
          className={
            'text-zinc-800 dark:text-zinc-200 text-base font-iranYWL font-normal leading-relaxed'
          }
        >
          نمودار فعالیت گیت هاب:
        </h2>
      </AnimateSection>
      <AnimateSection delay={0.8}>
        <ContributionGraph />
      </AnimateSection>
    </section>
  );
};

export default GithubContributionGraph;
