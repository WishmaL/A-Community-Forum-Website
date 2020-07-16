import React, { Component } from 'react';
import CurrentUser from '../components/CurrentUser';
// import Article_N_comment from "../components/Articles_n_Comments";
import Banner from '../components/Banner';
// import  Carousel  from "../components/Carousel";
// import TheCarousel from '../components/TheCarousel';
import ArtNCom from '../components/ArtNCom';
import { UserProvider } from '../components/Context';
import ShowGraphs from '../components/ShowGraphs';
import ShowNotices from '../components/ShowNotices';

export class Member extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    // console.log("user Name is ",this.props.match.params.userName)
    this.setState({
      userName: this.props.match.params.userName,
    });
  }

  render() {
    localStorage.setItem('USERNAME', this.props.match.params.userName);
    return (
      <div>
        <UserProvider value={this.state.userName}>
          <CurrentUser currentUser={this.props.match.params.userName} />
          <Banner
            title="The Member page"
            subtitle="This will be the description"
          ></Banner>

          <ShowNotices />
          <ShowGraphs />

          {/* <Article_N_comment /> */}
          <ArtNCom />
        </UserProvider>
      </div>
    );
  }
}

export default Member;
