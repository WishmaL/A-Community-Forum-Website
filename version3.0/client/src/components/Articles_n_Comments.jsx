/**
 * THIS ONE BUILT WITH HORIZONTAL GALARRY NPM LIBRARAY 
 * NOT USING
 */

import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Comments from './Comments';
import axios from 'axios';
import HorizontalGallery from 'react-dynamic-carousel';

// import Delthis from './Delthis';

class Articles_n_Comments extends Component {
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
        // console.log(res);
        this.setState({ comments: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const articleList = this.state.articles;

    const commentList = this.state.comments;

    return (
      <div>
        <div className="alert alert-primary" role="alert">
          <h1>Article section</h1>
        </div>
        <Container>
          <HorizontalGallery
            tiles={articleList.map((article) => (
              <div key={article.id}>
               
                <Col>
                <h3>Article</h3>
                  <Row > 
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

                  {/* Under this comments must be added */}

                  <Col >
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
                  </Col>
                </Col>
              </div>
            ))}
            elementWidth={1000}
            fadeDistance={100}
            minPadding={30}
            onReachEnd ={(galleryPosition)=>{
              return 1000
            }}
          />
        </Container>
      </div>
    );
  }
}

export default Articles_n_Comments;
