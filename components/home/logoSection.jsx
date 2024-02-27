import React from 'react';
import SectionTitle from '../shared/sectionTitle';

const LogoSection = () => {
  const partners = [
    { id: 1, image: '/images/image1.png' },
    { id: 2, image: '/images/image2.png' },
    { id: 3, image: '/images/image3.png' },
    { id: 4, image: '/images/image1.png' },
    { id: 5, image: '/images/image2.png' },
    { id: 6, image: '/images/image3.png' },
  ];
  return (
    <div className='bg-black w-[1920px] overflow-hidden pb-20'>
      {/* <SectionTitle title={'Our Students Work Here'} /> */}
      {/* <div className='flex flex-col justify-center items-start pl-20 gap-2'>
        <h1 className='font-bold text-white text-3xl'>OUR PARTNERS</h1>{' '}
        <div className='h-2 w-20 bg-orange-500'></div>
      </div> */}
      <div className='flex md:justify-center'>
        <div className='md:w-[70%]'>
          <SectionTitle color={'white'} title={'OUR PARTNERS'} />
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='md:w-[70%] flex flex-wrap gap-4 mt-10 justify-center'>
          {partners.map((partner) => {
            return (
              <div key={partner.id}>
                <img
                  src={partner.image}
                  className=' w-14 h-14 md:w-20 md:h-20 bg-black object-contain mx-5 rounded-3xl'
                  alt='partner logo'
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className='w-screen inline-flex flex-nowrap overflow-hidden mt-10  '>
        <div className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll '>
          {partners.map((partner) => {
            return (
              <div key={partner.id}>
                <img
                  src={partner.image}
                  className=' w-14 h-14 md:w-28 md:h-28 bg-black object-contain mx-5 rounded-3xl'
                  alt='partner logo'
                />
              </div>
            );
          })}
        </div>

        <div
          className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll '
          aria-hidden='true'
        >
          {partners.map((partner) => {
            return (
              <div key={partner.id}>
                <img
                  src={partner.image}
                  className='w-14 h-14 md:w-28 md:h-28 bg-black object-contain mx-5 rounded-2xl'
                  alt='partner logo'
                />
              </div>
            );
          })}
        </div>
        <div
          className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll '
          aria-hidden='true'
        >
          {partners.map((partner) => {
            return (
              <div key={partner.id}>
                <img
                  src={partner.image}
                  className='w-14 h-14 md:w-28 md:h-28 bg-black object-contain mx-5 rounded-2xl'
                  alt='partner logo'
                />
              </div>
            );
          })}
        </div>
        <div
          className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll '
          aria-hidden='true'
        >
          {partners.map((partner) => {
            return (
              <div key={partner.id}>
                <img
                  src={partner.image}
                  className='w-14 h-14 md:w-28 md:h-28 bg-black object-contain mx-5 rounded-2xl'
                  alt='partner logo'
                />
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default LogoSection;
