import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import axios from 'axios';
import CurrentUser from '../components/CurrentUser';

export const AddGraph = (props) => {
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [iframe, setIframe] = useState('');
  const [admin_r, setAdmin_r] = useState(0);
  // const [admin_w, setAdmin_w] = useState(0)
  const [member_r, setMember_r] = useState(0);
  // const [member_w, setMember_w] = useState(0)
  const [viewer_r, setViewer_r] = useState(0);

  useEffect(() => {
    setUserName(props.match.params.userName);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    let data_ = {
      userName: userName,
      title: title,
      iframe: iframe,
      admin_r: admin_r,
      member_r: member_r,
      viewer_r: viewer_r,
    };
    axios
      .post('/graphs/newGraph', data_)
      .then((res) => {
        console.log(res);
        // this.setState({ articles: res.data });
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
          {/* <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Example select</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group> */}
          {/* <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Example multiple select</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group> */}
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

          <Form.Group id="formGridCheckbox">
            {/* <h3>Who can Edit</h3>
            <Form.Check type="checkbox" label="Great Admin" onClick={ setBody(1)}/>
            <Form.Check type="checkbox" label="Admin" onClick={() => setAdmin_w(1)}/>
            <Form.Check type="checkbox" label="Member" onClick={() => setMember_w(1)}/> */}
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
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default AddGraph;