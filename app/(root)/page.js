import React from 'react';
import Landing from '@/components/home/hero';
import FirstSec from '@/components/home/firstSec';
import SecondSec from '@/components/home/SecondSec';
import ThirdSec from '@/components/home/thirdSec';
import Benefit from '@/components/home/benefit';
import LogoSection from '@/components/home/logoSection';
import Testimonial from '@/components/home/Testimonial';
import OurTeam from '@/components/home/ourTeam';
import NewsLetter from '@/components/home/newsLetter';
import Transition from '@/components/home/transition';
import NewsLetter from '@/components/home/newsLetter';
import Transition from '@/components/home/transition';

const Hero = () => {
  return (
    <div>
      <Landing />
      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <Benefit />
      <div className='flex justify-center pt-28 bg-black'>
        <LogoSection />
      </div>
      <Testimonial />

      <div className='flex justify-center'>
        <NewsLetter />
      </div>
      <div className='flex justify-center'>
        <Transition />
      </div>
      <div className='flex justify-center py-10'>
        <OurTeam />
        {/* <Transition/> */}
      </div>
    </div>
  );
};

export default Hero;
