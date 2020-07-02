import React, { useState } from 'react';
import { Button, Card, Accordion, Form } from 'react-bootstrap';
import axios from 'axios';
// import moment from 'moment';

const AddTimeline = ({ set_timeEvents }) => {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

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
        // alert('New Event is added!!!');
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
              {/* <form id="event_form"> */}
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Event Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
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
                    // value = {moment(date).format('DD/MM/YYYY')}
                    // {moment(e.target.value).format('DD/MM/YYYY')}
                    // onChange={(e) => setDate(moment(e.target.value).format('DD/MM/YYYY'))}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              {/* </form> */}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default AddTimeline;
