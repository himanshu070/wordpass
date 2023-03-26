import React from 'react'
import Navbar from './Navbar';
import { useEffect } from 'react';

const callHomePage = async ()=>{

}



const Home = () => {
  useEffect(() => {
    callHomePage();
  }, []);
  return (
    <>
    <Navbar/>
      <div>Home</div>\
    </>
  );
}

export default Home