import React, { Component } from 'react';
import SubNavbar from '../components/Sub-navbar';
import Graph from '../components/Graphs';
import Artcle from '../components/Article';

export class Member extends Component {
  render() {
    return (
      <div>
        
        <SubNavbar />
        <Graph />
        {/* <Carousel /> */}
        <Artcle />
      </div>
    );
  }
}

export default Member;
