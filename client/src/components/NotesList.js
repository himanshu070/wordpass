import React from 'react'
import Note from './Note'

const NotesList = ({secretList}) => {
  return (
    <div className='notes-list flex flex-wrap justify-center'>
        {secretList.map((item)=>(
            <Note website={item.website} secretpassword={item.secretpassword} date={item.date}/>
        ))}
    </div>
  )
}

export default NotesList