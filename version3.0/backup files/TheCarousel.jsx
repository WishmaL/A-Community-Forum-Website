// this reagards notices

// this must be re-named as ShowNotices AND IT IS NAMED AS SEPERATE FILE

// THIS IS NOT NEEDED ANYMORE

import React, { useEffect, useState } from 'react';
import { Carousel, Container, Button, Col, Row, Image } from 'react-bootstrap';
import Axios from 'axios';
import { UserConsumer } from '../client/src/components/Context';
import { Link, useLocation } from 'react-router-dom';
import Carousel_desc from '../client/src/components/Carousel_desc';
import DelNotice from '../client/src/components/DelNotice';

function TheCarousel() {
  const [notices, setNotices] = useState([]);
  const [noticePics, setNoticePics] = useState([]);
  const [picName, setPicName] = useState('');

  const fetchNotices = () => {
    Axios.get('/notices/getNotices')
      .then((res) => {
        setNotices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // FOLLOWING IS USED FOR GET THE LIST OF NOTICE/BANNER PICS
  const fetchNoticePics = () => {
    Axios.get('/noticesPics/getNoticesPics')
      .then((res) => {
        setNoticePics(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchNotices();
    fetchNoticePics();
  }, []);

  // TAKE THIS TO THE NOTE
  // ////////////////////////////////////////////////////////////////
  // const clickHandler = (userName) => {
  //   window.location = `/AddNotice/${userName}`;
  // };

  return (
    <div>
      {/* {console.log(noticePics)} */}
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
        <Carousel indicators={false}>
          {notices.map((notice) => {
            return (
              <Carousel.Item key={notice.id}>
                <Row>
                  <Col md={8}>
                    {/* followcs arraying is for finding the maatching notice Id from the noticePi */}
                    {
                      noticePics
                        .filter((picInfo) => {
                          return picInfo.noticeId === notice.id;
                        })
                        .map((picInfo) => {
                          return (
                            <div key={picInfo.id}>
                              <Image
                                className="d-block w-100"
                                src={picInfo.noticePicPath}
                                alt="forrid"
                                fluid
                              />
                            </div>
                          );
                        })

                      // console.log(picInfo);
                    }
                  </Col>
                  <Col md={4}>
                    <Carousel_desc title={notice.title} body={notice.body} />
                  </Col>
                </Row>
                {/* <Carousel.Caption> */}
                {/* <h3>{notice.title}</h3>
                  <p>{notice.body}</p> */}

                {/* </Carousel.Caption> */}
                <DelNotice id={notice.id} fetchNotices={fetchNotices} />
              </Carousel.Item>
              //
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
}

export default TheCarousel;
