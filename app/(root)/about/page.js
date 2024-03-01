import React from 'react';
import About from '@/components/about/about';
import OurVission from '@/components/about/ourVission';
import OurVisionSecond from '@/components/about/ourVisionSecond';
import Training from '@/components/about/training';

const page = () => {
  return (
    <div>
      <About />
      <OurVission />
      <OurVisionSecond />
      <Training />
    </div>
  );
};

export default page;
