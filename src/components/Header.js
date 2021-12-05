import React from 'react';
import Searchbar from './Searchbar';
import { upcomingURL, trendingURL, topRatedURL } from '../api/MoviesDB';

const Header = ({ setApiUrl, setPage }) => {
  const changeApiHelper = (url) => {
    setApiUrl(url);
    setPage(1);
  };

  return (
    <header className="main-header">
      <div className="header-options">
        <div className="header-link">
          <h3>All</h3>
        </div>
        <div
          className="header-link"
          onClick={() => changeApiHelper(trendingURL)}
        >
          <h3>Trending</h3>
        </div>
        <div
          className="header-link"
          onClick={() => changeApiHelper(topRatedURL)}
        >
          <h3>Top Rated</h3>
        </div>
      </div>
      <Searchbar />
    </header>
  );
};

export default Header;
