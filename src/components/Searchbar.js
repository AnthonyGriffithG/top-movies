import React, { useState } from 'react';

const Searchbar = () => {
  const [term, setTerm] = useState('');

  return (
    <form className="search-bar">
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
