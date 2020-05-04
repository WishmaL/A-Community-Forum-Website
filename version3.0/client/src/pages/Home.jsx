import React from 'react';
import Banner from '../components/Banner';
import  Carousel  from "../components/Carousel";
import Artcle from "../components/Article";
import Timeline from "../components/Timeline";

// import Brands from '../components/Brands';
// import FeaturedRooms from '../components/FeaturedRoom';

function Home() {
  return (
    <div>
      
        <Banner
          title="The Home page"
          subtitle="This will be the description"
        ></Banner>

      <Carousel />
      <Artcle />
      <Timeline />

      

      {/* <Brands /> */}
      {/* Services = Brands */}
      {/* <FeaturedRooms /> */}
    </div>
  );
}

export default Home;
