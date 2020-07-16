import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Col, Button, Form, Card, Image } from 'react-bootstrap';
import axios from 'axios';
import CurrentUser from '../components/CurrentUser';

const EditGraph = (props) => {
  let history = useHistory();
  const [id, setId] = useState(props.location.theProps.noticeId);

  const [graph, setGraph] = useState({});
  const [title, setTitle] = useState('');
  const [iframe, setIframe] = useState('');
  const [description, setDescription] = useState('');

  const [admin_r, setAdmin_r] = useState('');
  //   const [admin_w, setAdmin_w] = useState('');
  const [member_r, setMember_r] = useState('');
  //   const [member_w, setMember_w] = useState('');
  const [viewer_r, setViewer_r] = useState('');

  const fetchGraph = () => {
    console.log('id =', id);
    axios
      .get('/graphs/getgraph/' + id)
      .then((res) => {
        // let datee = moment(res.data[0].date).utc().format('YYYY-MM-DD');
        // console.log(datee);
        // console.log(res);
        setGraph(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchGraph();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    let data_ = {
      title: title !== '' ? title : graph.title,
      //   title: document.getElementById('title'),
      description: description !== '' ? description : graph.description,
      //   date: time !== '' ? time : graph.time,
      admin_r: admin_r !== '' ? admin_r : graph.admin_r,
      //   admin_w: admin_w !== '' ? admin_w : graph.admin_w,
      member_r: member_r !== '' ? member_r : graph.member_r,
      //   member_w: member_w !== '' ? member_w : graph.member_w,
      viewer_r: viewer_r !== '' ? viewer_r : graph.viewer_r,
      //   Creator and updator should be added
    };
    axios
      .put('/graphs/updateGraph/' + id, data_)
      .then((res) => {
        alert('The graph is updated!!!');
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
            <h2 className="text-center">Update the Graph</h2>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              defaultValue={graph.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter the iframe here</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              placeholder='<iframe width="100%" height="800"src="https://datastudio.google.com/embed/reporting/1adef32e-6c48-4326-b5d8-2b044f4e5e1d/page/faBKB" frameborder="0" style="border: 0;" allowfullscreen></iframe>'
              defaultValue={graph.iframe}
              onChange={(e) => setIframe(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description (Optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              defaultValue={graph.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <h3>Who can Read</h3>
            <Form.Check
              type="checkbox"
              label="Admin"
              defaultChecked={graph.admin_r}
              onClick={() => setAdmin_r(!admin_r)}
            />
            <Form.Check
              type="checkbox"
              label="Member"
              defaultChecked={graph.member_r}
              onClick={() => setMember_r(!member_r)}
            />
            <Form.Check
              type="checkbox"
              label="Viewer"
              defaultChecked={graph.viewer_r}
              onClick={() => setViewer_r(!viewer_r)}
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

export default EditGraph;
