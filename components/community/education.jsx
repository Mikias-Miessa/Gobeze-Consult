"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import firstImg from '@/public/images/community/aster1.png';
import secImg from '@/public/images/community/aster2.png';
import thirdImg from '@/public/images/community/aster3.png';

const data = [
  {
    id: 1,
    title: 'Aster Zewdie Scholarship Fund',
    desc: 'This fund is established to honor the life and works of W/ro Aster and her commitment to the well being and empowerment of women. This fund is established to honor the life and works of W/ro Aster and her commitment to the well being and empowerment of women.',
    imgSrc: firstImg,
  },
  {
    id: 3,
    title: 'DoIT',
    desc: 'This fund is established to honor the life and works of W/ro Aster and her commitment to the well being and empowerment of women. This fund is established to honor the life and works of W/ro Aster and her commitment to the well being and empowerment of women.',
    imgSrc: thirdImg,
  },
  {
    id: 2,
    title: 'Enactus',
    desc: 'Enactus is an international organization that connects student, academic and business leaders through entrepreneurial-based projects that empower people to transform opportunities into real, sustainable progress for themselves and their communities.',
    imgSrc: secImg,
  },
];

const Education = () => {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className='md:flex max-w-screen-lg mx-auto gap-14 md:pt-24 overflow-hidden p-10 md:h-[30rem]'>
        <div className='md:w-1/2'>
          <Image src={selectedItem.imgSrc} alt='aster' className='' />
        </div>
        <div className='md:w-1/2 mt-5'>
          <div className='mb-5'>
            <h1 className='text-3xl font-bold text-center md:text-start'>{selectedItem.title}</h1>
          </div>
          <div>{selectedItem.desc}</div>
          <div>
            <div className='flex items-center my-5'>
              <button className='px-8 py-2 text-base font-semibold border-gray-600 border text-center text-black'>
                Read More
              </button>
            </div>
          </div>
          <div>
            <div className='flex gap-2 md:gap-10'>
              {data.map((item) => (
                <Image
                  key={item.id}
                  src={item.imgSrc}
                  alt='aster'
                  className='w-40 h-40 cursor-pointer'
                  onClick={() => handleClick(item)}
                />
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Education;
