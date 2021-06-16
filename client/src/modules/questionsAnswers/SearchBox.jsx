import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = (props) => {

  const buttonIcon = <FontAwesomeIcon icon={faSearch} />;



  return (
    <div className="questions-searchbox">
      <input onChange={props.handleInputChange} type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." id="questions-search-input"></input>
      <icon id="questions-search-button">{buttonIcon}</icon>
    </div>
  );
};

export default SearchBox;