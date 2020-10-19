import React from 'react';
import './SearchBox.css';

const SearchBox = ({onInput}) => {
  return(
    <input 
      className="mb5" 
      type="text" 
      placeholder="search robots..."
      onChange={onInput} 
    />
  );
}

export default SearchBox;
