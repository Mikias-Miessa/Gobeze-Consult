import React, { Component } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
function CenterMode() {
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
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className='w-4/5 mx-auto  pb-5'>
      <div className='slider-container '>
        <Slider {...settings}>
          {teams.map((team) => {
            <Image
              key={team.id}
              quality={100}
              src={team.image}
              alt='person'
              width={300}
              height={400}
              className='hover:scale-110 duration-200'
            />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default CenterMode;
