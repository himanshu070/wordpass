import React from 'react'
import Lottie from 'lottie-react';
import { NavLink } from "react-router-dom";
import signupani from "../images/signup-ani.json";


const Signup = () => {
  return (
    <div className=" lg:w-5/6 p-10 mx-auto font-montserrat overflow-hidden">
      <div className=" text-center text-4xl font-semibold">Sign Up</div>
      <div className=" flex flex-col sm:flex-row-reverse mt-8">
        <div className="flex sm:w-1/2 mb-5 sm:mb-0 mx-10">
          <div className=" my-auto ">
            <Lottie loop={true} animationData={signupani} />
          </div>
        </div>
        <div className=" sm:w-1/2 sm:ml-10 my-auto flex flex-col">
          <input
            className=" w-full p-3 border-2 rounded-lg m-1"
            type="text"
            placeholder="Your Name"
          ></input>
          <input
            className=" w-full p-3 border-2 rounded-lg m-1"
            type="text"
            placeholder="Your Email"
          ></input>
          <input
            className=" w-full p-3 border-2 rounded-lg m-1"
            type="text"
            placeholder="Your Mobile Number"
          ></input>
          <input
            className=" w-full p-3 border-2 rounded-lg m-1"
            type="password"
            placeholder="Password"
          ></input>
          <input
            className=" w-full p-3 border-2 rounded-lg m-1"
            type="password"
            placeholder="Confirm Password"
          ></input>
          <button
            type="submit"
            className=" w-full mt-3 py-3 bg-blue-600 rounded-lg text-white text-lg m-1 mb-2"
          >
            Send
          </button>
          <NavLink to="/signin" className="pointer text-blue-600 ml-auto">Already have an account? Sign in</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Signup