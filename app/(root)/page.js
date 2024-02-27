import React from 'react';
import Landing from '@/components/home/hero';
import SecondSec from '@/components/home/SecondSec';
import Benefit from '@/components/home/benefit';

const Hero = () => {
  return (
    <div>
      <Landing/>
      <SecondSec/>
      <Benefit/>
    </div>
  );
};

export default Hero;
