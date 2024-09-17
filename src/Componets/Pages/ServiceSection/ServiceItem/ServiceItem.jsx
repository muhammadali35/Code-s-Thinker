import React, { useEffect } from 'react';
import { FaShoppingCart, FaMobile, FaWordpress } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { HiSpeakerphone } from "react-icons/hi";
import { IoCameraReverseOutline } from "react-icons/io5";
import Hovimg from './../../../images/projects-2.png';
import Hovimg2 from './../../../images/projects-3.png';
import Hovimg3 from './../../../images/projects-4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id:1,
    icon: <FaShoppingCart size={35} />,
    title: 'E-Commerce Website',
    description: 'A successful e-commerce website is accessible, easily browsable, and has a safe payment method.',
    link: 'ecom',
    HovImg: Hovimg,
  },
  {
    id:2,
    icon: <CgWebsite size={35} />,
    title: 'Website Designing',
    description: 'We offer state-of-the-art, creative, secure, fast, SEO friendly, and responsive designs.',
    link: 'webdes',
    HovImg: Hovimg2,
  },
  {
    id:3,
    icon: <FaMobile size={35} />,
    title: 'Mobile Application Development',
    description: 'Mobile app development involves creating applications for mobile devices.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id:4,
    icon: <HiSpeakerphone size={35} />,
    title: 'Social Media Marketing',
    description: 'Invest in social media marketing to enhance your business’s online presence.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id:5,
    icon: <IoCameraReverseOutline size={35} />,
    title: 'Search Engine Optimization',
    description: 'Optimize your brand to be more searchable and reachable through effective SEO strategies.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
  {
    id:6,
    icon: <FaWordpress size={35} />,
    title: 'WordPress Development',
    description: 'Expert WordPress development for customized and feature-rich websites.',
    link: 'single-services.html',
    HovImg: Hovimg3,
  },
];

const ServicItem = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-16 lg:px-10 font-serif">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <h6 className="text-lg font-medium text-gray-600">What We Do</h6>
            <h2 className="text-4xl font-bold">Our Services</h2>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4" data-aos="fade-right">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              <div
                className="flex flex-col h-full bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-dotted border-2 border-[#fcbc1a]"
              >
                {/* Background image and overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 group-hover:opacity-40 opacity-0"
                  style={{ backgroundImage: `url(${service.HovImg})` }}
                >
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="relative z-10 flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-[#f3b81b] mx-auto">
               <p className='text-white'>{service.icon}</p>
                </div>
                <h3 className="relative z-10 text-2xl font-semibold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300 text-center">
                  {service.title}
                </h3>
                <p className="relative z-10 text-gray-600 mb-4 group-hover:text-white transition-colors duration-300 text-center">
                  {service.description}
                </p>
                <div className="relative z-10 text-center mt-auto">
                  <Link to={service.link}
                    className="text-[#f3b81b] text-xl hover:underline group-hover:text-white transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicItem;
