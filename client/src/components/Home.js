import React from 'react'
import Navbar from './Navbar';
import { useEffect } from 'react';

const Home = () => {

  const callHomePage = async () => {};

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