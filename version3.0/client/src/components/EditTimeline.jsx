import React, { useState, useEffect } from 'react';
import { Container, Button, Alert, Form } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';

function EditTimeline({ id, set_timeEvents }) {
  const [show, setShow] = useState(false);

  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  //   old values will fetch here
  const [timeEvents, setTimeEvents] = useState([]);

  const openEdit = () => {
    setShow(true);
    axios
      .get('/timeline/getTimeEvent/' + id)
      .then((res) => {
        let datee = moment(res.data[0].date).utc().format('YYYY-MM-DD');
        console.log(datee);
        setTimeEvents(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   when submits
  const submitHandler = (e) => {
    e.preventDefault();

    let data_ = {
      topic: topic !== '' ? topic : timeEvents.topic,
      description: description !== '' ? description : timeEvents.description,
      date: date !== '' ? date : timeEvents.date,
    };
    axios
      .put('/timeline/updateTimeEvent/' + id, data_)
      .then((res) => {
        console.log(res);
        alert('New Event is updated!!!');
        setTopic('');
        setDescription('');
        setDate('');

        set_timeEvents();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Alert
        show={show}
        variant="warning"
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>Update the Event</Alert.Heading>
        <p>This Item will be updated</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Container>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Event Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={timeEvents.topic}
                  //   set the fetch data
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder={timeEvents.description}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Label>
                  Date: {moment(timeEvents.date).utc().format('YYYY-MM-DD')}
                </Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                {console.log(
                  moment(timeEvents.date).utc().format('YYYY-MM-DD')
                )}
              </Form.Group>

              <Button variant="warning" type="submit">
                Update
              </Button>
            </Form>
          </Container>
          {/* </form> */}
        </div>
      </Alert>

      {!show && (
        <Button variant="outline-warning" onClick={openEdit}>
          <svg
            class="bi bi-pencil-square"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        </Button>
      )}
    </>
  );
}

export default EditTimeline;
