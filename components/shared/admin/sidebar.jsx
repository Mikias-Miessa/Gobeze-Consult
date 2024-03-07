'use client';
// import { Link, useLocation } from 'react-router-dom';
import Link from 'next/link';
import classNames from 'classnames';
import { FaPeace } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { DashboardBottom, DashboardTop } from '../../../constants/sidebarLinks';
import { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
const linkClasses =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-200 hover:no-underline active:bg-neutral-100 rounded-md text-base';

function Sidebar() {
  const logoutHandler = () => {
    // Handle logout logic here
  };

  return (
    <div className='flex flex-col bg-gray-100 md:w-80 w-20 p-3'>
      <div className='flex justify-center items-center gap-2 px-1 '>
        {/* <FaPeace fontSize={24} className='text-blue-500 text-5xl' />
        <span className='text-2xl font-bold hidden md:inline'>
          Kelal Dashboard
        </span> */}
        <Image
          src='/images/orangelogo.png'
          width={160}
          height={100}
          alt='logo'
        />
      </div>
      <div className='flex-1 overflow-y-auto '>
        <div className='grid grid-cols-1 gap-1 '>
          {DashboardTop.map((item) => {
            return <SidebarLink key={item.key} item={item} />;
          })}
        </div>
      </div>

      <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
        {DashboardBottom.map((item) => {
          return <SidebarLink key={item.key} item={item} />;
        })}
        <div
          onClick={logoutHandler}
          className={classNames('text-red-500 cursor-pointer', linkClasses)}
        >
          <span className='text-2xl'>
            <HiOutlineLogout />
          </span>
          <span className='hidden md:inline text-base font-bold'> Logout</span>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  //   const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (!item.sublinks || item.sublinks.length === 0) {
    return (
      <Link
        href={item.path}
        className='block py-2 text-xs font-medium hover:bg-slate-200 pl-2'
      >
        <div
          className={classNames(
            'flex items-center justify-between px-4 py-2 cursor-pointer',
            { 'bg-neutral-200': pathname === item.path }
          )}
          onClick={toggleDropdown}
        >
          <div className='flex items-center'>
            <span className='mr-2 text-xl text-blue-500'>{item.icon}</span>
            <span className='hidden md:inline text-sm font-semibold'>
              {item.label}
            </span>
          </div>
          {item.sublinks && item.sublinks.length > 0 && (
            <span>
              {isOpen ? (
                <FaChevronUp className='text-sm text-slate-400' />
              ) : (
                <FaChevronDown className='text-sm text-slate-400' />
              )}
            </span>
          )}
        </div>
      </Link>
    );
  }

  return (
    <div className='hover:bg-slate-200'>
      <div
        className={classNames(
          'flex items-center justify-between px-6 py-2 cursor-pointer ',
          { 'bg-white': isOpen }
        )}
        onClick={toggleDropdown}
      >
        <div className='flex items-center'>
          <span className='mr-2 text-xl text-blue-500'>{item.icon}</span>
          <span className='hidden md:inline text-sm font-semibold'>
            {item.label}
          </span>
        </div>
        {item.sublinks && item.sublinks.length > 0 && (
          <span>
            {isOpen ? (
              <FaChevronUp className='text-sm text-slate-400' />
            ) : (
              <FaChevronDown className='text-sm text-slate-400' />
            )}
          </span>
        )}
      </div>
      {isOpen && item.sublinks && item.sublinks.length > 0 && (
        <div className='pl-8'>
          {item.sublinks.map((sublink) => (
            <Link
              key={sublink.key}
              href={sublink.path}
              className={classNames(
                'block py-2 text-xs font-medium hover:bg-slate-100 pl-2',
                {
                  'bg-neutral-200': pathname === sublink.path,
                }
              )}
            >
              {sublink.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
