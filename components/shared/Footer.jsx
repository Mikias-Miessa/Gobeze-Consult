import React from 'react';
import LogoF from '@/public/images/logof.png';
import Image from 'next/image';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='footer bg-black px-32 pb-20'>
      <div className='container grid md:grid-cols-3 grid-cols-1 text-white'>
        <div className='pt-10'>
          <Image src={LogoF} alt='LogoFooter' height={80} width={80} />
        </div>
        <div className='pt-16 text-gray-400'>@ 2018 - 2024 Gobeze Consult</div>
        <div className='pt-16 flex flex-row gap-4'>
          <div>
            <FaInstagram size={20} />
          </div>
          <div>
            <FaFacebookSquare size={20} />
          </div>
          <div>
            <FaXTwitter size={20} />
          </div>
          <div>
            <FaTiktok size={20} />
          </div>
        </div>
      </div>
      <div className='py-10 text-gray-400'>
        <hr className='text-gray-400' />
      </div>

      <div className='grid md:grid-cols-5 grid-cols-2 text-white justify-center'>
        <div>
          <h1 className='font-bold text-2xl'>Title</h1>
          <h3 className='text-gray-400 py-5'>Option1</h3>
          <h3 className='text-gray-400 '>Option1</h3>
          <h3 className='text-gray-400 py-5'>Option1</h3>
        </div>

        <div>
          <h1 className='font-bold text-2xl'>Title</h1>
          <h3 className='text-gray-400 py-5'>Option1</h3>
          <h3 className='text-gray-400'>Option1</h3>
          <h3 className='text-gray-400 py-5'>Option1</h3>
        </div>

        <div>
          <h1 className='font-bold text-2xl'>Title</h1>
          <h3 className='text-gray-400 py-5'>Option1</h3>
          <h3 className='text-gray-400'>Option1</h3>
          <h3 className='text-gray-400 py-5'>Option1</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
