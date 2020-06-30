import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

function Carousel_desc({ title, body }) {
  return (
    <div>
      {/* Accordian doesn't match */}
      {/* <Accordion>
        <Card>
          <Accordion.Toggle as={Button} eventKey="0">
            {title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{body}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion> */}
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> {body} </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
            <br />
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Carousel_desc;
