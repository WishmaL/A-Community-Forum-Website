import React, { useState } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

function AddReply({ updateReplies, userName, commentId }) {
  const [reply, setReply] = useState('');

  const clickHandler = (event) => {
    console.log({ userName });
    console.log({ commentId });
    event.preventDefault();
    let data_ = {
      userName,
      commentId,
      reply: reply,
    };
    console.log('the data', data_);

    axios
      .post('/replies/newReply', data_)
      .then(function (response) {
        alert('Successfully replied!');
        setReply('');
      })
      .catch(function (error) {
        console.log('Error occured! ', error);
      });
    updateReplies();
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter reply"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          //   as="text"
          rows="1"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={clickHandler}>
            Reply
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default AddReply;
