import React, { Component } from 'react';
import CurrentUser from '../components/CurrentUser';
// import Article_N_comment from "../components/Articles_n_Comments";
import Banner from '../components/Banner';
// import Carousel from '../components/Carousel';
// import AllowedUsers from '../components/AllowedUsers';
import Timeline from '../components/Timeline';
import ArtNCom from '../components/ArtNCom';
import { UserProvider } from '../components/Context';
import ShowGraphs from '../components/ShowGraphs';

export class GreatAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    this.setState({
      userName: this.props.match.params.userName,
    });
  }

  render() {
    return (
      <div>
        <UserProvider value={this.state.userName}>
          <CurrentUser currentUser={this.state.userName} />
          <Banner
            title="The Great Admin page"
            subtitle="This will be the description"
          ></Banner>
          {/* Following is only for great Admins */}
          {/* <AllowedUsers /> */}
          {/* <Carousel /> */}
          {/* <AllowedUsers /> */}
          {/* <Graphs /> */}
          <ShowGraphs />
          {/* <AllowedUsers /> */}
          {/* <Article_N_comment /> */}
          <ArtNCom />
          <Timeline />
        </UserProvider>
      </div>
    );
  }
}

export default GreatAdmin;
