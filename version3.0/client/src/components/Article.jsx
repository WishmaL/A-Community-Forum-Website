import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Comments from './Comments';
import Articles from './Articles';

export class Article extends Component {
  render() {
    return (
      <div>
        <div class="alert alert-primary" role="alert">
          <h1>Article section</h1>
        </div>
        <Container>
          <Row>
            <Col md={6}>
              <Articles />
            </Col>
            <Col md={6}>
              <Comments />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Article;
