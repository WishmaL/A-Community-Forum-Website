import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Comments from './Comments';
import axios from 'axios';
import '../styles/carousel.css';
import Addcomment from './Addcomment';
import { UserConsumer, ArticleIdProvider } from './Context';

export class ArtNCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      comments: [],
    };

    // this.clickHandler = this.clickHandler.bind()
  }

  componentDidMount() {
    axios
      .get('/articles/getArticles')
      .then((res) => {
        
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


  clickHandler(userName){
    // alert("hello there")
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
            {userName => {
              return <Button onClick={() => this.clickHandler(userName)}>Add article</Button>
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
                <Tab key={article.id} eventKey={article.id} title={article.title}>
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
                              <ArticleIdProvider value = {comment.id}>
                                  <Comments
                                  thread={comment.thread}
                                  time={comment.time}
                                />
                              </ArticleIdProvider>
                              
                            </div>
                          ))}
                          <UserConsumer>
                            {username => {
                              return <Addcomment articleId={article.id} userName={username}/>
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
