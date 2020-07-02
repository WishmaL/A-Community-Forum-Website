import React, { Component } from 'react';
import CurrentUser from '../components/CurrentUser';
import Banner from '../components/Banner';
// import Carousel from '../components/Carousel';
import ArtNCom from '../components/ArtNCom';
import { UserProvider } from '../components/Context';
import ShowGraphs from '../components/ShowGraphs';
import ShowNotices from '../components/ShowNotices';

export class Admin extends Component {
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
          <CurrentUser currentUser={this.props.match.params.userName} />
          <Banner
            title="The Admin page"
            subtitle="This will be the description"
          ></Banner>

          <ShowNotices />
          <ShowGraphs />

          <ArtNCom />
        </UserProvider>
      </div>
    );
  }
}

export default Admin;
