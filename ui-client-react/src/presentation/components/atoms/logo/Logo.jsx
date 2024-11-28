import React from 'react';

const Logo = (props) => {
  return (
    <figure data-testid="logo-test">
      <img src={props.src} alt={props.alt} {...props} />
    </figure>
  );
};

export default Logo;
