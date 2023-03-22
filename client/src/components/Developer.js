import React from 'react'
import "../css/errorpage.css";
import waves from "../images/waves.json"
import Navbar from "./Navbar";
import Lottie from "lottie-react";
import Me from "../images/me.webp"
import "../css/dev.css"

const Developer = () => {
  return (
    <>
      <Navbar />
      <div className="content flex flex-col overflow-hidden mt-28">
        <div className="card flex items-center justify-center overflow-hidden">
          <div className="card-box w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow flex items-center justify-center overflow-hidden">
            <div className="lottie body w-96 absolute mx-auto">
              <Lottie loop={true} animationData={waves} />
            </div>
            <div className="flex flex-col items-center z-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={Me}
                alt="Himanshu"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 z-10">
                Himanshu Mishra
              </h5>
              <span className="text-sm text-gray-500 z-10">
                Full Stack Developer
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/hxmanshu.mishra/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Talk to me on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Developer