import { Media, Card, FormControl, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';
import AddReply from './AddReply';
import { UserConsumer, ArticleIdConsumer } from '../components/Context';
// REPLY FUNCTION HAS TO BE BUILT UP

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

              
                 {/* look for the media component in bootstrap for better reply style*/}

              <UserConsumer>
                {(username) => {
                  return (
                    <ArticleIdConsumer>
                      {(commentId) => {
                        return (
                          <AddReply userName={username} commentId={commentId}  />
                        );
                      }}
                    </ArticleIdConsumer>
                  );
                }}
              </UserConsumer>

              {/* <AddReply /> */}

              {/* </Dropdown.Item> */}
              {/* </DropdownButton> */}

              {/* <button onClick={clickHandler}>Reply</button> */}
            </Media.Body>
          </Media>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Comments;
