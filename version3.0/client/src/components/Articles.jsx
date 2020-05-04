import React from 'react'
import { Card, Container } from 'react-bootstrap';

export default function Articles() {
    return (
        <div>
            <Card>
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
        </div>
    )
}
