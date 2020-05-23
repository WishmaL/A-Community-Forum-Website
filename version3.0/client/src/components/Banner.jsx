import React from 'react';
// this represents the notices

function Banner({ children, title, subtitle }) {



  
  return (
    <div className="banner">
      <p className="h1 text-center">{title}</p>
      <div></div>
      <p className="h3 text-center">{subtitle}</p>
      {children}
    </div>
  );
}

export default Banner;