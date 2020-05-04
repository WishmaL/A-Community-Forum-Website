import React from 'react';

function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <p class="h1 text-center">{title}</p>
      <div></div>
      <p class="h3 text-center">{subtitle}</p>
      {children}
    </div>
  );
}

export default Banner;