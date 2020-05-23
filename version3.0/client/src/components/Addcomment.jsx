import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col, Card } from 'react-bootstrap';

function Addcomment() {
  return (
    <div>
      <Form>
        {/* <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group> */}

        <Form.Group as={Row} controlId="formHorizontalTextarea">
          <Form.Label column sm={2}>
            Comment
          </Form.Label>
          <Col sm={10}>
            {/* <Form.Label>Example textarea</Form.Label> */}
            <Form.Control as="textarea" rows="3" />
          </Col>
        </Form.Group>

        <fieldset>
          {/* <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Radios
            </Form.Label>
            <Col sm={10}>
              
              <Form.Check type="switch" id="custom-switch1" label="Viewer" />
              <Form.Check type="switch" id="custom-switch2" label="Member" />
              <Form.Check type="switch" id="custom-switch3" label="Admin" />
              <Form.Check
                type="switch"
                id="custom-switch4"
                label="Great Admin"
              />
            </Col>
          </Form.Group> */}
        </fieldset>
        {/* <Form.Group as={Row} controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group> */}

        <Form.Group as={Row}>
          <Col sm={{ span: 10 }}>
            <Button type="submit">Comment</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Addcomment;
