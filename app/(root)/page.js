import React from 'react';
import Landing from '@/components/home/hero';
import FirstSec from '@/components/home/firstSec';
import SecondSec from '@/components/home/SecondSec';
import ThirdSec from '@/components/home/thirdSec';
import Benefit from '@/components/home/benefit';
import LogoSection from '@/components/home/logoSection';
import Testimonial from '@/components/home/Testimonial';
import ContactUs from '@/components/home/contactUs';

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
        <ContactUs />
      </div>
    </div>
  );
};

export default Hero;
