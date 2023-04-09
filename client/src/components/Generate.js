import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar";
import { NavLink, useNavigate } from "react-router-dom";

const Generate = () => {
  const navigate = useNavigate();
  
   const callContactPage = async () => {
     try {
       const res = await fetch("/getdata", {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
         },
       });

       const data = await res.json();

       if (!data) navigate("/signin");
     } catch (error) {
       console.log(error);
       navigate("/signin");
     }
   };

  useEffect(() => {
    callContactPage();
  }, []);
  return (
    <>
      <Navbar/>
      <div>Generate Password</div>
    </>
  );
}

export default Generate