import React,{useEffect} from 'react';
import icon1 from '../../../images/icon-1.jpg';
import icon2 from '../../../images/icon-2.jpg';
import icon3 from '../../../images/icon-3.jpg';
import icon4 from '../../../images/icon-4.jpg';
import icon5 from '../../../images/icon-5.jpg';
import icon6 from '../../../images/icon-6.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const whyChooseData = [
  {
    icon: icon1,
    title: 'Protect your Business',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore',
  },
  {
    icon: icon2,
    title: 'Network Monitoring',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore',
  },
  {
    icon: icon3,
    title: 'Network Security',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore',
  },
  {
    icon: icon4,
    title: 'Managed IT Service',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore',
  },
  {
    icon: icon5,
    title: 'Dedicated IT Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore',
  },
  {
    icon: icon6,
    title: 'Custom Developed Software',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore',
  },
];

const WhyChooseUsHom1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-16 lg:px-10 bg-gray-100 font-serif">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-lg text-gray-600">TechSoft So Different?</h6>
          <h2 className="text-4xl font-bold">Why Trust Us?</h2>
        </div>
        <div className="flex flex-wrap -mx-4 " data-aos="fade-right">
          {whyChooseData.map((item, index) => (
            <div key={index} className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <img src={item.icon} alt="svg icon" className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">{item.title}</h3>
                <p className="text-gray-700 text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsHom1;