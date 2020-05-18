import React, { Component } from 'react';
import SubNavbar from '../components/Sub-navbar';
import Graph from '../components/Graphs';
import Article_N_comment from "../components/Articles_n_Comments";
import Banner from '../components/Banner';
import  Carousel  from "../components/Carousel";

export class Member extends Component {
  render() {
    return (
      <div>
        <SubNavbar />
        <Banner
          title="The Member page"
          subtitle="This will be the description"
        ></Banner>

        <Carousel />
        <Graph />
        
        <Article_N_comment />
      </div>
    );
  }
}

export default Member;
