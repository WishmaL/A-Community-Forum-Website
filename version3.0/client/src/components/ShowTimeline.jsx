import React, { useEffect, useState } from 'react';
import Media from 'react-bootstrap/Media';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import AddTimeline from './AddTimeline';

export const ShowTimeline = () => {
  const [timeEvents, setTimeEvents] = useState([]);

  const updateEvents = () => {
    axios
      .get('/timeline/getTimeEvents')
      .then((res) => {
        setTimeEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateEvents();
  }, []);

  return (
    <div>
      <style type="text/css">
        {`
                  .my_class {
                    height:800px;
                    overflow:scroll
                  }
                  `}
      </style>
      <Container>
        <div className="alert alert-primary" role="alert">
          <h1>The Timeline</h1>
        </div>
        <AddTimeline set_timeEvents={updateEvents} />
        <div className="my_class">
          {timeEvents.map((timeEvent) => {
            return (
              // <div>

              // <div className="my_class">
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
              // {/* </div> */}
              // </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
export default ShowTimeline;
