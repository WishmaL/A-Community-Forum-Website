import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { UserContext } from './Context';

function Addcomment({ articleId, userName, updateComments }) {
  // add the following params from useContext
  // userId, userName,

  const [thread, setThread] = useState('');
  // const [userName, setUserName] = useState({userName})
  // const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let data_ = {
      articleId,
      userName,
      thread: thread,
    };
    // console.log(data_)

    axios
      .post('/comments/newComment', data_)
      .then(function (response) {
        alert('Successfully comment has been added!');
      })
      .catch(function (error) {
        console.log('Error occured! ', error);
      });

    updateComments();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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
            <Form.Control
              as="textarea"
              rows="3"
              value={thread}
              onChange={(e) => setThread(e.target.value)}
            />
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
      {/* </form> */}
    </div>
  );
}

export default Addcomment;
