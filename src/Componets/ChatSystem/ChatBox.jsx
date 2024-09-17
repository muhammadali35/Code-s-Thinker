import React, { useState } from 'react';
import { FaHome, FaCommentDots, FaRegWindowMinimize } from 'react-icons/fa'; 

const LiveBox = () => {
    const [chatOpen,setChatOpen]=useState(true);
    const CancelHandler=()=>{
     setChatOpen(!chatOpen);
    }
  return (
    <div className=" w-[50rem] flex flex-col bg-gradient-to-b py-5  from-purple-400 to-white rounded-t-2xl sm:rounded-2xl shadow-lg">
      <div className="flex justify-end ">
        <FaRegWindowMinimize onClick={CancelHandler} className="h-10 cursor-pointer" />
      </div>
      <h1 className="text-4xl p-5 font-bold text-black ">
        Live Chat
      </h1>
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-md">
        <div className="flex mb-4">
          <img
            src="https://via.placeholder.com/40" 
            alt="Bot"
            className="rounded-full w-10 h-10 mr-2"
          />
          <div>
            <p className="font-semibold">Monster Bot</p>
            <p>Hello!</p>
          </div>
        </div>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md">
          Chat now &gt;
        </button>
      </div>
      <footer className="flex justify-between bg-white p-5  mt-6 rounded-full shadow-md">
        <div className="flex flex-col items-center">
          <FaHome size={24} className="text-gray-700" />
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCommentDots size={24} className="text-gray-700" />
          <span className="text-xs">Chat</span>
        </div>
      </footer>
      <div className="text-center text-xs text-gray-500 mt-2">
        Powered by <span className="text-orange-600">LiveChat</span>
      </div>
    </div>
  );
};

export default LiveBox;