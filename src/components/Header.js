import React from 'react';
import Searchbar from './Searchbar';
import Link from './Link';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-options">
        <Link href="#" className="none">
          Trending
        </Link>
        <Link href="#" className="none">
          All
        </Link>
      </div>
      <Searchbar />
    </header>
  );
};

export default Header;
