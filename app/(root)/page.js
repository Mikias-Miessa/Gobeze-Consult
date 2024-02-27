import React from 'react';
import Landing from '@/components/home/hero';
import SecondSec from '@/components/home/SecondSec';
import Feature2 from '@/components/home/Feature';
import LogoSection from '@/components/home/logoSection';

const Hero = () => {
  return (
    <div>
      <Landing />
      <SecondSec />
      <Feature2 />
      <div className='flex justify-center pt-28 bg-black'>
        <LogoSection />
      </div>
    </div>
  );
};

export default Hero;
