import React from "react";
import Homefont from "../../../../images/home-font.png";
import Homebottom from "../../../../images/home-bottom-shape.png";
const HomeBan2 = () => {
  return (
    <div className="home-area home-area-2  relative">
      <div className="flex items-center justify-center min-h-screen  ">
        <div className=" container mx-0  bg-[#3FADC8] ">
          <div className="flex flex-wrap items-center ">
            <div className="w-full lg:w-1/2 md:w-full">
              <div className="main-banner-content text-white">
                <h1 className="text-5xl font-bold">
                  IT Solutions & Business <br /> Services Company
                </h1>
                <p className="mt-4 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  magna aliqua. ipsum is simply dummy text of the printing.
                </p>
                <div className="banner-btn mt-6 flex space-x-4">
                  <a
                    className="btn btn-primary bg-blue-500 text-white py-2 px-4 "
                    href="contact.html"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#0"
                    className="btn btn-primary bg-blue-500 text-white py-2 px-4 "
                  >
                    IT Solutions
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 md:w-full mt-6 lg:mt-0">
              <div className="banner-image">
                <img src={Homefont} alt="/" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="creative-shape absolute bottom-0 left-0 w-full">
        <img src={Homebottom} alt="SVG Shape" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default HomeBan2;
