// this reagards showing notices

import React, { useEffect, useState, useContext, useReducer } from 'react';
import { Carousel, Container, Button, Col, Row, Image } from 'react-bootstrap';
import Axios from 'axios';
import { UserConsumer } from './Context';
import { Link, Redirect } from 'react-router-dom';
import Carousel_desc from './Carousel_desc';
import DelNotice from './DelNotice';
import { RollContext } from '../context/Roll';

function ShowNotices() {
  const roll = useContext(RollContext);

  // const roll = 'greatAdmin';

  // console.log(roll)
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
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchNotices();
    fetchNoticePics();
    // rollPermission()

    // console.log(roll);

    // setNotices();
    // dispatch(roll);
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

  // TRY #1 <<DIDN'T WORKED>>
  let notices;
  // console.log(roll)
  // console.log(AllNotices);
  switch (roll) {
    case 'greatAdmin':
      // setNotices(AllNotices);
      notices = AllNotices;
      console.log(notices);
      break;

    case 'admin':
      notices = AllNotices.filter((notice) => {
        return notice.admin_r === 1;
      });

      // setNotices(data_);
      break;

    case 'member':
      notices = AllNotices.filter((notice) => {
        return notice.member_r === 1;
      });
      // console.log(data_);

      break;

    default:
      notices = AllNotices.filter((notice) => {
        return notice.viewer_r === 1;
      });

      console.log(notices);
      // setNotices(notices)
      break;
  }

  // _TRY #2__<<DIDN'T WORKED>>

  // let data_;
  // const noticesBasedOnData = new Map([
  //   [
  //     'greatAdmin',
  //     {
  //       data_: AllNotices,
  //     },
  //   ],
  //   [
  //     'admin',
  //     {
  //       data_: AllNotices.filter((notice) => {
  //         return notice.admin_r === 1;
  //       }),
  //     },
  //   ],
  //   [
  //     'member',
  //     {
  //       data_: AllNotices.filter((notice) => {
  //         return notice.member_r === 1;
  //       }),
  //     },
  //   ],
  //   [
  //     'viewer',

  //     (data_ = AllNotices.filter((notice) => {
  //       return notice.viewer_r === 1;
  //     })),
  //   ],
  // ]);

  // const sta = noticesBasedOnData.get('admin');
  // // setNotices(noticesBasedOnData.get(roll))
  // console.log(sta.data_);

  // useEffect(() => {
  //   setNotices(sta.data_);
  // }, [sta.data_]);

  // TRY#3 <<DIDN'T WORKED>>

  // ___too many renders will occur___
  // setNotices((old) => [...old, sta.data_]);

  // TRY#4 <<DIDN'T WORKED>>
  // ___too many renders will occur___
  // setNotices(sta.data_)

  // TRY #4 __USING useReducer__

  // const initState = 'viewer';
  // let notices = [];

  // const reducer = (notices, roll) => {
  //   switch (roll) {
  //     case 'greatAdmin':
  //       // setNotices(AllNotices);
  //       return AllNotices;
  //     case 'admin':
  //       return AllNotices.filter((notice) => {
  //         return notice.admin_r === 1;
  //       });
  //     case 'member':
  //       return AllNotices.filter((notice) => {
  //         return notice.member_r === 1;
  //       });

  //     case 'viewer':
  //       return AllNotices.filter((notice) => {
  //         return notice.viewer_r === 1;
  //       });
  //     default:
  //       return AllNotices.filter((notice) => {
  //         return notice.viewer_r === 1;
  //       });
  //   }
  // };

  // const [notices_, dispatch] = useReducer(reducer, notices);

  // console.log(roll);
  // console.log(notices_);

  // dispatch(roll);
  return (
    <div>
      {/* {console.log(roll)} */}
      {}
      <UserConsumer>
        {(userName) => {
          return (
            <div>
              <div className="alert alert-primary" role="alert">
                <h1>Notice section</h1>
                {/* {roll === 'greatAdmin' ? ( */}
                <Link
                  to={(location) => ({
                    ...location,
                    pathname: `/AddNotice/${userName}`,
                  })}
                >
                  <Button type="button">Add Notice</Button>
                </Link>
                {/* // ) : null} */}
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
