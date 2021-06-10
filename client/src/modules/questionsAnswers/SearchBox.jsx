import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {

  const buttonIcon = <FontAwesomeIcon icon={faSearch} />;

  return (
    <div className="questions-searchbox">
      <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS... " id="questions-search-input"></input>
      <button type="button" id="questions-search-button">{buttonIcon}</button>
    </div>
  );
};

export default SearchBox;