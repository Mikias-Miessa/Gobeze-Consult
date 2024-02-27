import Image from 'next/image';
<<<<<<< HEAD:app/page.js
import Hero from './(root)/page';
import Feature from "@/components/home/benefit"
=======
import Hero from '../app/(root)/page';
>>>>>>> aceb15e29dd1b71bd9b125648e372a18caf8e097:public/page.js
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/* <Hero /> */}
      <Feature/>
    </main>
  );
}
