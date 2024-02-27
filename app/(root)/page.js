import React from 'react';
import Landing from '@/components/home/hero';
import SecondSec from '@/components/home/SecondSec';
import Testimonial from '@/components/home/Testimonial';

const Hero = () => {
  return (
    <div>
      <Landing />
      <SecondSec />
      <Testimonial />
    </div>
  );
};

export default Hero;
