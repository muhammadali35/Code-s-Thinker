import React, { useEffect } from 'react';
import backgroundImage2 from './../../../images/frontimg2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeWell2 = () => {
  useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);

  return (
    <div 
      className='relative w-full h-screen flex items-center justify-center text-center px-4 font-serif'
      style={{
        backgroundImage: `url(${backgroundImage2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-[#3080b9] opacity-60' aria-hidden='true'></div>

      <div 
        className='relative z-10 w-full max-w-4xl flex flex-col items-center justify-center space-y-8'
        data-aos="fade-down-right"
      >
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold px-4 md:px-10'>
          We Provide Best Technology Solutions
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-white px-4 md:px-10 text-justify'>
          We are passionate about bringing enterprise-level productivity, scalability, and security to small and medium businesses.
        </p>
        <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0'>
          <button className='bg-[#5764ec] p-4 rounded-lg text-white'>
            How it Works
          </button>
          <button className='bg-[#5764ec] p-4 rounded-lg text-white'>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeWell2;
