import React, { useEffect, useState } from 'react';
import Media from 'react-bootstrap/Media';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import AddTimeline from './AddTimeline';
import DelTimeEvent from './DelTimeEvent';
import EditTimeline from './EditTimeline';
import moment from 'moment';
import { Timeline, Event } from 'react-timeline-scribble';

export const ShowTimeline = () => {
  const roll = localStorage.getItem('roll');

  const [timeEvents, setTimeEvents] = useState([]);

  const updateEvents = () => {
    axios
      .get('/timeline/getTimeEvents')
      .then((res) => {
        setTimeEvents(res.data);
        // console.log(moment(res.data[0].date).format('DD/MM/YYYY'))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateEvents();
  }, []);

  timeEvents.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div>
      <style type="text/css">
        {`
                  .my_class {
                    height:500px;
                    overflow:auto
                  }
                  `}
      </style>
      <Container>
        <div className="alert alert-primary" role="alert">
          <h1>The Timeline</h1>
        </div>
        {roll === 'greatAdmin' ? (
          <AddTimeline set_timeEvents={updateEvents} />
        ) : null}
        <div className="my_class">
          {/* <div className="overflow-auto"> */}

          {timeEvents.map((timeEvent) => {
            return (
              <Media key={timeEvent.id}>
                <Media.Body>
                  <Timeline>
                    <Event
                      interval={moment(timeEvent.date).format('YYYY-MM-DD')}
                      title={timeEvent.topic}
                      subtitle={'Ipsum'}
                    >
                      {timeEvent.description}
                    </Event>
                  </Timeline>
                  {/* </div> */}

                  {/* <h5>{timeEvent.topic}</h5>
                  <p>{timeEvent.description}</p>
                  <p>{moment(timeEvent.date).format('YYYY-MM-DD')}</p> */}

                  {roll === 'greatAdmin' ? (
                    <div>
                      <DelTimeEvent
                        id={timeEvent.id}
                        set_timeEvents={updateEvents}
                      />
                      <EditTimeline
                        id={timeEvent.id}
                        set_timeEvents={updateEvents}
                      />
                    </div>
                  ) : null}
                </Media.Body>
              </Media>
            );
          })}
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
};
export default ShowTimeline;
