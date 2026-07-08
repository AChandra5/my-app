import Details from '@/components/Details';
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Image from 'next/image';
import React, { useState } from 'react';

function Main() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className='loader'>
        <Image src='/assets/Loading.gif' alt='loader' width={120} height={120} />
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className='page-shell'>
      <div className='ambient-glow' />
      <NavBar />
      <Details />
      <Projects />
      <Footer />
    </div>
  );
}

export default Main;
