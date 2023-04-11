import React from 'react'
import { AiFillDelete } from "react-icons/ai";

const Note = ({website, secretpassword, date}) => {
    const isoDateString = date;
    const isoDate = new Date(isoDateString);
    const readableDateString = isoDate.toLocaleString();
  return (
    <div className="note m-6">
      <span className="text-gray-800">{website}</span>
      <span className="text-gray-800">{secretpassword}</span>
      <div className="notesFooter flex justify-between">
        <small className="text-gray-500">{readableDateString}</small>
        <AiFillDelete
          size="1.3em"
          className="cursor-pointer text-gray-400 hover:text-gray-600"
        />
      </div>
    </div>
  );
}

export default Note