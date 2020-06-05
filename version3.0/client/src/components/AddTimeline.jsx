import React, { useState, useEffect } from 'react';
import { Button, Card, Accordion, Form, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const AddTimeline = ({ set_timeEvents }) => {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  // const [newtimeEvents, setNewTimeEvents] = useState([timeEvents])

  const submitHandler = (e) => {
    e.preventDefault();
    let data_ = {
      topic: topic,
      description: description,
      date: date,
    };
    axios
      .post('/timeline/newTimeEvent', data_)
      .then((res) => {
        // console.log(res);
        // this.setState({ articles: res.data });
        alert('New Event is added!!!');
        setTopic('');
        setDescription('');
        setDate('');
        // update the timeline
        set_timeEvents();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Accordion defaultActiveKey="1">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} eventKey="0">
              Add time event
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <form id="event_form">
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />

                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="date"
                      label=""
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      {/* <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Event Title</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </div>
  );
};

export default AddTimeline;
