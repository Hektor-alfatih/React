import React from 'react';

const LinkText = ({ content, href, style }) => {
  return (
    <a href={href} style={style}>
      {content}
    </a>
  );
};

export default LinkText;
