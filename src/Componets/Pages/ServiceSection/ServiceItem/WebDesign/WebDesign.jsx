import React from 'react';
import Contact1 from '../../../images/contact.png'

const ContactForm = () => {
  return (
    <section className="">
      <div className=" mx-auto px-4 font-serif">
        <div className="text-center mb-20 mt-20">
          <h6 className="text-lg font-semibold text-red-600">LET’S GET TO WORK</h6>
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <div className="bg-white p-8  rounded-lg">
              <img src={Contact1} alt="Contact" className="w-full h-auto mb-4 rounded-md" />
              <p className="text-gray-700 mb-4">
                We provide estimates by phone, email, or at your home. The estimate is completely free! Fill out the form, call us <span className="text-blue-500">+707 555-321</span> or <span className="text-blue-500">random@example.com</span>, and leave your telephone number and home address.
              </p>
              <p className="text-gray-700">
                We look forward to hearing from you!
              </p>
            </div>
          </div>
          {/* Contact Form Section */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8">
              <p className="form-message mb-4 text-gray-700"></p>
              <form id="contact-form" className="space-y-4" action="mail.php" method="POST">
                <div className="form-group">
                  <input type="text" name="name" id="name" className="form-control w-full p-3 border border-gray-300 rounded-md" required placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" id="email" className="form-control w-full p-3 border border-gray-300 rounded-md" required placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="text" name="phone" id="phone" className="form-control w-full p-3 border border-gray-300 rounded-md" required placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <textarea name="message" id="message" className="form-control w-full p-3 border border-gray-300 rounded-md" cols="30" rows="6" required placeholder="Your Message"></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-96 mt-20 overflow-hidden rounded-lg shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1322583.408894594!2d-102.14199186434853!3d39.651402412422705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x877496a0a13c3aa3%3A0xde429e634a338207!2sSt%20Francis%2C%20KS%2067756%2C%20USA!5e0!3m2!1sen!2sbd!4v1705036980615!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div> */}
    </section>
  );
};

export default ContactForm;