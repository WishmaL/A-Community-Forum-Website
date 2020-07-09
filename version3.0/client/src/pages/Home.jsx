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

function Home() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    Axios.get('/notices/getNotices')
      .then((res) => {
        setNotices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Banner
        title="The Learn Home page"
        subtitle="This will be the description"
      ></Banner>

      {/* <div className="text-center">
        <Button variant="outline-primary">
          {<Link to="/Login">Login</Link>}
        </Button>
      </div> */}

      {/* <TheCarousel /> */}
      {/* <Delthis /> */}
      {/* <ShowNotices /> */}

      <ArtNCom />
      <ShowTimeline />
    </div>
  );
}

export default Home;
