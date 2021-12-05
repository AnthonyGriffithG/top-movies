import React, { useState } from 'react';
import { movieURL } from '../api/MoviesDB';

const Searchbar = ({ setApiUrl }) => {
  const [term, setTerm] = useState('');

  return (
    <form
      className="search-bar"
      onSubmit={(e) => {
        e.preventDefault();
        setApiUrl(`${movieURL}?query=${term}`);
      }}
    >
      <input
        className="search-bar-input"
        placeholder="Search movies"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
    </form>
  );
};

export default Searchbar;
