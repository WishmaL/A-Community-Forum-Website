import React, { Component } from 'react';
import SubNavbar from '../components/Sub-navbar';
import Graph from '../components/Graphs';
// import Article_N_comment from "../components/Articles_n_Comments";
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import ArtNCom from '../components/ArtNCom';

export class Admin extends Component {
  render() {
    return (
      <div>
        <SubNavbar />
        <Banner
          title="The Admin page"
          subtitle="This will be the description"
        ></Banner>
        <Carousel />
        <Graph />
        {/* <Article_N_comment /> */}
        <ArtNCom />
      </div>
    );
  }
}

export default Admin;
