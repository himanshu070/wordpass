import React, { useState } from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NotesList from "./NotesList";
import AddNote from "./AddNote";
import Search from "./Search";

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("user");
  const [secretList, setSecretList] = useState([]);
  const [secretListShow, setSecretListShow] = useState(secretList);
  const [searchText, setSearchText] = useState("");

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
      setSecretList(data.secret);

      //  console.log("secret list is", secretList);

      if (!data) navigate("/signin");
    } catch (error) {
      console.log(error);
      navigate("/signin");
    }
  };

  useEffect(() => {
    callContactPage();
  }, []);

  useEffect(() => {
    if (!searchText) {
      setSecretListShow(secretList);
      return;
    }
    const temp = [];
    secretList.map((item) => {
      if (item?.website.toLowerCase().includes(searchText.toLowerCase())) {
        temp.push(item);
      }
      if (item?.secretpassword.toLowerCase().includes(searchText.toLowerCase())) {
        temp.push(item);
      }
      
    });
    setSecretListShow(temp);
  }, [searchText]);

  return (
    <>
      <Navbar />
      <div className=" notes-container mx-2">
        <div className="">
          <h1 className="font-bold text-gray-600">Welcome back, {userName}</h1>
          <div className="search-box">
            <Search handleSearchNote={setSearchText} />
          </div>
        </div>
        <NotesList
          secretList={secretListShow}
          callContactPage={callContactPage}
          searchText={searchText}
        />
      </div>
    </>
  );
};

export default Home;
