import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
// import Brands from '../components/Brands';
// import FeaturedRooms from '../components/FeaturedRoom';

function Home() {
  return (
    <div>
      <Hero>
        <Banner
          title="The Home page"
          subtitle="This will be the description"
        ></Banner>
      </Hero>

      {/* <Brands /> */}
      {/* Services = Brands */}
      {/* <FeaturedRooms /> */}
    </div>
  );
}

export default Home;
