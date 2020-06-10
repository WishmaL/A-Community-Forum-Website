import React, { useState } from 'react';
import { Container, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import CurrentUser from '../components/CurrentUser';
import moment from 'moment';
import AddNoticePics from '../components/AddNoticePics';

function AddNotice(props) {
  const [userName, setUserName] = useState(props.match.params.userName);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [time, setTime] = useState('');
  const [admin_r, setAdmin_r] = useState(0);
  const [admin_w, setAdmin_w] = useState(0);
  const [member_r, setMember_r] = useState(0);
  const [member_w, setMember_w] = useState(0);
  const [viewer_r, setViewer_r] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    // set the current time here
    setTime(moment().format());
    let data_ = {
      userName: userName,
      title: title,
      body: body,
      time: time,
      admin_r: admin_r,
      admin_w: admin_w,
      member_r: member_r,
      member_w: member_w,
      viewer_r: viewer_r,
    };
    console.log(data_);
    axios
      .post('/notices/newNotice', data_)
      .then((res) => {
        console.log(res);
        // this.setState({ articles: res.data });
        alert('New Notice is added!!!');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   const clickHandler = (userName) => {
  //     window.location = `/AddNotice/${userName}`;
  //   };

  return (
    <div>
      <Container>
        <CurrentUser currentUser={userName} />
        {/* the title of adding notice */}
        <h1>Add new notice</h1>
        {/* ////////////////////////// */}
        <Form onSubmit={submitHandler}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Notice title</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows="6"
              placeholder=""
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>

          {/* File upload has to be done */}

          <AddNoticePics />

          {/* pic upload */}

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
              onClick={() => setAdmin_w(1)}
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
            Add new notice
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddNotice;
