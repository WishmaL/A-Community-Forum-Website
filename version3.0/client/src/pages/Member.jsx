import React, { Component } from 'react';
import SubNavbar from '../components/Sub-navbar';
import Graph from '../components/Graphs';
// import Article_N_comment from "../components/Articles_n_Comments";
import Banner from '../components/Banner';
// import  Carousel  from "../components/Carousel";
import TheCarousel from '../components/TheCarousel';
import ArtNCom from '../components/ArtNCom';

export class Member extends Component {
  render() {
    return (
      <div>
        <SubNavbar />
        <Banner
          title="The Member page"
          subtitle="This will be the description"
        ></Banner>

        {/* <Carousel /> */}
        <TheCarousel />
        <Graph />
        
        {/* <Article_N_comment /> */}
        <ArtNCom />
      </div>
    );
  }
}

export default Member;
