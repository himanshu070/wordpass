import React, { useEffect, useState } from 'react'

const AddNote = ({ callContactPage }) => {
  const [website, setWebsite] = useState("");
  const [secretpassword, setSecretpassword] = useState("");

  const handleWebChange = (e) => {
    setWebsite(e.target.value);
  };
  const handlePassChange = (e) => {
    setSecretpassword(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const res = await fetch("/secret", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        website,
        secretpassword,
      }),
    });

    const data = await res.json();

    if (!data) {
      console.log("Website and Password not set");
    } else {
      alert("Website and Password sent successfully!");
      setWebsite("");
      setSecretpassword("");
      callContactPage();
    }
  };

  return (
    <div className="note new">
      {/* <textarea name="website" id="website" cols="1" rows="1" placeholder='Website Name'></textarea>
        <textarea name="website" id="website" cols="1" rows="1" placeholder='Password'></textarea> */}

      <textarea
        id="message"
        rows="1"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Website"
        value={website}
        onChange={handleWebChange}
      ></textarea>
      <textarea
        id="message"
        rows="1"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Password"
        value={secretpassword}
        onChange={handlePassChange}
      ></textarea>

      <div className="note-footer">
        <small>200 Remaining</small>
        <button className="save" onClick={submitForm}>
          save
        </button>
      </div>
    </div>
  );
};

export default AddNote