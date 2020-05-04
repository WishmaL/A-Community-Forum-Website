import React, { Component } from 'react';
import SubNavbar from '../components/Sub-navbar';
import Graph from '../components/Graphs';
import Artcle from '../components/Article';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';

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
        <Artcle />
      </div>
    );
  }
}

export default Admin;
