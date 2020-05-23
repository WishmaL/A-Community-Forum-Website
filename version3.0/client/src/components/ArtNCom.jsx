import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Comments from './Comments';
import axios from 'axios';
import '../styles/carousel.css';
import Addcomment from './Addcomment';

class ArtNCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      comments: [],
    };
  }

  componentDidMount() {
    axios
      .get('/articles/getArticles')
      .then((res) => {
        // console.log(res)
        this.setState({ articles: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get('/comments/getComments')
      .then((res) => {
        console.log(res);
        this.setState({ comments: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // clickHandler = (commentID) => {
  //   axios
  //     .post('/comments/newComment', {
  //       commentId: commentID,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  render() {
    const articleList = this.state.articles;
    const commentList = this.state.comments;

    return (
      <div>
        <div className="alert alert-primary" role="alert">
          <h1>Article section</h1>
        </div>
        <Container>
          <Carousel interval={null}>
            {articleList.map((article) => {
              return (
                <Carousel.Item>
                  <div key={article.id}>
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

                          {commentList
                            .filter((comment) => {
                              return comment.articleId === article.id;
                            })
                            .map((comment) => (
                              <div key={comment.id}>
                                <Comments
                                  thread={comment.thread}
                                  time={comment.time}
                                />
                              </div>
                            ))}

                          {/* <form action="" method="post">
                            <input type="text" /> */}
                            {/* the adding comment form */}
                            <Addcomment />
                            {/* <button onSubmit={() => clickHandler}>
                              Add a comment
                            </button> */}
                          {/* </form> */}
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default ArtNCom;
