import React, { Component } from 'react';
import CurrentUser from '../components/CurrentUser';
// import Graph from '../components/Graphs';
// import Article_N_comment from "../components/Articles_n_Comments";
import Banner from '../components/Banner';
// import Carousel from '../components/Carousel';
import AllowedUsers from "../components/AllowedUsers";
import Timeline from '../components/Timeline';
import ArtNCom from '../components/ArtNCom';

export class GreatAdmin extends Component {

  // componentDidMount(){
  //   console.log("user Name is ",this.props.match.params.userName)
  // }

  
  render() { 
    return (
      <div>
        <CurrentUser currentUser={this.props.match.params.userName}/>
        <Banner
          title="The Great Admin page"
          subtitle="This will be the description"
        ></Banner>
        <AllowedUsers />
        {/* <Carousel /> */}
        {/* <AllowedUsers /> */}
        {/* <Graph /> */}
        {/* <AllowedUsers /> */}
        {/* <Article_N_comment /> */}
        <ArtNCom />
        <Timeline />
      </div>
    );
  }
}

export default GreatAdmin;
