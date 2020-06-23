import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Comments from './Comments';
import axios from 'axios';
import '../styles/carousel.css';
import Addcomment from './Addcomment';
import { UserConsumer, CommentIdProvider, CommentsProvider } from './Context';
import DelArticle from './DelArticle';

export class ArtNCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      comments: [],
    };
    this.fetchComments = this.fetchComments.bind(this);
    this.fetchArticles = this.fetchArticles.bind(this);
  }

  fetchArticles() {
    axios
      .get('/articles/getArticles')
      .then((res) => {
        this.setState({ articles: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchComments() {
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
    this.fetchArticles();

    this.fetchComments();
  }

  clickHandler(userName) {
    window.location = `/AddArticle/${userName}`;
  }

  render() {
    const articleList = this.state.articles;
    const commentList = this.state.comments;

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
        </div>
        <div className="container">
          <Tabs
            defaultActiveKey={Object.keys(articleList)[0]}
            transition={false}
            id="noanim-tab-example"
          >
            {articleList.map((article) => {
              return (
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

                        {/* DELETE FEATURE OF THE ARTICLE */}
                        <DelArticle
                          id={article.id}
                          fetchArticles={this.fetchArticles}
                        />


                         {/* DELETE FEATURE OF THE ARTICLE */}
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
                                <CommentsProvider value={this.fetchComments}>
                                  <CommentIdProvider value={comment.id}>
                                    <Comments
                                      thread={comment.thread}
                                      time={comment.time}
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
                                fetchComments={this.fetchComments}
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

// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem mollitia ea explicabo aut maxime perspiciatis nam eligendi quod eius. Eligendi voluptates libero quaerat velit eaque nisi facilis hic consequatur suscipit ipsam reprehenderit sunt architecto, cum magnam harum labore ut numquam minima assumenda vero consectetur odit! Aspernatur officia ipsam sunt quos, dicta illo voluptatum quidem earum beatae, libero iste porro, consequatur error ea veniam numquam magnam ab voluptas. Facilis fugiat id quam, illum repudiandae laborum laboriosam sed harum error aliquam commodi, nostrum atque neque velit consequuntur, fugit exercitationem autem corporis molestiae. Vel eaque necessitatibus dolorem sequi ullam sunt consequuntur modi quod.
