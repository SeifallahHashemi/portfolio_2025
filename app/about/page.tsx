import CodeTypingLoop from '@/components/Animation/CodeTypingLoop';
import TwistCard from '@/components/Animation/TwistCard';
import React from 'react';

const AboutPage = () => {
  return (
    <div className={'min-h-screen relative flex flex-col gap-y-20'}>
      <TwistCard />
      <CodeTypingLoop />
    </div>
  );
};

export default AboutPage;
