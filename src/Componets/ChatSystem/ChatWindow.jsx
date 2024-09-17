import React, { useState } from "react";
import { FaArrowLeft, FaEllipsisH, FaMinus,  FaSmile, FaUser } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";

import { MdOutlineAttachment } from "react-icons/md";
const ChatWindow = ({Cancel}) => {
    const [message, setMessage] = useState("");
  return (
    <div className="h-[500px] absolute bottom-1 left-[54rem]  w-[350px] shadow-2xl rounded-lg">
      <div className="flex items-center justify-between p-2 bg-white rounded-t-2xl shadow-md">
        <div className="flex items-center">
          <FaArrowLeft className="text-gray-700 text-lg mx-2" />
          <FaEllipsisH className="text-gray-700 text-lg mx-2" />
        </div>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/30"
            alt="Audrey"
            className="rounded-full w-8 h-8"
          />
          <span className="ml-2 font-semibold text-gray-700">Wali haider</span>
          <span className="ml-1 w-3 h-3  rounded-full"></span>{" "}
          {/* Online indicator */}
        </div>
        <FaMinus onClick={Cancel} className="text-gray-700 text-lg mx-2" />
      </div>
      <div className=" overflow-y-scroll h-[400px] bg-white p-6  shadow-md">
        <p className="text-gray-400 text-center my-4">09:55 AM</p>

        <div className="flex flex-col items-center bg-white p-4 mb-4 rounded-lg shadow-sm">
          <FaUser className="text-purple-600 text-4xl mb-4" />
          <p className="text-sm mb-2">Name: wali</p>
          <p className="text-sm">E-mail: wali@gmail.com</p>
        </div>

        <div className="flex items-start mb-4">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="rounded-full w-10 h-10 mr-2"
          />
          <div className="bg-gray-100 p-3 rounded-lg">
            <p>Hello!</p>
          </div>
        </div>
        <div className="flex gap-3 justify-end  mb-4">
          <div className="bg-gray-100 p-3  text-wrap text-justify  rounded-lg">
            <p className="text-wrap">Yes</p>
          </div>
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="rounded-full w-10 h-10 mr-2"
            />
        </div>
      </div>
       
      <div className="bg-white p-4 rounded-lg shadow-lg   border-2 flex items-center">
      <input
  type="text"
  placeholder="Write a message..."
  className="flex-1 w-32 p-4 border-2 border-blue-600 h-8"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>
   <div className="flex gap-2 text-2xl">
    
   <FaSmile className=" mx-2 " />
        <MdOutlineAttachment className=" "/>  
        <LuArrowRight className=" "/>
   </div>
   
      </div>
    </div>
  );
};

export default ChatWindow;