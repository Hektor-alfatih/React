import React from 'react';

const Button = ({ text, onClick, style }) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
