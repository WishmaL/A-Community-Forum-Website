import React from 'react';
import { Card } from 'react-bootstrap';

function Carousel_desc({ title, body }) {
  return (
    <div>
      <Card>
        <Card.Header className='text-center'>{title}</Card.Header>
        <Card.Body className='text-center'>
          <p> {body} </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Carousel_desc;
