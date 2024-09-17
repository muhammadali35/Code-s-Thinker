import React, { useState } from "react";
import { FaRegWindowMinimize, FaUser } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import img1 from './../images/blog-1.jpg';
import ChatWindow from "./ChatWindow";

const LiveChatForm = ({ Cancel,chatNow }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [start, setStart] = useState(false);

  const StartHandler = (e) => {
    e.preventDefault(); // Prevent form submission
    setStart(true); // Set the start state to true
  };

  if (start) {
    return <ChatWindow Cancel={Cancel}/>;
  }

  return (
    <div className="absolute bottom-1 left-[57rem] w-full md:w-2/3 lg:w-1/3 xl:w-1/4 max-h-[850px] flex flex-col bg-gradient-to-b from-purple-400 to-white rounded-t-2xl md:rounded-2xl shadow-lg">
      <div className="flex w-full bg-white shadow-lg rounded-t-2xl md:rounded-2xl h-12 items-center px-4">
        <IoMdArrowBack className="w-6 h-6" onClick={()=>chatNow(true)}/>
        <div className="flex items-center ml-4">
          <img src={img1} alt="no img" className="rounded-full h-8 w-8" />
          <h1 className="ml-2 text-sm md:text-base">wali haider jalali</h1>
        </div>
        <FaRegWindowMinimize
          className="ml-auto w-6 h-6 cursor-pointer"
          onClick={Cancel} // Hide the chat form when clicking the minimize icon
        />
      </div>
      <div className="flex flex-col items-center bg-white p-5 m-2 rounded-lg shadow-md">
        <FaUser className="text-purple-600 text-4xl mb-4" />
        <p className="text-center mb-4 text-sm md:text-base">
          Have a question? Please fill in the form below, and our chat agent will gladly help you!
        </p>
        <form className="w-full" onSubmit={StartHandler}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name: <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              E-mail: <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md w-full"
            type="submit"
          >
            Start the chat
          </button>
        </form>
      </div>
      <div className="text-center text-xs text-gray-500 mt-2">
        Powered by <span className="text-orange-600">LiveChat</span>
      </div>
    </div>
  );
};

export default LiveChatForm;
