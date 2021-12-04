import React from 'react';

const Button = ({ content, onClick }) => {
  return (
    <button className="page-btn" onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
