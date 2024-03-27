import React from 'react';
import About from '@/components/about/about';
import OurVision from '@/components/about/ourVission';
import OurVisionSecond from '@/components/about/ourVisionSecond';
import Training from '@/components/about/training';
import SomeSection from '@/components/about/someSection';
import LastSec from '@/components/about/lastSec';
import AboutSecond from '@/components/about/aboutSecond';

const page = () => {
  return (
    <div>
      <About />
      <AboutSecond />
      <OurVisionSecond />
      <OurVision />
      {/* <SomeSection/> */}
      <Training />
      <LastSec/>
    </div>
  );
};

export default page;
