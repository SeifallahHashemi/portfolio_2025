import AnimateSection from '@/components/Animation/AnimateSection';
import ContributionGraph from '@/components/Pages/ContributionGraph';
import React from 'react';

const GithubContributionGraph = () => {
  return (
    <section>
      <AnimateSection delay={0.7}>
        <h2 className={'portfolioTextWL'}>نمودار فعالیت گیت هاب:</h2>
      </AnimateSection>
      <AnimateSection delay={0.8}>
        <ContributionGraph />
      </AnimateSection>
    </section>
  );
};

export default GithubContributionGraph;
