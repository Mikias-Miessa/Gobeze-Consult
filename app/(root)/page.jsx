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
import ContactUs from '@/components/home/contactUs';
import Partners from '@/components/home/partners';


const Hero = () => {
  return (
    <div>
      <Landing />
      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <Benefit />
      <div className='flex justify-center'>
        <OurTeam />
      </div>
      {/* <div className='flex justify-center pt-28 bg-black'>
        <LogoSection />
      </div> */}
      <Partners/>
      <Testimonial />

      <div className='flex justify-center'>
        <NewsLetter />
      </div>
      <div className='flex justify-center'>
        <ContactUs />
      </div>
      <div className='flex justify-center'>
        <Transition />
      </div>
      
      
    </div>
  );
};

export default Hero;
