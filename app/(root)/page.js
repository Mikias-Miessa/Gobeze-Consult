import React from 'react';
import Landing from '@/components/home/hero';
import SecondSec from '@/components/home/SecondSec';
import Benefit from '@/components/home/benefit';
import LogoSection from '@/components/home/logoSection';
import Testimonial from '@/components/home/Testimonial';
import OurTeam from '@/components/home/ourTeam';

const Hero = () => {
  return (
    <div>
      <Landing />
      <SecondSec />
      <Benefit />
      <div className='flex justify-center pt-28 bg-black'>
        <LogoSection />
      </div>
      <Testimonial />
      <div className='felx justify-center'>
        <OurTeam />
      </div>
    </div>
  );
};

export default Hero;
