import React, { useState, useEffect } from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import CurrentUser from '../components/CurrentUser';

function AddArticle(props) {
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [admin_r, setAdmin_r] = useState(0);
  const [admin_w, setAdmin_w] = useState(0);
  const [member_r, setMember_r] = useState(0);
  const [member_w, setMember_w] = useState(0);
  const [viewer_r, setViewer_r] = useState(0);

  useEffect(() => {
    setUserName(props.match.params.userName);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    let data_ = {
      userName: userName,
      title: title,
      body: body,
      admin_r: admin_r,
      admin_w: admin_w,
      member_r: member_r,
      member_w: member_w,
      viewer_r: viewer_r,
    };
    axios
      .post('/articles/newArticle', data_)
      .then((res) => {
        console.log(res);
        // following will bring back to the previous page
        window.location.href='../';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <CurrentUser currentUser={userName} />
        <Form onSubmit={submitHandler}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Article title</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Article body</Form.Label>
            <Form.Control
              as="textarea"
              rows="10"
              placeholder=""
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>

          {/* File upload has to be done */}

          <Form.Group id="formGridCheckbox">
            <h3>Who can Edit</h3>
            {/* <Form.Check type="checkbox" label="Great Admin" onClick={ setBody(1)}/> */}
            <Form.Check
              type="checkbox"
              label="Admin"
              onClick={() => setAdmin_w(1)}
            />
            <Form.Check
              type="checkbox"
              label="Member"
              onClick={() => setMember_w(1)}
            />
            <h3>Who can Read</h3>
            {/* <Form.Check type="checkbox" label="Great Admin" /> */}
            <Form.Check
              type="checkbox"
              label="Admin"
              onClick={() => setAdmin_r(1)}
            />
            <Form.Check
              type="checkbox"
              label="Member"
              onClick={() => setMember_r(1)}
            />
            <Form.Check
              type="checkbox"
              label="Viewer"
              onClick={() => setViewer_r(1)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddArticle;
