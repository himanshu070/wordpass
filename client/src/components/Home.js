import React, { useState } from 'react'
import Navbar from './Navbar';
import { useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
   const [userName, setUserName] = useState("user");

   const callContactPage = async () => {
     try {
       const res = await fetch("/getdata", {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
         },
       });

       const data = await res.json();
       setUserName(data.name);

       console.log("data is ", data);
       if(!data)
        navigate("/signin")

     } catch (error) {
       console.log(error);
     }
   };

   useEffect(() => {
     callContactPage();
   }, []);

  return (
    <>
    <Navbar/>
      <div>Welcome back, {userName}</div>
    </>
  );
}

export default Home