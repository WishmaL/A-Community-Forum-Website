import React, { Component } from 'react';
import SubNavbar from '../components/Sub-navbar';
// import Carousel from '../components/Carousel';
import Artcle from '../components/Article';

export class Member extends Component {
  render() {
    return (
      <div>
        <SubNavbar />
        {/* <Carousel /> */}
        <Artcle />
      </div>
    );
  }
}

export default Member;
