"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Rectangle from '@/public/secondSec/Rectangle.png';
import Rectangle1 from '@/public/secondSec/Rectangle1.png';
import Rectangle2 from '@/public/secondSec/Rectangle2.png';
import Rectangle3 from '@/public/secondSec/Rectangle3.png';
import { IoMdRadioButtonOn } from 'react-icons/io';

const images = [Rectangle, Rectangle1, Rectangle2, Rectangle3];

const data = [
  {
    id: '1',
    num: '01',
    theText: 'Present the job matching services that',
  },
  {
    id: '2',
    num: '02',
    theText: 'Present the job matching services that',
  },
  {
    id: '3',
    num: '03',
    theText: 'Present the job matching services that',
  },
  {
    id: '4',
    num: '04',
    theText: 'Present the job matching services that',
  },
];

const SecondSec = () => {
  const [currentImage, setCurrentImage] = useState(Rectangle);
  const [hoverIndex, setHoverIndex] = useState(0);

  const handleHover = (index) => {
    setCurrentImage(images[index]);
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setCurrentImage(Rectangle);
    setHoverIndex(null);
  };

  return (
    <div className='h-screen bg-black text-white overflow-x-hidden'>
      <div className='text-center font-bold text-4xl py-5 px-1'>
        Second Features Section
      </div>
      <div className='flex justify-center items-center'>
        <div className='flex items-center'>
          <div className='mr-20 hidden md:block'>
            <Image src={currentImage} alt='image' width={400} height={100} />
          </div>
          <div>
            {data.map((item, index) => (
              <div
                key={item.id}
                className='flex flex-col mb-5'
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className='flex'>
                  <div className='mr-5 mt-1'>
                    <IoMdRadioButtonOn
                      className='text-3xl'
                      style={{ color: hoverIndex === index ? 'orange' : 'white' }}
                    />
                  </div>
                  <div className='md:w-56'>
                    <div className='mr-4 text-2xl'>{item.num}</div>
                    <div>{item.theText}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSec;
