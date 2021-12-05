import React, { useState } from 'react';
import Searchbar from './Searchbar';
import { popularURL, trendingURL, topRatedURL } from '../api/MoviesDB';

const Header = ({ setApiUrl, setPage }) => {
  const [active, setActive] = useState('0');
  const changeApiHelper = (url) => {
    setApiUrl(url);
    setPage(1);
  };

  return (
    <header className="main-header">
      <div className="header-options">
        <div
          style={active === '0' ? { color: 'white' } : { color: '#f0b3ff' }}
          className="header-link"
          onClick={() => {
            setActive('0');
            changeApiHelper(popularURL);
          }}
        >
          <h3>Popular</h3>
        </div>
        <div
          style={active === '1' ? { color: 'white' } : { color: '#f0b3ff' }}
          className="header-link"
          onClick={() => {
            setActive('1');
            changeApiHelper(trendingURL);
          }}
        >
          <h3>Trending</h3>
        </div>
        <div
          style={active === '2' ? { color: 'white' } : { color: '#f0b3ff' }}
          className="header-link"
          onClick={() => {
            setActive('2');
            changeApiHelper(topRatedURL);
          }}
        >
          <h3>Top Rated</h3>
        </div>
      </div>
      <Searchbar setApiUrl={changeApiHelper} setActive={setActive} />
    </header>
  );
};

export default Header;
