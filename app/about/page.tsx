import TwistCard from '@/components/Animation/TwistCard';
import ScrollPresenceAnimator from '@/components/Pages/ScrollPresenceAnimator';
import React from 'react';

const AboutPage = () => {
  return (
    <main className={'flex flex-col'}>
      <ScrollPresenceAnimator>
        <TwistCard />
      </ScrollPresenceAnimator>
      <section className={'h-screen'}></section>
    </main>
  );
};

export default AboutPage;
