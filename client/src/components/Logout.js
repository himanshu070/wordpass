import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

import { UserContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    const callLogoutPage = async () => {
      try {
        const res = await fetch("https://wordpass.onrender.com/logout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
        dispatch({ type: "USER", payload: false });
        navigate("/signin")

      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      callLogoutPage();
    }, []);

  return (
    <>
    </>
  )
}

export default Logout