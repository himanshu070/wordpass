import React, { useState } from "react";
import Lottie from "lottie-react";
import { NavLink, useNavigate } from "react-router-dom";
import signupani from "../images/login-ani.json";
import Navbar from "./Navbar";


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();

    if(res.status===401 || !data){
      window.alert("Invalid Credentials");
    }
    else{
      window.alert("Login Successful");
      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className=" lg:w-5/6 mx-auto font-montserrat overflow-hidden">
        <div className=" text-center text-4xl font-semibold">Log In</div>
        <div className=" flex flex-col sm:flex-row mt-8 px-10">
          <div className="flex sm:w-1/2 mb-5 sm:mb-0 mx-10">
            <div className=" my-auto ">
              <Lottie loop={true} animationData={signupani} />
            </div>
          </div>
          <div className=" sm:w-1/2 sm:ml-10 my-auto flex flex-col">
            <input
              method="POST"
              className=" w-full p-3 border-2 rounded-lg m-1"
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              method="POST"
              className=" w-full p-3 border-2 rounded-lg m-1"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              type="submit"
              className=" w-full mt-3 py-3 bg-blue-600 rounded-lg text-white text-lg m-1 mb-2"
              onClick={handleLogin}
            >
              Send
            </button>
            <NavLink
              to="/register"
              className="pointer text-blue-600 ml-auto pb-10"
            >
              Don't have an account? Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
