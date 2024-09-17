import React, { useEffect } from 'react';
import './Wellcome.css'; // If you need additional custom styles

import backgroundImage from './../../../images/computer.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Wellcome = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='relative min-h-screen flex flex-col justify-center items-center p-4 bg-cover bg-center font-serif' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='absolute inset-0  bg-[#214b6e]  opacity-75' aria-hidden='true'></div>
      <div className='relative w-full max-w-3xl mx-auto text-center space-y-5 font-serif' data-aos="fade-down-right">
        <h1 className='text-white text-3xl md:text-4xl lg:text-5xl' data-aos="flip-up">
          WELCOME TO CODES THINKER
        </h1>
        <div className=''>
          <h1 className='text-white md:text-3xl lg:text-5xl'>
            TURN IDEAS INTO REALITY
          </h1>
        </div>
        <h3 className='text-white text-base md:text-lg lg:text-2xl text-justify'>
        Success is a multifaceted concept that varies widely depending on individual goals, values, and contexts.
        </h3>
          <div className='space-x-3'>
            <Link>
        <button className='bg-[#f8d022] p-2 md:p-3 w-32 md:w-40 text-white rounded-full font-bold'>
          Contact Us
        </button>
        </Link>
         <Link>
        <button className='bg-[#f8d022] p-2 md:p-3 w-32 md:w-40 text-white rounded-full font-bold'>
          Services
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Wellcome;
