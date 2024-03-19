import React from 'react'
import Image from "next/image"
import Detail from '@/public/images/insights/rectangleDetail.jpg'
import Rectangle3 from '@/public/images/insights/blog1.png';
import Rectangle2 from '@/public/images/insights/blog2.png';
import Rectangle1 from '@/public/images/insights/blog3.png';
import SectionTitle from '@/components/shared/sectionTitle'



const data = [
  {
    id: '1',
    description:
      'Haile Gebrselassie is considered one of the greatest runners in history, with victories and world records in almost every long-distance and middle-distance event.',
    imageSrc: Rectangle1,
  },
  {
    id: '2',
    description:
      "Ethiopia Athletics History has enjoyed a rich tradition of producing some of the world's fastest distance runners over past decades. Abebe Bikila was the star of marathon running during the 1960s.",
    imageSrc: Rectangle2,
  },
  {
    id: '3',
    description:
      "Ethiopian oldies music has enjoyed a rich tradition of producing some of the world's fastest distance runners over past decades. Abebe Bikila was the star of marathon running during the 1960s.",
    imageSrc: Rectangle3,
  },
  {
    id: '2',
    description:
      "Ethiopia Athletics History has enjoyed a rich tradition of producing some of the world's fastest distance runners over past decades. Abebe Bikila was the star of marathon running during the 1960s.",
    imageSrc: Rectangle2,
  },
];

const page = () => {
  return (
    <div>
      <div className='w-full bg-black h-20'></div>
      <div className='md:mr-40 mr-5 md:ml-48 ml-5 md:my-14 my-5'>
      <div className='flex md:mb-16 mb-5'>
        <div className='md:mr-40 mr-5'>Blogs  - Posted in  September 22, 2023</div>
        <div className='md:ml-80'>post by : Abebe Kebede</div>
      </div>
      <div className='md:text-7xl text-3xl font-bold'>How The Athletics Great Became A Business Mogul</div>
      <Image src={Detail} className='md:h-96 w-full my-8 mr-5'/>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-3 md:mb-8 mb-3'>
        <div className='md:mr-5 mr-2'>
          <h1 className='md:text-4xl text-2xl font-semibold mb-10 ml-5'>“ When you run the marathon, you run against the distance, not against the other runners and not against the time. “</h1>
          <h3>Haile Gebrselassie is a retired Ethiopian long-distance runner who is widely considered one of the greatest distance runners in history. He was born on 
            April 18, 1973, in Asella, Ethiopia. Gebrselassie achieved numerous world records and won multiple Olympic and World Championship titles during his illustrious career.</h3>
          
          <ol className='md:mt-6 mt-2'>
            <li>1. Olympic Gold Medals: Gebrselassie won the gold medal in the 10,000 meters at the 1996 Atlanta Olympics and the 2000 Sydney Olympics.</li>
            <li>2. Olympic Gold Medals: Gebrselassie won the gold medal in the 10,000 meters at the 1996 Atlanta Olympics and the 2000 Sydney Olympics.</li>
            <li>3. Olympic Gold Medals: Gebrselassie won the gold medal in the 10,000 meters at the 1996 Atlanta Olympics and the 2000 Sydney Olympics.</li>
          </ol>
          <h3 className="md:mt-8 mt-4">Gebrselassie's running career spanned over two decades, and he became an iconic figure in Ethiopian and global athletics. After retiring from competitive running, he has been involved in various business ventures and philanthropic activities.</h3>
        </div>
        <div className='md:mt-14 mt-4 md:mr-5 mr-4'>
          <h3 className='mb-5'>Haile Gebrselassie is considered one of the greatest runners in history, with victories and world records in almost every long-distance and middle-distance event.</h3>
          <div>
            <h1 className='font-bold md:mt-8 mt-4'>Born to run</h1>
            <h3>As a child growing up on a farm in Ethiopia, Haile Gebrselassie ran 10 kilometres to school each day and another 10 kilometres back home. As an adult, he ran with his left arm crooked, the effect of years spent running with books under his arm.</h3>
          </div>
          <div>
          <h1 className='font-bold md:mt-8 mt-4'>Great rivalry</h1>
          <h3>By Atlanta in 1996, Gebrselassie was the reigning world record holder at 10,000m and the twice-defending world champion. His main rival was cross-country champion Paul Tergat of Kenya. The two men dominated the final with Gebrselassie winning dramatically by just six metres. This tense rivalry was repeated in Sydney, when Gebrselassie sensationally took gold with his very last stride.</h3>
          </div>
          <div>
          <h1 className='font-bold md:mt-8 mt-4'>A change of pace</h1>
          <h3>At the 2004 Athens Games, Gebrselassie finished 5th in the 10,000m. After Athens, he concentrated on the half-marathon and the marathon, and soon became a specialist. He won many prestigious victories in the Berlin, Fukuoka and Dubai races. He even set a world record in the distance in 2007.</h3>
          </div>
          <div>
          <h1 className='font-bold md:mt-8 mt-4'>Passing on the legacy</h1>
          <h3 className='mb-6'>At the 2008 Beijing Games, Haile Gebrselassie finished sixth in the marathon. It was won by Kenenisa Bekele, who is considered to be his distance-running heir.</h3>
          </div>
        </div>
      </div>
      <SectionTitle title={'Related Blogs'} color={'black'} />
      <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
        {data.map((item) => (
          <div
            key={item.id}
            className='block max-w-[18rem] text-surface shadow-secondary-1 m-4'
          >
            <div className='relative overflow-hidden bg-cover bg-no-repeat'>
              <Image className='md:mb-7 mb-3' src={item.imageSrc} alt='the image' />
            </div>
            <div className='md:mb-7 mb-3'>
              <p className='text-base'>{item.description}</p>
            </div>
            <div className='bg-black text-center'>
              <a href='/insights/detail' className='text-white text-2xl py-2'>Read More</a>
            </div>
          </div>
        ))}
      </div>

      </div>
    </div>
  )
}

export default page;
