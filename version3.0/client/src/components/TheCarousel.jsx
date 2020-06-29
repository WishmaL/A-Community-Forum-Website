// this reagards notices

// this must be re-named as ShowNotices

import React, { useEffect, useState } from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import Axios from 'axios';
import { UserConsumer } from './Context';
import { Link, useLocation } from 'react-router-dom';

function TheCarousel() {
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

  // TAKE THIS TO THE NOTE
  // ////////////////////////////////////////////////////////////////
  // const clickHandler = (userName) => {
  //   window.location = `/AddNotice/${userName}`;
  // };

  return (
    <div>
      <UserConsumer>
        {(userName) => {
          return (
            <div>
              <div className="alert alert-primary" role="alert">
                <h1>Notice section</h1>

                <Link
                  to={(location) => ({
                    ...location,
                    pathname: `/AddNotice/${userName}`,
                  })}
                >
                  <Button type="button">Add Notice</Button>
                </Link>
              </div>
            </div>
          );
        }}
      </UserConsumer>

      <Container>
        <Carousel>
          {notices.map((notice) => {
            return (
              <Carousel.Item key={notice.id}>
                <img
                  className="d-block w-100"
                  src="http://lorempics.com/550x250/6666ff/6666ff"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{notice.title}</h3>
                  <p>{notice.body}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
}

export default TheCarousel;
