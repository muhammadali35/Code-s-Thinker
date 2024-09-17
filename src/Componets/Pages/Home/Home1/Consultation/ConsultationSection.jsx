import React from 'react';

const ConsultationSection = () => {
  return (
    <section className="py-12 bg-[#1A2147]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="lg:w-2/3 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">We’re here to help and answer any question you might have.</h2>
            <p className=" mb-6">Free Consultation About Our IT Solutions For Your Business</p>
            <a href="tel:080707555321" className="bg-blue-500 text-white py-2 px-6  hover:bg-blue-600 transition">
              Let’s Talk Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationSection;