import AnimateSection from '@/components/Animation/AnimateSection';
import React from 'react';

const FeaturedPosts = () => {
  return (
    <section
      className={
        'my-20 w-full xl:max-w-6xl mx-auto flex justify-center items-center'
      }
    >
      <AnimateSection delay={1.1}>
        <h2>hello world</h2>
      </AnimateSection>
    </section>
  );
};

export default FeaturedPosts;
