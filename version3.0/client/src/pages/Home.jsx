import React from 'react';
import Banner from '../components/Banner';
import  Carousel  from "../components/Carousel";
import Article_N_comment from "../components/Articles_n_Comments";
import Timeline from "../components/Timeline";

// import Brands from '../components/Brands';
// import FeaturedRooms from '../components/FeaturedRoom';

function Home() {
  return (
    <div>
      
        <Banner
          title="The Learn Home page"
          subtitle="This will be the description"
        ></Banner>

      <Carousel />
      <Article_N_comment />
      <Timeline />

      

      {/* <Brands /> */}
      {/* Services = Brands */}
      {/* <FeaturedRooms /> */}
    </div>
  );
}

export default Home;
