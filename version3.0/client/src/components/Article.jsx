import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Comments from './Comments';

export class Article extends Component {
  render() {
    return (
      <div>
        <div class="alert alert-primary" role="alert">
          <h1>Article section</h1>
        </div>
        <Container>
          <Row>
            <Col sm={8}>
              {/* <h1>topic 1</h1>
              <img src="http://lorempics.com/300x200/142850/f7f7f7" alt="the pic"/>
              <p>pic discription</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                eaque nisi fugit itaque nesciunt, totam iusto quod repudiandae
                rerum recusandae nemo laudantium commodi incidunt debitis. Porro
                laboriosam voluptates aspernatur omnis, sapiente totam eveniet,
                facilis quae iure alias molestiae! Debitis atque, accusantium
                fugiat deleniti exercitationem laborum fuga quod mollitia dicta
                quae!
              </p> */}
              <Card style={{ width: 'rem' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <img src="http://lorempics.com/300x200/142850/f7f7f7" alt="the pic"/>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, sit vero. Saepe, culpa. Ipsam fuga nobis consectetur perferendis. Odit ipsum libero eum alias nihil adipisci a ex quis, eveniet animi sed doloremque repellendus asperiores totam atque quas obcaecati, expedita exercitationem modi, ea dolorem saepe eaque et! Quia sit cum maiores deserunt voluptatibus dolorum ab perspiciatis consectetur reiciendis unde? Odio autem quidem, repellendus officia adipisci reprehenderit nulla. Ab distinctio suscipit perspiciatis atque iste voluptatem voluptas modi labore facere dolor aliquam quaerat dolores numquam animi neque similique laboriosam, aut repellendus cum doloremque officiis, ducimus blanditiis? Ab quo optio accusantium, dignissimos nemo ea?
                    <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, dignissimos, ducimus, praesentium facere nobis vel quia sed eveniet laudantium quibusdam veniam tempora rerum tempore. Eos!
                  </p>
                  </Card.Text>
                  <Card.Link href="#">Card 1</Card.Link>
                  <Card.Link href="#">Link 2</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Comments />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Article;
