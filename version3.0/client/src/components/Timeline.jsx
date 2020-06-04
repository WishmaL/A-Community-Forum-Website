import React, { useEffect, useState } from 'react';
import Media from 'react-bootstrap/Media';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import AddTimeline from './AddTimeline';

export const Timeline = () => {
  const [timeEvents, setTimeEvents] = useState([]);
  useEffect(() => {
    axios
      .get('/timeline/getTimeEvents')
      .then((res) => {
        setTimeEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container>
        <div className="alert alert-primary" role="alert">
          <h1>The Timeline</h1>
        </div>
        <AddTimeline />
        {timeEvents.map((timeEvent) => {
          return (
            <Media key={timeEvent.id}>
              <img
                width={64}
                height={64}
                className="align-self-start mr-3"
                src="http://lorempics.com/64x64/222831/f1d1d1"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>{timeEvent.topic}</h5>
                <p>{timeEvent.description}</p>
                <p>{timeEvent.date}</p>
              </Media.Body>
            </Media>
          );
        })}
      </Container>
    </div>
  );
};
export default Timeline;
