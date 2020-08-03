import React, { useEffect, useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Row, Col, Card, Button, Image, Accordion } from 'react-bootstrap';
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
import Pagination_ from './Pagination_';
import EditArticle from './EditArticle';

function ArtNCom() {
  const roll = localStorage.getItem('roll');

  const [allArticleList, setAllArticleList] = useState([]);
  const [articlePics, setArticlePics] = useState([]);
  const [default_key, setDefault_key] = useState('');
  const [comments, setComments] = useState([]);

  const [accordianIsClicked, setAccordianIsClicked] = useState(false);

  // ////////////////////////////////////////////////////////////////////
  const [posts, setPosts] = useState([]); // similar to allArticles
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(1);
  // ////////////////////////////////////////////////////////////////////

  const fetchArticles = () => {
    axios
      .get('/articles/getArticles')
      .then((res) => {
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

  switch (roll) {
    case 'greatAdmin':
      articleList = allArticleList;

      break;

    case 'admin':
      articleList = allArticleList.filter((article) => {
        return article.admin_r === 1;
      });

      break;

    case 'member':
      articleList = allArticleList.filter((article) => {
        return article.member_r === 1;
      });

      break;

    default:
      articleList = allArticleList.filter((article) => {
        return article.viewer_r === 1;
      });
      break;
  }

  articleList.sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
  );
  // //////////////////////////////////////////////////////////////////////
  // Get current posts
  const indexOfLastPost = currentPage * articlesPerPage;
  const indexOfFirstPost = indexOfLastPost - articlesPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const currentArticles = articleList.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  // console.log(articleList)
  // console.log(currentArticles);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentPage);
  // //////////////////////////////////////////////////////////////////////

  const AccordianClickHandler = () => {
    setAccordianIsClicked(!accordianIsClicked);
  };

  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <h1>Article section</h1>

        <UserConsumer>
          {(userName) => {
            return roll !== 'viewer' && roll !== 'member' ? (
              <Link
                to={(location) => ({
                  ...location,
                  pathname: `/AddArticle/${userName}`,
                })}
              >
                <Button type="button">Add Article</Button>
              </Link>
            ) : null;
          }}
        </UserConsumer>
      </div>
      <div className="container">
        {currentArticles.map((article) => {
          return (
            <div key={article.id} eventkey={article.id} title={article.title}>
              <Col>
                <Row>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <h1 className="text-center">{article.title}</h1>
                      </Card.Title>

                      {articlePics
                        .filter((picInfo) => {
                          return picInfo.articleId === article.id;
                        })
                        .map((picInfo) => {
                          return (
                            <div key={picInfo.id}>
                              <Image
                                className="mx-auto d-block"
                                src={picInfo.articlePicPath}
                                alt="forrid"
                                height="300px"
                                width="200px"
                              />
                            </div>
                          );
                        })}

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

                    {roll !== 'viewer' && roll !== 'member' ? (
                      (roll === 'admin' && article.admin_w) ||
                      roll === 'greatAdmin' ? (
                        <div>
                          <Row>
                            <Col>
                              <DelArticle
                                id={article.id}
                                fetchArticles={fetchArticles}
                              />
                            </Col>

                            <Col>
                              <UserConsumer>
                                {(userName) => {
                                  return (
                                    <Link
                                      to={{
                                        pathname: `/EditArticle/${userName}`,
                                        data: { articleId: article.id },
                                      }}
                                    >
                                      {/* <Button type="button">
                                        Edit Article
                                      </Button> */}
                                      <EditArticle />
                                    </Link>
                                  );
                                }}
                              </UserConsumer>
                            </Col>
                          </Row>
                        </div>
                      ) : null
                    ) : null}
                  </Card>
                </Row>
                <Row>
                  <Col>
                    <h3>Comments</h3>

                    <style type="text/css">
                      {`
                            .my_class {
                              height:100px;
                              overflow:auto
                            }
                          `}
                    </style>

                    <Accordion>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        onClick={AccordianClickHandler}
                      >
                        {accordianIsClicked ? (
                          <h4>Hide Comments</h4>
                        ) : (
                          <h4>Show Comments</h4>
                        )}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
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
                                      className="my_class"
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

                          {roll !== 'viewer' ? (
                            (roll === 'admin' && article.admin_w) ||
                            (roll === 'member' && article.member_w) ||
                            roll === 'greatAdmin' ? (
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
                            ) : null
                          ) : null}
                        </div>
                      </Accordion.Collapse>
                    </Accordion>
                  </Col>
                </Row>
              </Col>
            </div>
          );
        })}

        {/* </Tabs> */}

        <Pagination_
          articlesPerPage={articlesPerPage}
          totalPosts={articleList.length}
          paginate={paginate}
        />
      </div>

      {/* <AddsPage /> */}
    </div>
  );
}

export default ArtNCom;
