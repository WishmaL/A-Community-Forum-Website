import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import TheCarousel from '../components/TheCarousel';
// import Article_N_comment from '../components/Articles_n_Comments';
import Timeline from '../components/Timeline';
import Axios from 'axios';
import ArtNCom from '../components/ArtNCom';
import Delthis from '../components/Delthis';

// import Brands from '../components/Brands';
// import FeaturedRooms from '../components/FeaturedRoom';

function Home() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    Axios.get('/notices/getNotices')
      .then((res) => {
        // console.log(res)
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
      <TheCarousel />

      <ArtNCom />
      {/* <Delthis /> */}
      {/* <Article_N_comment /> */}
      <Timeline />

      {/* <Brands /> */}
      {/* Services = Brands */}
      {/* <FeaturedRooms /> */}
    </div>
  );
}

export default Home;
