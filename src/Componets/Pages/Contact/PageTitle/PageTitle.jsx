import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageTit from './../../../images/Itwork2.png'
 import { Link } from 'react-router-dom';
 import { IoIosArrowForward } from "react-icons/io";
const PageTitle = ({title,Sub}) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-[#162466]  py-32 font-serif "
    style={{
      backgroundImage: `url(${PageTit})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
          <div className='absolute top-[80px] h-[20rem] inset-0 bg-[#214b6e] opacity-50 ' aria-hidden='true'></div>
          <div className="flex  flex-col items-center justify-center" data-aos="fade-right">
            <div className="flex  space-x-5">
              <h1 className="text-white text-3xl font-bold font-serif">{title}</h1>
            </div>
            <div className='flex  justify-center" data-aos="fade-right"'>
               <div className='flex'>
               <Link className="text-[#fad367] px-3 ">Home</Link>
                 <IoIosArrowForward  size={20} className='mt-1 text-[#fad367]'/>
               </div>
                <Link className="text-[#fad367] px-3 ">{Sub}</Link>
               </div>
          </div>
        
    
    </div>
  );
};

export default PageTitle