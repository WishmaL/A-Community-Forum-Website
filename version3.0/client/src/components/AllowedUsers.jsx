import React from 'react';
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap';

export default function AllowedUsers() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Who can see...
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ListGroup className="list-group-flush">
                <Button className="primary">Admin</Button>
                <Button variant="primary">Member</Button>
                <Button variant="primary">Viewer</Button>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
