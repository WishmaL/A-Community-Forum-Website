import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import  Carousel  from "../components/Carousel";
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



      <Carousel />

      <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Oh snap! You got an error!</strong> 
      <p> 
        Change this and that and try again.
      </p>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

      {/* <Brands /> */}
      {/* Services = Brands */}
      {/* <FeaturedRooms /> */}
    </div>
  );
}

export default Home;
