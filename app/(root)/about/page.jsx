import React from 'react';
import About from '@/components/about/about';
import OurVision from '@/components/about/ourVission';
import OurVisionSecond from '@/components/about/ourVisionSecond';
import Training from '@/components/about/training';
import SomeSection from '@/components/about/someSection';

const page = () => {
  return (
    <div>
      <About />
      <OurVision />
      <OurVisionSecond />
      <SomeSection/>
      <Training />
    </div>
  );
};

export default page;