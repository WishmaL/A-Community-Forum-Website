import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
// import TheCarousel from '../components/TheCarousel';
import Button from 'react-bootstrap/Button';
import ShowTimeline from '../components/ShowTimeline';
import Axios from 'axios';
import ArtNCom from '../components/ArtNCom';
import { Link } from 'react-router-dom';
import Delthis from '../components/Delthis';
import ShowNotices from '../components/ShowNotices';
import { RollProvider, RollConsumer } from '../context/Roll';
import CurrentUser from '../components/CurrentUser';

// importing styles
import styled from 'styled-components';

const Div = styled.div`
  height: auto;
  background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  padding: 20px;
`;

function Home() {
  const userName = localStorage.getItem('userName');
  // console.log(userName);
  return (
    <div>
      {userName !== null ? <CurrentUser currentUser={userName} /> : null}
      <Div>
        <Banner
          title="The Learn Home page"
          subtitle="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at incidunt accusamus aut mollitia dignissimos cupiditate, aliquam voluptas eius reprehenderit quia, rem voluptatem tempore hic quidem saepe. Maiores, aliquid vero."
        ></Banner>
      </Div>
      {/* <div className="text-center">
        <Button variant="outline-primary">
          {<Link to="/Login">Login</Link>}
        </Button>
      </div> */}

      {/* <TheCarousel /> */}
      {/* <Delthis /> */}

      <ShowNotices />
      {/* <ShowGraphs /> */}
      <ArtNCom />
      {/* <Delthis /> */}

      <ShowTimeline />

      {/* <ShowNotices /> */}
    </div>
  );
}

export default Home;
