import React, { useEffect, useState } from 'react';
import { Media } from 'react-bootstrap';
import Axios from 'axios';

function ShowReplies({ commentId }) {
  const [replies, setReplies] = useState([]);

  // let replies;
  useEffect(() => {
    Axios.get('/replies/getReplies')
      .then((res) => {
        setReplies(res.data);
      })
      .catch((err) => {
        console.log('An error occured: ', err);
      });
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
          {/* {console.log(replies)} */}
          {replies
            .filter((element) => {
              return element.commentId === commentId;
            })
            .map((reply) => {
              return (
                <div key={reply.id}>
                  
                    <span><p>{reply.reply}<b>   replied by:</b>{reply.userName}</p>
                  <br/> </span>
               
                </div>
              );
            })}
        </Media.Body>
      </Media>
    </div>
  );
}

export default ShowReplies;
