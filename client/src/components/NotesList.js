import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({ secretList, callContactPage, searchText }) => {
  return (
    <div className="notes-list flex flex-wrap justify-center">
      {secretList.map((item) => (
        <Note
          website={item.website}
          secretpassword={item.secretpassword}
          date={item.date}
        />
      ))}
      <AddNote callContactPage={callContactPage} />
    </div>
  );
};

export default NotesList