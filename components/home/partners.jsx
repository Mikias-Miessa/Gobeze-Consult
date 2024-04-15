'use client'
import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/shared/sectionTitle';
import Rectangle1 from '@/public/images/firstConsult.png';
import Rectangle2 from '@/public/images/firstconsult2.png';
import Logo1 from '@/public/images/partnerLogo1.png';
import Logo2 from '@/public/images/britishC.png';
import { FiArrowRight } from 'react-icons/fi';
import { Bars } from 'react-loader-spinner';
import {getAllPartners,selectAllPartners,selectLoading} from '@/store/partnerSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Partners() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPartners());
  }, []);
  const partners = useSelector(selectAllPartners);
  const loading = useSelector(selectLoading);
  // console.log(partners);

  // const data = [
  //   {
  //     id: 1,
  //     name: "First Consult",
  //     imageLogo: Logo1,
  //     description: 'First Consult is a leading economic development consulting firm implementing projects in Ethiopia.',
  //     image: Rectangle1,
  //   },
  //   {
  //     id: 2,
  //     name: "British Council",
  //     imageLogo: Logo2,
  //     description: 'First Consult is a leading economic development consulting firm implementing projects in Ethiopia.',
  //     image: Rectangle2,
  //   },
  // ];
  if (loading) {
    return (
      <div className=' h-screen bg-white flex justify-center items-center'>
        <Bars
          height='40'
          width='40'
          color='#FF7F00'
          ariaLabel='bars-loading'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className='bg-black md:px-28 px-5 py-32'>
      <div>
        <SectionTitle title={'OUR PARTNERS'} color={'white'} />
        
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-16 text-white mt-14'>
        {partners.map((item) => (
          <div key={item.id} className='bg-white text-black border border-orange-500 grid grid-cols-5'>
            <div className='col-span-3 h-full flex flex-col justify-between'>
              <div>
                <img src={item.logo} alt='companyLogo' className='pl-20 pt-4' />
                <h3 className='ml-5 mr-2 mt-4 pt-5 pl-5'>
                  <span className='font-extrabold'>{item.name}</span> is a leading economic development consulting firm implementing projects in Ethiopia.
                </h3>
              </div>
              <button className='bg-black text-white flex items-center w-full px-5 py-4 pl-20'>
                Learn More <FiArrowRight className='ml-3' size={20} />
              </button>
            </div>
            <div className='col-span-2'>
              <img src={item.image && item.image} alt={`partner${item.id}`} className='h-full' />
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Partners;
