import React, { useEffect } from 'react';
import backgroundImage3 from "./../../../images/frontimg3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeWell3 = () => {
  useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);

  return (
    <div
      className='relative w-full h-screen text-center px-4 flex items-center justify-center font-serif'
      style={{
        backgroundImage: `url(${backgroundImage3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0  bg-[#3080b9]  opacity-70' aria-hidden='true'></div>

      <div className='relative z-10 w-full max-w-4xl flex flex-col items-center justify-center space-y-8' data-aos="fade-up">
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold px-4 md:px-10'>
          Technology’s future depends on innovators
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-white px-4 md:px-10 lg:px-20 text-justify'>
          We are passionate about bringing enterprise-level productivity, scalability, and security to small and medium businesses.
        </p>
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
          <button className='bg-[#5764ec] p-4 md:p-5 rounded-lg text-white'>
            How it Works
          </button>
          <button className='bg-[#5764ec] p-4 md:p-5 rounded-lg text-white'>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeWell3;
