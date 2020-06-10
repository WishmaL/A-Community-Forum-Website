import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Comments from './Comments';
import axios from 'axios';
import '../styles/carousel.css';
import Addcomment from './Addcomment';
import { UserConsumer, CommentIdProvider, CommentsProvider } from './Context';

export class ArtNCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      comments: [],
    };
    this.updateComments = this.updateComments.bind(this);
  }

  updateArticles() {
    axios
      .get('/articles/getArticles')
      .then((res) => {
        this.setState({ articles: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateComments() {
    axios
      .get('/comments/getComments')
      .then((res) => {
        // console.log(res);
        this.setState({ comments: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.updateArticles();

    this.updateComments();
  }

  clickHandler(userName) {
    window.location = `/AddArticle/${userName}`;
  }

  render() {
    const articleList = this.state.articles;
    const commentList = this.state.comments;
    // console.log(Object.keys(articleList)[0])

    return (
      <div>
        <div className="alert alert-primary" role="alert">
          <h1>Article section</h1>

          {/* set the addArticle component */}

          <UserConsumer>
            {(userName) => {
              return (
                <Button onClick={() => this.clickHandler(userName)}>
                  Add article
                </Button>
              );
            }}
          </UserConsumer>
          {/* <Button onClick={this.clickHandler}>Add article</Button> */}
        </div>
        <div className="container">
          <Tabs
            defaultActiveKey={Object.keys(articleList)[0]}
            transition={false}
            id="noanim-tab-example"
          >
            {/* <Carousel interval={null}> */}
            {articleList.map((article) => {
              return (
                //  <div key={article.id}>
                <Tab
                  key={article.id}
                  eventKey={article.id}
                  title={article.title}
                >
                  <Col>
                    <h3>Article</h3>
                    <Row>
                      <Card>
                        <Card.Body>
                          <Card.Title>{article.title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            Card Subtitle*****optional*******
                          </Card.Subtitle>
                          <img
                            src="http://lorempics.com/300x200/142850/f7f7f7"
                            alt="the pic"
                          />
                          <Card.Text>{article.body}</Card.Text>
                          <Card.Link href="#">Card 1</Card.Link>
                          <Card.Link href="#">Link 2</Card.Link>
                        </Card.Body>
                      </Card>
                    </Row>
                    <Row>
                      <Col>
                        {/* remove the arrow icons here */}
                        <h3>Comments</h3>

                        <style type="text/css">
                          {`
                            .my_class {
                              height:500px;
                              overflow-y:scroll
                            }
                          `}
                        </style>

                        <div className="my_class">
                          {commentList
                            .filter((comment) => {
                              return comment.articleId === article.id;
                            })
                            .map((comment) => (
                              <div key={comment.id}>
                                <CommentsProvider value={this.updateComments}>
                                  <CommentIdProvider value={comment.id}>
                                    <Comments
                                      thread={comment.thread}
                                      time={comment.time}
                                      id={comment.id}
                                      // updateComments={updateComments()}
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
                                updateComments={this.updateComments}
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
}

export default ArtNCom;
