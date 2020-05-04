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

// import React from 'react';

// function Hero({ children, hero }) {
//   return <header className={hero}>{children}</header>;
// }

// Hero.defaultProps = {
//   hero: 'defaultHero'
// };

// export default Hero;
