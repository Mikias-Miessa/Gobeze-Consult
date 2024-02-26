import React from 'react';
import { ImagesSlider } from './imageSlider';

// const overlay = () => {
//   return (
//     <div className='h-screen flex items-center'>
//       <div className='w-[30%] h-40 bg-orange-500'>
//         <h1>Helping Good People WIN.</h1>
//       </div>
//     </div>
//   );
// };
const Landing = () => {
  const Image = ['/images/image1.jpg', '/images/image2.jpg'];

  return (
    <div className='h-screen '>
      <ImagesSlider autoplay={true} images={Image} overlay={false} />
    </div>
  );
};

export default Landing;
