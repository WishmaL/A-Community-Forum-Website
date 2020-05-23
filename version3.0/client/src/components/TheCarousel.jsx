import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Axios from 'axios';

function TheCarousel() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    Axios.get('/notices/getNotices')
      .then((res) => {
        // console.log(res)
        setNotices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Carousel>
        {notices.map((notice) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://lorempics.com/550x250/CCC444/969696"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{notice.title}</h3>
                <p>{notice.body}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default TheCarousel;
