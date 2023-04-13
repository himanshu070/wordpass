import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import brandlogo from "../images/brandlogo.svg"
import Navbar from "./Navbar"

const Contact = () => {
  const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""})

  const callContactPage = async ()=>{
    try {
      const res = await fetch("https://wordpass.onrender.com/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
      
      if(!res.status===200){
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    callContactPage();
    const data =  localStorage.getItem("userData")
    if(data)
    {
      setUserData(JSON.parse(data))
    }
  }, [])

  // to save the input in userData
  const handleInput = (e)=>{
     const name = e.target.name;
     const value = e.target.value;

     setUserData({...userData, [name]: value} )
  }
  
  // to submit the form
  const submitForm = async (e)=>{
    e.preventDefault();
    
    const {name, email, phone, message} = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      })
    });

    const data = await res.json();

    if(!data){
      console.log("Message not sent");
    }
    else{
      alert("Message sent successfully!")
      setUserData({...userData, message:""})
    }

  }

  return (
    <>
      <Navbar />
      <div className=" flex flex-col md:flex-row lg:w-5/6 p-10 mx-auto font-montserrat overflow-hidden items-center justify-center mt-20">
        <div className=" flex flex-col items-center md:justify-center md:items-start md:w-1/3 mb-8 md:mb-0">
          <div className="ml-16">
            <img src={brandlogo} alt="wordpass" width="230" height="45" />
          </div>
          <div className=" text-lg font-light mt-8 mb-5">
            Feel Free to Contact Us:
          </div>
          <div className=" text-lg">
            <div>
              <i className="fas fa-envelope-open text-blue-600 text-3xl  my-3 align-middle"></i>
              Email: mishrahimanshu070@gmail.com
            </div>
          </div>
          <NavLink
            className=" mt-4 p-3 border-2 border-blue-600 rounded-lg text-blue-600 text-lg hover:text-blue-100 hover:border-blue-100 hover:bg-blue-600"
            to="/dev"
          >
            About Developer {`>`}
            <i className="fas fa-chevron-right ml-3"></i>
          </NavLink>
        </div>
        <div className=" flex flex-col w-full md:w-2/3 md:pl-10">
          <div className=" text-3xl font-semibold">Send us a message</div>
          <div className=" flex mt-8">
            <div className=" w-1/2 pr-2">
              <input
                method="POST"
                value={userData?.name}
                type="text"
                className=" w-full p-3 border-2 rounded-lg"
                placeholder="Enter your name"
                onChange={handleInput}
                name="name"
              ></input>
            </div>
            <div className=" w-1/2 pl-2">
              <input
                method="POST"
                value={userData?.email}
                type="email"
                className=" w-full p-3 border-2 rounded-lg"
                placeholder="Email Address"
                onChange={handleInput}
                name="email"
              ></input>
            </div>
          </div>
          <div className=" flex my-4">
            <div className=" w-1/2 pr-2">
              <select className=" w-full p-3 border-2 rounded-lg text-gray-400">
                <option>Feedback</option>
                <option>Complaint</option>
              </select>
            </div>
            <div className=" w-1/2 pl-2">
              <input
                method="POST"
                value={userData?.phone}
                type="email"
                className=" w-full p-3 border-2 rounded-lg"
                placeholder="Phone Number"
                onChange={handleInput}
                name="phone"
              ></input>
            </div>
          </div>
          <textarea
            method="POST"
            type="text"
            className=" w-full p-3 border-2 rounded-lg"
            placeholder="Description"
            value={userData?.message}
            onChange={handleInput}
            name="message"
          ></textarea>
          <div className=" flex flex-row-reverse">
            <button
              type="submit"
              className=" w-36 mt-4 py-3 bg-blue-600 rounded-lg text-white text-lg hover:bg-blue-500"
              onClick={submitForm}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact