'use client';
import React from 'react';
import { LampDemo } from './lampeffetc';
import SectionTitle from '../shared/sectionTitle';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import { useState } from 'react';
import { DirectionAwareHover } from '../shared/card';

const OurTeam = () => {
  const teams = [
    {
      id: 1,
      name: 'Mikias Miessa',
      image: '/images/girl_behind.png',
    },
    {
      id: 2,
      name: 'Dagim Asnake',
      image: '/images/girl_behind.png',
    },
    {
      id: 3,
      name: 'Brook Habte',
      image: '/images/girl_behind.png',
    },
    {
      id: 4,
      name: 'Mercy Habte',
      image: '/images/girl_behind.png',
    },
    {
      id: 5,
      name: 'Hanna Kebede',
      image: '/images/girl_behind.png',
    },
  ];
  return (
    <div className=' w-[1920px] h-fit '>
      {/* <LampDemo /> */}
      <div className='flex justify-center '>
        <div className='w-[80%]'>
          <div className='mb-10'>
            <SectionTitle title={'OUR TEAM'} color={'black'} />
          </div>
          <Splide
            // Update activeSlide state on slide change
            options={{
              type: 'loop',
              autoplay: true,
              arrows: false,
              interval: 4000,
              perPage: 3,
              padding: { left: 90, right: 20 },
              pagination: false,
              pauseOnHover: true,
              perMove: 1,
              gap: '2rem',
              breakpoints: {
                1400: {
                  perPage: 3,
                  width: '100%',
                },
                1024: {
                  perPage: 2,
                  width: '100%',
                },
                760: {
                  perPage: 1,
                  width: '100%',
                  padding: { left: 50, right: 20 },
                },
              },
            }}
          >
            {teams.length > 0 &&
              teams.map(
                (team, index) =>
                  team && (
                    <SplideSlide key={team.id}>
                      <Image
                        quality={100}
                        src={team.image}
                        alt='person'
                        width={200}
                        height={300}
                        className='hover:scale-110 duration-200'
                      />
                      {/* <DirectionAwareHover
                        key={team.id}
                        imageUrl={team.image}
                      /> */}
                    </SplideSlide>
                  )
              )}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
