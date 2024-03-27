'use client';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import SectionTitle from '../shared/sectionTitle';
import { useEffect, useRef, useState } from 'react';
import { DirectionAwareHover } from '../shared/card';

const OurTeam = () => {
  const teams = [
    {
      id: 1,
      name: 'Mikias Miessa',
      image: '/images/about/miki.png',
      role: 'Full Stack Developer',
    },
    {
      id: 2,
      name: 'Brook Habte',
      image: '/images/about/lidya.png',
      role: 'Full Stack Developer',
    },
    {
      id: 3,
      name: 'Dagim Asnake',
      image: '/images/about/dagim.png',
      role: 'Full Stack Developer',
    },
    {
      id: 4,
      name: 'Mercy Habte',
      image: '/images/about/miki.png',
      role: 'Full Stack Developer',
    },
    {
      id: 5,
      name: 'Hanna Kebede',
      image: '/images/about/lidya.png',
      role: 'Full Stack Developer',
    },
  ];

  return (
    <div
      className='flex w-[1920px] h-screen bg-cover bg-center items-center relative'
      style={{ backgroundImage: `url('/images/Team_Section.png')` }}
    >
      <div className='flex justify-center w-full'>
        <div className='w-[80%]'>
          <div className='mb-10'>
            <SectionTitle title={'OUR TEAM'} color={'black'} />
          </div>
          <Splide
            options={{
              type: 'loop',
              autoplay: true,
              arrows: false,
              interval: 4000,
              perPage: 3,
              padding: { left: 20, right: 20 },
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
              teams.map((team, index) =>
                team ? (
                  <SplideSlide key={team.id}>
                    <div className='relative w-full h-full'>
                      <Image
                        quality={100}
                        src={team.image}
                        alt='person'
                        width={300}
                        height={400}
                        className='hover:scale-110 duration-200'
                      />
                      <div className='absolute inset-0 flex flex-col justify-center items-center bg-gray-100 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                        <h1 className='text-white text-xl font-bold mb-1'>
                          {team.name}
                        </h1>
                        <p className='text-white text-lg'>{team.role}</p>
                      </div>
                    </div>
                  </SplideSlide>
                ) : null
              )}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
