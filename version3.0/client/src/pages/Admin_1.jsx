import React, { useEffect, useState } from 'react';
import CurrentUser from '../components/CurrentUser';
import Banner from '../components/Banner';
// import Carousel from '../components/Carousel';
import ArtNCom from '../components/ArtNCom';
import { UserProvider } from '../components/Context';
// import ShowGraphs from '../components/ShowGraphs';
import ShowNotices from '../components/ShowNotices';

function Admin_1(props) {
  const [userName, setUserName] = useState('');

  localStorage.setItem('USERNAME', props.match.params.userName);

  useEffect(() => {
    setUserName(props.match.params.userName);
  }, []);

  return (
    <div>
      <UserProvider value={userName}>
        <CurrentUser currentUser={userName} />
        <Banner
          title="The Admin page"
          subtitle="This will be the description"
        ></Banner>

        <ShowNotices />
        {/* <ShowGraphs /> */}

        <ArtNCom />
      </UserProvider>
    </div>
  );
}

export default Admin_1;
