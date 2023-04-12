import React from 'react'
import {MdSearch} from 'react-icons/md'

const Search = ({handleSearchNote}) => {
  const handleSearch = (e)=>{
    handleSearchNote(e.target.value)
    
  }
  return (
    <div className="search">
      <MdSearch className="search-icons mx-4" size="1.3em" />
      <input
        type="text"
        placeholder="type to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search