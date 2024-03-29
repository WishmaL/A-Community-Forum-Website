import { Media, Card } from 'react-bootstrap';
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
      <style type="text/css">
        {`
            .my_class {
              height:10px;
              overflow:auto
            }
          `}
      </style>
      <Card>
        <Card.Body>
          <Media>
            <img
              // width={64}
              // height={64}
              className="mr-3"
              src="http://lorempics.com/32x32/f9b384/142850"
              alt="Generic placeholder"
            />

            <Media.Body>
              <h5>{thread}</h5>
              <p>{time}</p>
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
    </div>
  );
}

export default Comments;
