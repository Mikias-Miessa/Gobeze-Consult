'use client';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-scroll'

// import Link from '../Link';
import Link from 'next/link';
import Image from 'next/image';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRunningAds } from '../../../store/adSlice';

// import { motion } from "framer-motion"
import { FaArrowLeftLong } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { LineWave } from 'react-loader-spinner';
import { FaUserCircle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
const NavBar = () => {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getRunningAds());
  //   }, []);
  const [nav, setNav] = useState(false);
  //   const [ad, setAd] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  //   const { runningAds } = useSelector((state) => state.ad);
  //   const { loading, navClasses, runningClasses } = useSelector(
  //     (state) => state.classroom
  //   );
  //   const [nav, setNav] = useState(false);
  const [subNav, setSubNav] = useState(null);

  const [sublinkClicked, setSublinkClicked] = useState(null);
  const showSubNav = (id) => {
    setSublinkClicked(id);
    // setNav(!nav);
  };
  const hideSubNav = () => {
    setSublinkClicked(null);
  };
  //   useEffect(() => {
  //     dispatch(getNavClasses());
  //   }, []);
  //   useEffect(() => {
  //     setAd(!runningAds || !runningAds.data || runningAds.data.length === 0);
  //   }, [runningAds]);
  const links = [
    {
      id: 1,
      link: '/trainings',
      name: 'Our Programs',
      subLink: 1,
    },

    {
      id: 2,
      link: '/learners',
      name: 'For Learners',
      subLink: 2,
    },
    {
      id: 3,
      link: '/enterprise',
      name: 'For Enterprise',
      subLink: null,
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // console.log(navClasses);
  // console.log(runningAds.thumbnailImage)
  return (
    <div className='fixed z-50 w-screen'>
      <div
        className={`flex justify-between items-center w-screen h-[70px] text-black fixed px-6 font-Dax ${
          isScrolled ? 'bg-white' : 'bg-transparent'
        }`}
      >
        <div className='md:ml-0 lg:ml-10'>
          {/* <h1 className='text-xl font-logo ml-4 mt-2 hover:cursor-pointer'>Mikias</h1> */}
          <Link href='/'>
            {isScrolled ? (
              <img
                src='/images/orangelogo.png'
                alt='scrolled logo'
                className='md:h-[104.34px] md:w-[240px] h-16 w-[147.68px] -mt-2'
              />
            ) : (
              <img
                src='/images/whitelogo.png'
                alt='gobeze logo'
                className='md:h-[104.34px] md:w-[240px] h-16 w-[147.68px] -mt-2'
              />
            )}
          </Link>
        </div>
        <ul className='hidden md:flex items-center gap-8 mr-28'>
          {links.map(({ id, link, name, subLink }) => (
            <li
              key={id}
              onMouseEnter={() => setModalVisible(true)}
              className='px-1 font-normal text-sm cursor-pointer capitalize hover:scale-105 duration-200 my-4 relative group flex items-center'
            >
              <Link
                href={link}
                smooth
                duration={500}
                className={`no-underline tracking-normal font-Dax ${
                  isScrolled ? 'text-black' : 'text-white'
                } md:text-xs lg:text-sm font-semibold flex items-end`}
              >
                <span>{name}</span>
                <span className='group-hover:rotate-90 duration-300 ml-1'>
                  <MdOutlineKeyboardArrowRight
                    size={20}
                    className={`${isScrolled ? 'text-black' : 'text-white'}`}
                  />
                </span>
              </Link>

              {subLink === 1 && (
                <div
                  className='absolute  -top-1 flex justify-start 2xl:-left-[550px] xl:-left-[420px] lg:-left-[340px] md:-left-[240px] transition group-hover:translate-y-5 translate-y-0
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out
                            group-hover:transform z-50 min-w-fit transform w-screen h-fit font-Dax'
                >
                  <div className='relative top-6 p-6 bg-white rounded shadow-xl flex flex-row  w-screen h-fit 2xl:gap-16 xl:gap-14 lg:gap-10 md:gap-6 justify-center'>
                    <div className='relative -left-[30px] w-[70%] h-[700px] flex justify-evenly -mt-16'>
                      <div className=' my-20 border-r flex flex-col gap-4 pl:10 xl:pl-0 xl:pr-6 pr-10 lg:w-[500px] w-[240px] '>
                        <h1 className='font-bold lg:text-lg text-base '>
                          Course
                        </h1>
                        <p className='py-2  text-left lg:text-base text-sm font-semibold text-gray-800'>
                          Get in demand tech & creative skills and transform
                          your career with our industry accredited courses
                        </p>
                        <a
                          href='/trainings'
                          className='px-1 lg:px-4 py-2 gobeze-secondary-bg rounded-sm hover:scale-105 hover:duration-300 text-white font-medium text-sm lg:text-lg lg:w-48 w-32 text-center'
                        >
                          {' '}
                          Explore Courses
                        </a>
                      </div>
                      <div className='text-center'>
                        {/* {loading ? ( */}

                        <div className='flex items-center justify-center  w-30 h-1/2'>
                          <LineWave
                            visible={true}
                            height='100'
                            width='100'
                            color='#FF7F00'
                            ariaLabel='line-wave-loading'
                            wrapperStyle={{}}
                            wrapperClass=''
                            firstLineColor='#FF7F00'
                            middleLineColor='#FF7F00'
                            lastLineColor='#FF7F00'
                          />
                        </div>
                        {/* ) : (
                          // Render content
                          <div className='text-center my-20 w-[400px] flex flex-row gap-8'></div>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {subLink === 2 && (
                <div
                  className='absolute  -top-1 flex justify-start 2xl:-left-[700px] xl:-left-[560px] lg:-left-[500px] md:-left-[400px] transition group-hover:translate-y-5 translate-y-0
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out
                    group-hover:transform z-50 min-w-fit transform w-screen h-fit'
                >
                  <div className='relative top-6 p-6 bg-white rounded shadow-xl flex flex-row w-screen h-fit 2xl:gap-16 xl:gap-14 lg:gap-10 md:gap-6 justify-evenly'>
                    <div className='relative -left-[30px] w-[70%] h-[700px] flex justify-evenly -mt-16'>
                      <div className=' my-20 flex flex-col gap-4 pl-10  '>
                        <div className='flex flex-col gap-8 ml-8 mt-5 '>
                          <div className='flex flex-col items-start gap-2 text-start'>
                            <h1 className='font-bold lg:text-lg text-base'>
                              Career Services
                            </h1>
                            <a
                              href='/learners#career'
                              className='text-gray-700 lg:text-base text-sm opacity-60 hover:opacity-100'
                            >
                              Coaching
                            </a>
                            <a
                              href='/learners#hero'
                              className='text-gray-700 lg:text-base text-sm opacity-60 hover:opacity-100'
                            >
                              Mentorship
                            </a>
                            <a
                              href='/learners#gosra'
                              className='text-gray-700 lg:text-base text-sm opacity-60 hover:opacity-100'
                            >
                              Job matching
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='border-r h-[60%] w-1 self-center'></div>
                      <div className=' text-center my-20'>
                        <div className='flex flex-col gap-8  mt-4 '>
                          <div className='flex flex-col items-start gap-4 text-start'>
                            <h1 className='font-bold lg:text-lg text-base'>
                              Learning Paths
                            </h1>
                            <h1 className='text-black text-base opacity-90 font-medium'>
                              Entrepreneurship Track
                            </h1>
                            <a
                              href='/learners#learningpath'
                              className='text-gray-700 lg:text-base text-sm opacity-60 hover:opacity-100 ml-5'
                            >
                              Become a Tech Entrepreneur
                            </a>
                            <a
                              href='/learners#learningpath'
                              className='text-gray-700 lg:text-base text-sm opacity-60 hover:opacity-100 ml-5'
                            >
                              Become a Creative Entrepreneur
                            </a>
                            <h1 className='text-black text-base opacity-90 font-medium'>
                              Career Track
                            </h1>
                            <a
                              href='/learners#learningpath'
                              className='text-gray-700 lg:text-base text-sm opacity-60 hover:opacity-100 ml-5'
                            >
                              Software Engineer
                            </a>
                            <a
                              href='/learners#learningpath'
                              className='text-gray-700 lg:text-base text-sm opacity-60 hover:opacity-100 ml-5'
                            >
                              Data Analyst
                            </a>
                            <a
                              href='/learners#learningpath'
                              className='text-gray-700 lg:text-base text-sm opacity-60 hover:opacity-100 ml-5'
                            >
                              Creative Director
                            </a>
                            <h1 className='text-black text-base opacity-90 font-medium'>
                              Gig Economy Track
                            </h1>
                            <a
                              href='/learners#learningpath'
                              className='text-gray-700 lg:text-base text-sm opacity-60 hover:opacity-100 ml-5'
                            >
                              Become a Freelance
                            </a>
                            {/* <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100 ml-5'>Become a Creative Entrepreneur</a> */}
                          </div>
                        </div>
                      </div>
                      <div className='border-r h-[60%] w-1 self-center'></div>
                      <div className='col-span-1 text-center  my-20'>
                        <div className='flex flex-col gap-8  mt-4'>
                          <div className='flex flex-col items-start gap-4 text-start'>
                            <h1 className='font-bold lg:text-lg text-base'>
                              ALUMNI
                            </h1>
                            <a
                              href='/learners#alumni'
                              className='text-gray-700 lg:text-base text-sm opacity-60 hover:opacity-100'
                            >
                              Volunteer
                            </a>
                            <a
                              href='/learners#events'
                              className='text-gray-700 lg:text-base text-sm opacity-60 hover:opacity-100'
                            >
                              Events
                            </a>
                            <a
                              href='/learners#alumni'
                              className='text-gray-700 lg:text-base text-sm opacity-60 hover:opacity-100'
                            >
                              Career resources
                            </a>
                            <a
                              href='/learners#alumni'
                              className='text-gray-700 lg:text-base text-sm opacity-60 hover:opacity-100'
                            >
                              Verify a certificate
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* {subLink===3 && 
                        <div className="absolute -top-1 -left-[770px] transition group-hover:translate-y-5 translate-y-0
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out
                            group-hover:transform z-50 min-w-fit transform w-screen h-fit">
                            <div className="relative top-6 p-6 bg-white rounded shadow-xl grid grid-cols-3 w-[1520px] h-fit">
                                    <div className='col-span-1  my-20 border-r flex flex-col gap-4 pl-32 pr-6 '>
                                        <div className='flex flex-col gap-8 ml-8 mt-5 '>
                                                    <div className='flex flex-col items-start gap-4 text-start'>
                                                        <h1 className='font-bold text-lg'>BUSINESS</h1>
                                                        <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Etiquette</a>
                                                    </div>
                                                    <div className='flex flex-col items-start gap-4 text-start'>
                                                        <h1 className='font-bold text-lg'>CODING</h1>
                                                        <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Web Development</a>
                                                        <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Python</a>
                                                    </div>
                                                    <div className='flex flex-col items-start gap-4 text-start'>
                                                        <h1 className='font-bold text-lg'>DESIGN</h1>
                                                        <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Graphic Design</a>
                                                        <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Motion Graphics</a>
                                                        <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Product Design</a>
                                                                    
                                                    </div>
                                                    
                                                    </div>
                                    </div>
                                    <div className='col-span-1 text-center my-20'>
                                       
                                            <div className='flex flex-col gap-8 ml-8 mt-4 '>
                                                    <div className='flex flex-col items-start gap-4 text-start'>
                                                        <h1 className='font-bold text-lg'>BUSINESS</h1>
                                                        <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Etiquette</a>
                                                    </div>
                                                    <div className='flex flex-col items-start gap-4 text-start'>
                                                        <h1 className='font-bold text-lg'>CODING</h1>
                                                        <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Web Development</a>
                                                        <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Python</a>
                                                    </div>
                                                    <div className='flex flex-col items-start gap-4 text-start'>
                                                        <h1 className='font-bold text-lg'>DESIGN</h1>
                                                        <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Graphic Design</a>
                                                        <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Motion Graphics</a>
                                                        <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Product Design</a>
                                                                    
                                                    </div>
                                                    
                                                    </div>
                                    </div>
                                    <div className='col-span-1 text-center border-l my-20'>
                                       <div className='flex flex-col gap-8 ml-8 mt-4'>
                                        <div className='flex flex-col items-start gap-4 text-start'>
                                            <h1 className='font-bold text-lg'>FINANCE</h1>
                                            <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Book keeping for startups</a>
                                            <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Finance for non- financial managers</a>
                                        </div>
                                        <div className='flex flex-col items-start gap-4 text-start'>
                                            <h1 className='font-bold text-lg'>MARKETING</h1>
                                            <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Digital Marketing</a>
                                            <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>SEO</a>
                                        </div>
                                        <div className='flex flex-col items-start gap-4 text-start' >
                                            <h1 className='font-bold text-lg'>PROFESSIONAL DEV.</h1>
                                            <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Leadership</a>
                                            <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Communication</a>
                                            <a href="#" className='text-gray-700 text-base opacity-60 hover:opacity-100'>Customer Service</a>
                                        </div>
                                        </div>
                                    </div>
                                    
                           
                            </div>
                            </div>
                        } */}
            </li>
          ))}
        </ul>
        <div className='hidden md:flex gap-4 items-center mr-20'>
          <a href='#'>
            <FaFacebook
              size={20}
              className={`${isScrolled ? 'text-black' : 'text-white'}`}
            />{' '}
          </a>
          <a href='#'>
            <FaXTwitter
              size={20}
              className={`${isScrolled ? 'text-black' : 'text-white'}`}
            />{' '}
          </a>
          <a href='#'>
            <FaTiktok
              size={20}
              className={`${isScrolled ? 'text-black' : 'text-white'}`}
            />{' '}
          </a>
          <a href='#'>
            <FaInstagram
              size={20}
              className={`${isScrolled ? 'text-black' : 'text-white'}`}
            />{' '}
          </a>
        </div>
        <div
          className='cursor-pointer pr-4 z-10 text-orange-500 md:hidden'
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        {nav && (
          <ul className='flex flex-col items-start absolute top-16 left-0 w-full h-fit bg-opacity-90 z-50 bg-gray-50 shadow-md font-Montserrat'>
            <div className='flex justify-between px-4 w-full border-b border-orange-500 pb-4 items-center'>
              <a href='#'>
                <FaFacebook size={30} className='text-gray-500' />{' '}
              </a>
              <a href='#'>
                <FaXTwitter size={30} className='text-gray-500' />{' '}
              </a>
              <a href='#'>
                <FaTiktok size={30} className='text-gray-500' />{' '}
              </a>
              <a href='#'>
                <FaInstagram size={30} className='text-gray-500' />{' '}
              </a>
              {/* <a
                href='/contact'
                className=' border-orange-500 border hover:bg-orange-500 hover:text-white  px-4 py-2 font-light text-orange-500 text-sm rounded h-9 md:mr-12 w-[130px] flex justify-center items-center'
              >
                Contact Us
              </a> */}
            </div>
            {links.map(({ id, name, subLink }) => (
              <li
                key={id}
                className='px-4 cursor-pointer capitalize py-2 text-xl hover:scale-105 duration-200'
              >
                <div
                  onClick={() => showSubNav(subLink)}
                  className='no-underline font-Montserrat'
                >
                  {name}
                </div>
              </li>
            ))}
          </ul>
        )}
        {/* Full-screen pages based on sublink and link id */}
        {sublinkClicked !== null && (
          <div
            className={
              sublinkClicked === 1
                ? 'bg-white h-fit w-screen fixed top-0 left-0 z-50 shadow-lg'
                : sublinkClicked === 2
                ? 'bg-white h-fit w-screen fixed top-0 left-0 z-50 shadow-lg'
                : // : sublinkClicked === 3
                  // ? 'bg-green-500 h-screen w-screen fixed top-0 left-0 z-50'
                  ''
            }
          >
            {/* You can add content for the full-screen page here */}
            {/* Example content */}
            <div className='text-white text-center py-5 '>
              {sublinkClicked === 1 && (
                <div className='flex justify-start px-3 flex-col'>
                  <button onClick={hideSubNav} className=' text-black'>
                    <FaArrowLeftLong size={20} />
                  </button>
                  <div className='flex flex-col pt-5 mt-2 items-start gap-3 '>
                    <h1 className='text-black mt-2 font-bold'>Courses</h1>
                    <p className='text-gray-400 font-semibold text-start text-sm'>
                      Get in demand tech & creative skills and transform your
                      career with our industry accredited courses
                    </p>
                    <a
                      href='/trainings'
                      className=' flex justify-center items-center px-2 py-2 gobeze-secondary-bg rounded-sm hover:scale-105 hover:duration-300 text-white font-medium text-sm w-[110px] text-center'
                    >
                      Explore More
                    </a>
                  </div>
                  <div className='flex justify-center items-center '>
                    {loading ? (
                      <div>
                        <LineWave
                          visible={true}
                          height='100'
                          width='100'
                          color='#FF7F00'
                          ariaLabel='line-wave-loading'
                          wrapperStyle={{}}
                          wrapperClass=''
                          firstLineColor='#FF7F00'
                          middleLineColor='#FF7F00'
                          lastLineColor='#FF7F00'
                        />
                      </div>
                    ) : (
                      <div className='flex flex-row flex-wrap pt-5 mt-2  gap-4 '>
                        {Object.keys(navClasses).map((category, index) => (
                          <div
                            key={index}
                            className='flex flex-col pt-5 items-start gap-1 text-start '
                          >
                            <h1 className='font-semibold text-sm text-black'>
                              {category}
                            </h1>
                            {navClasses[category].map((course, courseIndex) => (
                              <a
                                key={courseIndex}
                                href={course.slug}
                                className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-2 w-44 leading-tight py-1'
                              >
                                {course.courseName}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
              {sublinkClicked === 2 && (
                <div className='flex justify-start px-3 flex-col'>
                  <button onClick={hideSubNav} className=' text-black'>
                    <FaArrowLeftLong size={20} />
                  </button>

                  <div className='flex justify-start '>
                    <div className='flex flex-wrap pt-5 mt-2  items-start gap-x-28 gap-y-10 '>
                      <div className='flex flex-col justify-start items-start'>
                        <h1 className='font-semibold text-sm text-black'>
                          Career Services
                        </h1>
                        <a
                          href='/learners#career'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-2'
                        >
                          Coaching
                        </a>
                        <a
                          href='/learners#hero'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-2'
                        >
                          Mentorship
                        </a>
                        <a
                          href='/learners#gosra'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-2'
                        >
                          Job matching
                        </a>
                      </div>

                      <div className='flex flex-col  items-start gap-1 text-start'>
                        <h1 className='font-semibold text-sm text-black'>
                          Alumni
                        </h1>
                        <a
                          href='/learners#alumni'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-2'
                        >
                          Volunteer
                        </a>
                        <a
                          href='/learners#events'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-2'
                        >
                          Event
                        </a>
                        <a
                          href='/learners#alumni'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-2'
                        >
                          Career Resources
                        </a>
                      </div>
                      <div className='flex flex-col items-start gap-1 text-start'>
                        <h1 className='font-semibold text-sm text-black'>
                          Learning Paths
                        </h1>
                        <h1 className='font-semibold text-sm text-gray-800 pl-2'>
                          Entrepreneurship Track
                        </h1>

                        <a
                          href='/learners#learningpath'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-4'
                        >
                          Web development
                        </a>
                        <a
                          href='/learners#learningpath'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-4'
                        >
                          Python
                        </a>
                        <h1 className='font-semibold text-sm text-gray-800 pl-2'>
                          Career Track
                        </h1>

                        <a
                          href='/learners#learningpath'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-4'
                        >
                          Software Engineer
                        </a>
                        <a
                          href='/learners#learningpath'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-4'
                        >
                          Data Analyst
                        </a>
                        <a
                          href='/learners#learningpath'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-4'
                        >
                          Creative Director
                        </a>
                        <h1 className='font-semibold text-sm text-gray-800 pl-2'>
                          Design
                        </h1>

                        <a
                          href='/learners#learningpath'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-2'
                        >
                          Graphic Design
                        </a>
                        <a
                          href='/learners#learningpath'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-2'
                        >
                          Motion Graphics
                        </a>
                        <a
                          href='/learners#learningpath'
                          className='text-gray-700 text-sm opacity-80 hover:opacity-100 pl-2'
                        >
                          Product Design
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* {sublinkClicked === 3 && (
                <h1 className='text-black'>Green Background Page</h1>
              )} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
