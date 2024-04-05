"use client"
import React, { useEffect } from 'react';
import Sidebar from '@/components/shared/admin/sidebar';
import Navbar from '@/components/shared/admin/navbar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'

const TheLayout = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; 
    if (!session) router.replace('/login'); 
  }, [session, status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  const renderSidebar = session ? (
    <>
      <Sidebar />
    </>
  ) : null;

  const renderNavbar = session ? (
    <>
      <Navbar />
    </>
  ) : null;

  return (
    <div className='flex flex-row bg-neutral-300 h-screen w-screen'>
      {renderSidebar}
      <div className='flex-1 h-screen flex flex-col'>
        {renderNavbar}
        <div className='min-h-0 overflow-auto'>{children}</div>
      </div>
    </div>
  );
};

export default TheLayout;
