import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

function Addcomment({ articleId, userName, updateComments }) {
  // add the following params from useContext
  // userId, userName,

  const [thread, setThread] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let data_ = {
      articleId,
      userName,
      thread: thread,
    };

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
        <Form.Group as={Row} controlId="formHorizontalTextarea">
          <Form.Label column sm={2}>
            Comment
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows="3"
              value={thread}
              onChange={(e) => setThread(e.target.value)}
            />
          </Col>
        </Form.Group>

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
