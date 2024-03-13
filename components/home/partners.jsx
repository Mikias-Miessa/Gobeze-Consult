import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/shared/sectionTitle';
import Rectangle1 from '@/public/images/partner1.png';
import Logo1 from '@/public/images/partnerLogo1.png';
import { FiArrowRight } from 'react-icons/fi';

function Partners() {
  const data = [
    {
      id: 1,
      imageLogo: Logo1,
      description: 'First Consult is a leading economic development consulting firm implementing projects in Ethiopia.',
      image: Rectangle1,
    },
    {
      id: 2,
      imageLogo: Logo1,
      description: 'First Consult is a leading economic development consulting firm implementing projects in Ethiopia.',
      image: Rectangle1,
    },
    // {
    //     id: 3,
    //     imageLogo: Logo1,
    //     description: 'First Consult is a leading economic development consulting firm implementing projects in Ethiopia.',
    //     image: Rectangle1,
    //   },
    //   {
    //     id: 4,
    //     imageLogo: Logo1,
    //     description: 'First Consult is a leading economic development consulting firm implementing projects in Ethiopia.',
    //     image: Rectangle1,
    //   },
  ];

  return (
    <div className='bg-black md:px-28 px-5 md:py-20 py-5'>
      <div>
        <SectionTitle title={'OUR PARTNERS'} color={'white'} />
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-16 text-white mt-14'>
        {data.map((partner) => (
          <div key={partner.id} className='bg-white text-black border border-orange-500 grid grid-cols-5'>
            <div className='col-span-3 h-full'>
              <Image src={partner.imageLogo} alt='companyLogo' className='pl-20 pt-4' />
              <h3 className='ml-5 mr-2 mt-4 pt-5 pl-5'>
                <span className='font-extrabold'>First Consult</span> is a leading economic development consulting firm implementing projects in Ethiopia.
              </h3>
              <button className='bg-black text-white flex items-center w-full mt-28 px-5 py-4 pl-20'>
                Learn More <FiArrowRight className='ml-3' size={20} />
              </button>
            </div>
            <div className='col-span-2'>
              <Image src={partner.image} alt={`partner${partner.id}`} className='h-full' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
