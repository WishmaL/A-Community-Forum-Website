import React, { useEffect, useState } from 'react';
import { Media } from 'react-bootstrap';
import Axios from 'axios';
import AddReply from './AddReply';
import { UserConsumer } from './Context';

function ShowReplies({ commentId }) {
  const [replies, setReplies] = useState([]);

  const updateReplies = () => {
    Axios.get('/replies/getReplies')
      .then((res) => {
        setReplies(res.data);
      })
      .catch((err) => {
        console.log('An error occured: ', err);
      });
  };

  useEffect(() => {
    updateReplies();
  }, []);

  return (
    <div>
      <Media>
        <img
          // width={64}
          // height={64}
          className="mr-3"
          src="http://lorempics.com/64x64/f4c888/142850"
          alt="Generic placeholder"
        />
        <Media.Body>
          {replies
            .filter((element) => {
              return element.commentId === commentId;
            })
            .map((reply) => {
              return (
                <div key={reply.id}>
                  <span>
                    <p>
                      {reply.reply}
                      <b> replied by:</b>
                      {reply.userName}
                    </p>
                    <br />{' '}
                  </span>
                </div>
              );
            })}
        </Media.Body>
      </Media>

      <UserConsumer>
        {(username) => {
          return (
            <AddReply
              updateReplies={updateReplies}
              userName={username}
              commentId={commentId}
            />
          );
        }}
      </UserConsumer>
    </div>
  );
}

export default ShowReplies;
