import React, { Component } from 'react';
import SubNavbar from '../components/Sub-navbar';
// import Graph from '../components/Graphs';
import Artcle from '../components/Article';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import AllowedUsers from "../components/AllowedUsers";

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
        <Artcle />
      </div>
    );
  }
}

export default GreatAdmin;
