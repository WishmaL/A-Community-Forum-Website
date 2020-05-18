import { Media, Card, Container } from 'react-bootstrap';

import React from 'react';

function Comments({ thread, time }) {
  return (
    <div>
        <Card>
          <Card.Body>
            <Media>
              <img
                // width={64}
                // height={64}
                className="mr-3"
                src="http://lorempics.com/64x64/f9b384/142850"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>{thread}</h5>
                <p>{time}</p>

                {/* 
                  
                    // this will be the reply part
                  
                  
                  <Media>
                    <img
                      // width={64}
                      // height={64}
                      className="mr-3"
                      src="http://lorempics.com/64x64/f9b384/142850"
                      alt="Generic placeholder"
                    />
                    <Media.Body>
                      <h5>Media Heading</h5>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin commodo. Cras purus
                        odio, vestibulum in vulputate at, tempus viverra turpis.
                        Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                    </Media.Body>
                  </Media> */}
              </Media.Body>
            </Media>
          </Card.Body>
        </Card>

    </div>
  );
}

export default Comments;
