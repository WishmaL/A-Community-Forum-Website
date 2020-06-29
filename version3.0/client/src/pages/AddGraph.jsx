import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import axios from 'axios';
import CurrentUser from '../components/CurrentUser';

export const AddGraph = (props) => {
  const [userName, setUserName] = useState(props.match.params.userName);
  const [title, setTitle] = useState('');
  const [iframe, setIframe] = useState('');
  const [description, setDescription] = useState('');
  const [admin_r, setAdmin_r] = useState(0);
  const [member_r, setMember_r] = useState(0);
  const [viewer_r, setViewer_r] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    let data_ = {
      userName: userName,
      title: title,
      iframe: iframe,
      description: description,
      admin_r: admin_r,
      member_r: member_r,
      viewer_r: viewer_r,
    };
    axios
      .post('/graphs/newGraph', data_)
      .then((res) => {
        console.log(res);
        alert('New graph is added!!!');
        
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
          <Form.Group controlId="exampleForm.ControlInput1">
            <h2 className="text-center">Add a New Graph</h2>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter the iframe here</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              placeholder='<iframe width="100%" height="800"src="https://datastudio.google.com/embed/reporting/1adef32e-6c48-4326-b5d8-2b044f4e5e1d/page/faBKB" frameborder="0" style="border: 0;" allowfullscreen></iframe>'
              value={iframe}
              onChange={(e) => setIframe(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <h3>Who can Read</h3>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default AddGraph;
{
  /*
              TESTING GRAPH 1
            
            <iframe
              width="100%"
              height="800"
              src="https://datastudio.google.com/embed/reporting/a6bbbf99-de99-414e-842e-7fb21552d6bd/page/nWoKB"
              frameborder="0"
              // style="border: 0;"
              allowfullscreen
            ></iframe>

         TESTING GRAPH 2
            <iframe
              width="100%"
              height="800"
              src="https://datastudio.google.com/embed/reporting/1adef32e-6c48-4326-b5d8-2b044f4e5e1d/page/faBKB"
              frameborder="0"
              // style="border: 0;"
              allowfullscreen
            ></iframe> */
}
