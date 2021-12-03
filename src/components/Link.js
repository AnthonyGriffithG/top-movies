import React from 'react';

const Link = ({ href, className, children }) => {
  return (
    <a className={className} href={href}>
      <h3>{children}</h3>
    </a>
  );
};

export default Link;
