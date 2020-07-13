// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem mollitia ea explicabo aut maxime perspiciatis nam eligendi quod eius. Eligendi voluptates libero quaerat velit eaque nisi facilis hic consequatur suscipit ipsam reprehenderit sunt architecto, cum magnam harum labore ut numquam minima assumenda vero consectetur odit! Aspernatur officia ipsam sunt quos, dicta illo voluptatum quidem earum beatae, libero iste porro, consequatur error ea veniam numquam magnam ab voluptas. Facilis fugiat id quam, illum repudiandae laborum laboriosam sed harum error aliquam commodi, nostrum atque neque velit consequuntur, fugit exercitationem autem corporis molestiae. Vel eaque necessitatibus dolorem sequi ullam sunt consequuntur modi quod.

import React, { useEffect, useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Row, Col, Card, Button, Image } from 'react-bootstrap';
import Comments from './Comments';
import axios from 'axios';
import '../styles/carousel.css';
import Addcomment from './Addcomment';
import { UserConsumer, CommentIdProvider, CommentsProvider } from './Context';
import DelArticle from './DelArticle';
// try to add link between addArticle and so on
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';

function ArtNCom() {
  const roll = localStorage.getItem('roll');

  const [allArticleList, setAllArticleList] = useState([]);
  const [articlePics, setArticlePics] = useState([]);
  const [default_key, setDefault_key] = useState('');
  const [comments, setComments] = useState([]);

  const fetchArticles = () => {
    axios
      .get('/articles/getArticles')
      .then((res) => {
        // this.setState({ articles: res.data, default_Key: res.data[0] });
        setAllArticleList(res.data);
        setDefault_key(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchComments = () => {
    axios
      .get('/comments/getComments')
      .then((res) => {
        // console.log(res);
        // this.setState({ comments: res.data });
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchArticlePics = () => {
    axios
      .get('/articlePics/getArticlesPics')
      .then((res) => {
        // this.setState({ articlePics: res.data });
        // console.log(res.data);
        setArticlePics(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchArticles();
    fetchArticlePics();
    fetchComments();
  }, []);

  let articleList;
  // let editFlag;

  // console.log(roll);
  switch (roll) {
    case 'greatAdmin':
      articleList = allArticleList;
      // console.log(notices);
      break;

    case 'admin':
      articleList = allArticleList.filter((article) => {
        return article.admin_r === 1;
      });
      // editFlag = 'admin_w';
      break;

    case 'member':
      articleList = allArticleList.filter((article) => {
        return article.member_r === 1;
      });
      // editFlag = 'member_w';
      break;

    default:
      articleList = allArticleList.filter((article) => {
        return article.viewer_r === 1;
      });
      break;
  }

  return (
    <div>
      {/* {console.log(this.state.default_Key)}
        {console.log(articleList[0])} */}
      <div className="alert alert-primary" role="alert">
        <h1>Article section</h1>

        {/* set the addArticle component */}

        <UserConsumer>
          {(userName) => {
            // let link = `/AddArticle/${userName}`
            return (
              // <Button onClick={() => this.clickHandler(userName)}>

              // following will send the current location as prop to AddArticle component
              roll !== 'viewer' ? (
                <Link
                  to={(location) => ({
                    ...location,
                    pathname: `/AddArticle/${userName}`,
                  })}
                >
                  <Button type="button">Add Article</Button>
                </Link>
              ) : null
            );
          }}
        </UserConsumer>
      </div>
      <div className="container">
        <Tabs
          defaultActiveKey={Object.keys(articleList)[0]}
          // defaultActiveKey={articleList[0]}
          // defaultActiveKey={this.state.articles[0]}
          transition={false}
          id="noanim-tab-example"
        >
          {articleList.map((article) => {
            return (
              <Tab key={article.id} eventKey={article.id} title={article.title}>
                <Col>
                  <h3>Article</h3>
                  <Row>
                    <Card>
                      <Card.Body>
                        <Card.Title>
                          <h1 className="text-center">{article.title}</h1>
                        </Card.Title>

                        {/* /////////////////////////////////// */}

                        {
                          articlePics
                            .filter((picInfo) => {
                              return picInfo.articleId === article.id;
                            })
                            .map((picInfo) => {
                              return (
                                <div key={picInfo.id}>
                                  <Image
                                    className="d-block w-100"
                                    src={picInfo.articlePicPath}
                                    alt="forrid"
                                    fluid
                                  />
                                </div>
                              );
                            })

                          // console.log(picInfo);
                        }

                        {/* //////////////////////////////////// */}

                        {/* <Card.Subtitle className="mb-2 text-muted">
                            Card Subtitle*****optional*******
                          </Card.Subtitle> */}
                        {/* <img
                            src="http://lorempics.com/300x200/142850/f7f7f7"
                            alt="the pic"
                          /> */}
                        {ReactHtmlParser(article.body)}
                        <Card.Link href="#">Card 1</Card.Link>
                        <Card.Link href="#">Link 2</Card.Link>
                        <br />
                        {moment(article.time).format(
                          'dddd, MMMM Do YYYY, h:mm:ss a'
                        )}

                        <h5>Created by:{article.userName}</h5>
                        {article.updatedBy === null ? null : (
                          <h5>Updated by:{article.updatedBy}</h5>
                        )}
                      </Card.Body>

                      {roll !== 'viewer' ? (
                        (roll === 'admin' && article.admin_w) ||
                        (roll === 'member' && article.member_w) ||
                        roll === 'greatAdmin' ? (
                          <div>
                            {/* DELETE FEATURE OF THE ARTICLE */}
                            <DelArticle
                              id={article.id}
                              fetchArticles={fetchArticles}
                            />
                            {/* DELETE FEATURE OF THE ARTICLE */}

                            {/* EDIT THE ARTICLE */}
                            <UserConsumer>
                              {(userName) => {
                                return (
                                  // <Link
                                  //   to={(location) => ({
                                  //     ...location,
                                  //     pathname: `/EditArticle/${userName}`,
                                  //     theProps: { articleId: article.id },
                                  //   })}
                                  // >
                                  //   <Button type="button">Edit Article</Button>
                                  // </Link>
                                  <Link
                                    to={{
                                      pathname: `/EditArticle/${userName}`,
                                      data: { articleId: article.id }, // your data array of objects
                                    }}
                                  >
                                    <Button type="button">Edit Article</Button>
                                  </Link>
                                );
                              }}
                            </UserConsumer>
                          </div>
                        ) : null
                      ) : null}
                      {/* EDIT THE ARTICLE */}
                    </Card>
                  </Row>
                  <Row>
                    <Col>
                      {/* remove the arrow icons here */}
                      <h3>Comments</h3>

                      <style type="text/css">
                        {`
                            .my_class {
                              height:10px;
                              overflow-y:scroll
                            }
                          `}
                      </style>

                      <div>
                        {comments
                          .filter((comment) => {
                            return comment.articleId === article.id;
                          })
                          .map((comment) => (
                            <div key={comment.id}>
                              <CommentsProvider value={fetchComments}>
                                <CommentIdProvider value={comment.id}>
                                  <Comments
                                    thread={comment.thread}
                                    time={moment(comment.time).format(
                                      'dddd, MMMM Do YYYY, h:mm:ss a'
                                    )}
                                    id={comment.id}
                                  />
                                </CommentIdProvider>
                              </CommentsProvider>
                            </div>
                          ))}
                      </div>

                      <UserConsumer>
                        {(username) => {
                          return (
                            <Addcomment
                              articleId={article.id}
                              userName={username}
                              fetchComments={fetchComments}
                            />
                          );
                        }}
                      </UserConsumer>
                    </Col>
                  </Row>
                </Col>
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}

export default ArtNCom;
