'use client';
// const { cn } = require('@/utils/cn');
// const { motion, AnimatePresence } = require('framer-motion');
// const React = require('react');
// const { useEffect, useState } = React;
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = 'up',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages);
        setLoading(false);
      })
      .catch((error) => console.error('Failed to load images', error));
  };

  useEffect(() => {
    // autoplay
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoplay]);
  // Make sure to include 'autoplay' in the dependency array if it's being referenced inside useEffect

  useEffect(() => {}, []);

  const slideVariants = {
    initial: {
      //   scale: 0,
      opacity: 0,
      //   rotateX: 0,
      x: '100%',
    },
    visible: {
      //   scale: 1,
      rotateX: 0,
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        // ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      x: '-100%',
      transition: {
        duration: 1,
      },
    },
    // downExit: {
    //   opacity: 1,
    //   x: '150%',
    //   transition: {
    //     duration: 2,
    //   },
    // },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        'overflow-hidden h-full w-full relative flex items-center ',
        className
      )}
      style={{
        perspective: '1000px',
      }}
    >
      {areImagesLoaded && (
        <div className='z-10 md:w-[50%] w-[90%] flex flex-col absolute pt-40'>
          <div className='flex justify-center items-center z-10 md:h-32 h-24 bg-orange-500 relative -bottom-10'>
            <h1 className='text-white md:text-5xl text-2xl font-semibold'>
              Helping Good People WIN.
            </h1>
          </div>
          <div className='bg-black opacity-70 h-fit relative md:left-20 left-10'>
            <p className='text-white pt-12 px-10 pb-5 md:text-2xl text-xl font-medium '>
              What does Abebe Bikila and the Battle of Adwa have in common?
              Underdogs, good people winning{' '}
            </p>
          </div>
        </div>
      )}
      {areImagesLoaded && overlay && (
        <div
          className={cn('absolute inset-0 bg-black/60 z-40', overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial='initial'
            animate='visible'
            exit={direction === 'up' ? 'upExit' : 'downExit'}
            variants={slideVariants}
            className='image h-full w-full absolute inset-0 object-cover object-center'
          />
        </AnimatePresence>
      )}
    </div>
  );
};

module.exports = { ImagesSlider };
