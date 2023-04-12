import React, { useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const callLogoutPage = async () => {
      try {
        const res = await fetch("/logout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
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