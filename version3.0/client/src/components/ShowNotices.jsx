// this reagards showing notices

import React, { useEffect, useState, useContext, useReducer } from 'react';
import { Carousel, Container, Button, Col, Row, Image } from 'react-bootstrap';
import Axios from 'axios';
import { UserConsumer } from './Context';
import { Link, Redirect } from 'react-router-dom';
import Carousel_desc from './Carousel_desc';
import DelNotice from './DelNotice';
// import { RollContext } from '../context/Roll';

function ShowNotices() {
  // const roll = useContext(RollContext);
  const roll = localStorage.getItem('roll');

  // __FOLLOWING IS FOR EXTRACT RELAVENT NOTICES__

  // __FOLLOWING IS FOR FETCHING ALL NOTICES__
  const [AllNotices, setAllNotices] = useState([]);
  const [noticePics, setNoticePics] = useState([]);
  const [picName, setPicName] = useState('');

  const [redirect, setRedirect] = useState(false);

  // const [notices, setNotices] = useState([]);

  const fetchNotices = () => {
    Axios.get('/notices/getNotices')
      .then((res) => {
        // setNotices(res.data);
        setAllNotices(res.data);
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchNotices();
    fetchNoticePics();
  }, []);

  const clickHandler = () => {
    setRedirect(true);
  };

  // TAKE THIS TO THE NOTE
  // ////////////////////////////////////////////////////////////////
  // const clickHandler = (userName) => {
  //   window.location = `/AddNotice/${userName}`;
  // };
  // if(redirect){
  //   return <Redirect to={{
  //     pathname:  `/AddNotice/${userName}`,
  //     state: { noticeId: this.state.data }
  //   }} />
  // }

  // __FUNCTION FOR RETURN THE allowed NOTICES TO SHOW__

  // <<WORKED>>
  let notices;
  // let editFlag;

  // console.log(roll);
  switch (roll) {
    case 'greatAdmin':
      notices = AllNotices;
      // console.log(notices);
      break;

    case 'admin':
      notices = AllNotices.filter((notice) => {
        return notice.admin_r === 1;
      });
      // editFlag = 'admin_w';
      break;

    case 'member':
      notices = AllNotices.filter((notice) => {
        return notice.member_r === 1;
      });
      // editFlag = 'member_w';
      break;

    default:
      notices = AllNotices.filter((notice) => {
        return notice.viewer_r === 1;
      });
      break;
  }

  // console.log(notices);
  // follwing is for enabling eding part

  // const enableEdit;

  //   notices.forEach(notice => {
  //     if(roll === 'admin'){
  //       notice.admin_w === 1 ?
  //     }

  //   });
  // console.log(notices);

  // Following will be used for displaying the edit button

  // switch (roll) {
  //   case 'greatAdmin':
  //     EnableEditButton = true;
  //     break;

  //   case 'admin':
  //     notice.admin_w ? (EnableEditButton = true) : (EnableEditButton = false);
  //     break;

  //   case 'member':
  //     notice.member_w ? (EnableEditButton = true) : (EnableEditButton = false);
  //     break;

  //   default:
  //     EnableEditButton = false;
  //     break;
  // }
  // let delthis;
  return (
    <div>
      {/* the following is enable for every role aka (greatAdmin, admin, member) */}

      <UserConsumer>
        {(userName) => {
          return (
            <div>
              <div className="alert alert-primary" role="alert">
                <h1>Notice section</h1>

                {roll !== 'viewer' && roll !== 'member' ? (
                  <Link
                    to={(location) => ({
                      ...location,
                      pathname: `/AddNotice/${userName}`,
                    })}
                  >
                    <Button type="button">Add Notice</Button>
                  </Link>
                ) : null}
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
                {/* {notice.admin_r === 1 || } */}
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
                                alt="Notice pic"
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
                {roll !== 'viewer' && roll !== 'member' ? (
                  (roll === 'admin' && notice.admin_w) ||
                  // (roll === 'member' && notice.member_w) ||
                  roll === 'greatAdmin' ? (
                    <div>
                      <DelNotice id={notice.id} fetchNotices={fetchNotices} />

                      <UserConsumer>
                        {(userName) => {
                          return (
                            // roll !== 'viewer' && roll !== 'member' ? (
                            <Link
                              to={(location) => ({
                                ...location,
                                pathname: `/EditNotice/${userName}`,
                                theProps: { noticeId: notice.id },
                              })}
                            >
                              <Button type="button">Edit Notice</Button>
                            </Link>
                            // ): null
                          );
                        }}
                      </UserConsumer>
                    </div>
                  ) : null
                ) : null}

                {/* FOLLOWING IS THE DEFAULT WORKING EDIT AND DELETE SECTION */}

                {/* <div>
                  <DelNotice id={notice.id} fetchNotices={fetchNotices} />

                  <UserConsumer>
                    {(userName) => {
                      return (
                        <Link
                          to={(location) => ({
                            ...location,
                            pathname: `/EditNotice/${userName}`,
                            theProps: { noticeId: notice.id },
                          })}
                        >
                          <Button type="button">Edit Notice</Button>
                        </Link>
                      );
                    }}
                  </UserConsumer>
                </div> */}

                {/* ABOVE IS THE DEFAULT WORKING EDIT AND DELETE SECTION */}

                {/* <UserConsumer>
                  {(userName) => {
                    return (
                      <div>
                        {(redirect)?
                        <Redirect
                          to={{
                            pathname: `/EditNotice/${userName}`,
                            state: { noticeId: notice.id },
                          }}
                        />
                        : null}
                        <Button type="button">Edit Notice</Button>
                      </div>
                    );
                  }}
                </UserConsumer> */}

                {/* ___THERE IS SOMETHING TO LERN FROM BELOW___ */}
                {/* 
                {redirect ? (
                  <Redirect
                    to={{
                      pathname: `/EditNotice/${userName}`,
                      state: { noticeId: notice.id },
                    }}
                  />
                ) : null} */}
              </Carousel.Item>

              //
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
}

export default ShowNotices;
