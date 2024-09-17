import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Sample data for counters
const counters = [
  {
    id: 1,
    number: '20',
    unit: '+',
    heading: 'Years In Business',
  },
  {
    id: 2,
    number: '1.2',
    unit: 'k',
    heading: 'Projects Completed',
  },
  {
    id: 3,
    number: '750',
    unit: '+',
    heading: 'Reviews',
  },
  {
    id: 4,
    number: '150',
    unit: '+',
    heading: 'Team Members',
  },
];

const CounterArea = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="py-10 bg-[#F2F0F7] font-serif">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4" data-aos="fade-right">
          {counters.map(counter => (
            <div key={counter.id} className="w-full lg:w-1/4 md:w-1/2 px-4 mb-8">
              <div className=" p-6 rounded-lg ">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-800">
                    <span className="counter-number">{counter.number}</span>
                    <span>{counter.unit}</span>
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-600 mt-2">
                    {counter.heading}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterArea;