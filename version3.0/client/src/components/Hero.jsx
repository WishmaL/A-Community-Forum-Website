import React from 'react';

export default function Hero({ children, hero }) {
  return (
    <div>
      <header className={hero}>
        {children}
      </header>
    </div>
  );
}

Hero.defaultProps = {
  hero: 'defaultHero',
};

