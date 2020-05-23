import React, { Component } from 'react';
import SubNavbar from '../components/Sub-navbar';
// import Graph from '../components/Graphs';
import Article_N_comment from "../components/Articles_n_Comments";
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import AllowedUsers from "../components/AllowedUsers";
import Timeline from '../components/Timeline';

export class GreatAdmin extends Component {
  render() { 
    return (
      <div>
        <SubNavbar />
        <Banner
          title="The Great Admin page"
          subtitle="This will be the description"
        ></Banner>
        <AllowedUsers />
        {/* <Carousel /> */}
        {/* <AllowedUsers /> */}
        {/* <Graph /> */}
        <AllowedUsers />
        <Article_N_comment />
        <Timeline />
      </div>
    );
  }
}

export default GreatAdmin;
