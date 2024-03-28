import React from 'react';
import About from '@/components/about/about';
import OurVision from '@/components/about/ourVission';
import OurVisionSecond from '@/components/about/ourVisionSecond';
import Training from '@/components/about/training';
import SomeSection from '@/components/about/someSection';
import LastSec from '@/components/about/lastSec';
import AboutSecond from '@/components/about/aboutSecond';
import OurMission from '@/components/about/ourMission';
import Partners from '@/components/home/partners';
import OurTeam from '@/components/home/ourTeam';

const page = () => {
  return (
    <div>
      <About />
      <AboutSecond />
      <OurVisionSecond />
      {/* <OurVision /> */}
      {/* <SomeSection/> */}
      <OurMission />
      {/* <SomeSection /> */}
      {/* <Training /> */}
      <div className='flex justify-center'>
        <OurTeam />
      </div>
      <Partners />
      <LastSec />
    </div>
  );
};

export default page;
