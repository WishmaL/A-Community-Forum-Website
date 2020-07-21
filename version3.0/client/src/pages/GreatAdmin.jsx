import React, { Component } from 'react';
import CurrentUser from '../components/CurrentUser';
import Banner from '../components/Banner';
import ShowTimeline from '../components/ShowTimeline';
import ArtNCom from '../components/ArtNCom';
import { UserProvider } from '../components/Context';
import ShowGraphs from '../components/ShowGraphs';
import ShowNotices from '../components/ShowNotices';
import { RollProvider, RollConsumer } from '../context/Roll';
// import TheCarousel from '../components/TheCarousel';

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
    // localStorage.setItem('USERNAME', this.props.match.params.userName);
    return (
      <div>
        <UserProvider value={this.state.userName}>
          <CurrentUser currentUser={this.state.userName} />
          <Banner
            title="The Great Admin page"
            subtitle="This will be the description"
          ></Banner>

          {/* UNCOMMENT FOLLOWINGS */}

          <ShowNotices />
          {/* <ShowGraphs /> */}
          <ArtNCom />

          <ShowTimeline />
        </UserProvider>
      </div>
    );
  }
}

export default GreatAdmin;
