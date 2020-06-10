import { Media, Card } from 'react-bootstrap';
// import InputGroup from 'react-bootstrap/InputGroup';
import React from 'react';
import AddReply from './AddReply';
import {
  UserConsumer,
  CommentIdConsumer,
  CommentsConsumer,
} from '../components/Context';
import ShowReplies from './ShowReplies';
import DelComment from './DelComment';
// REPLY FUNCTION HAS TO BE BUILT UP

function Comments({ thread, time, id }) {
  // get the all replies here for particular comment

  return (
    <div>
      {/* <style type="text/css">
        {`
                  .my_class {
                    height:500px;
                    overflow:scroll
                  }
                  `}
      </style>
      <div className="my_class"> */}
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
              {/* <DelComment id={id} /> */}
              <CommentIdConsumer>
                {(commentId) => {
                  return <ShowReplies commentId={commentId} />;
                }}
              </CommentIdConsumer>

              <CommentsConsumer>
                {(comments) => {
                  return <DelComment id={id} comments={comments} />;
                }}
              </CommentsConsumer>
            </Media.Body>
          </Media>
        </Card.Body>
      </Card>
      {/* </div> */}
    </div>
  );
}

export default Comments;
