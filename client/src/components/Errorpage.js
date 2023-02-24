import React from 'react'
import "../css/errorpage.css"
import { NavLink } from "react-router-dom";
import Backhp from "../images/backhp.webp";
import Carr from "../images/carr.webp";

const Errorpage = () => {
  return (
    <div className="bodyerror">
      <section class="notFound">
        <div class="img">
          <img src={Backhp} alt="Back to the Homepage" />
          <img src={Carr} alt=":)" />
        </div>
        <div class="text">
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <h3>BACK TO HOME?</h3>
          <NavLink to="/" class="yes">
            YES
          </NavLink>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=G3AfIvJBcGo"
          >
            NO
          </a>
        </div>
      </section>
    </div>
  );
}

export default Errorpage