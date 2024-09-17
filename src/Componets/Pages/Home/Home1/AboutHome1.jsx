import React, { useEffect } from 'react';
import aboutImage from '../../../images/about.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutHome1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="bg-gray-100 py-16 lg:px-10 font-serif" >
      <div className="container mx-auto px-4 " data-aos="fade-right">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 px-4">
            <div className="mb-8 lg:mb-0">
              <h6 className="text-lg text-gray-600">IT Solution Company</h6>
              <h2 className="text-4xl font-bold mt-4">
                We design, develop, implement and support <span className="text-indigo-600">IT Systems</span>
              </h2>
              <p className="text-gray-700 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit velit.
              </p>
              <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-indigo-600">
                  We are a highly trained and qualified team ready to provide viable IT solutions together with full-time support and expert advice to fulfill your business needs.
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={aboutImage} alt="About us" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome1;