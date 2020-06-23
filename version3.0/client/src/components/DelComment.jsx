// Not yet completed

import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import axios from 'axios';

export const DelComment = ({ id, comments }) => {
  const [show, setShow] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();

    axios
      .delete('/comments/deleteComment/' + id)
      .then((res) => {
        alert('The comment is deleted!!');
      })
      .catch((err) => {
        console.log(err);
      });
    comments();
  };

  return (
    <>
      <Alert show={show} variant="danger">
        <Alert.Heading>Warning!</Alert.Heading>
        <p>This Item will be deleted</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={clickHandler} variant="outline-danger">
            Delete
          </Button>
        </div>
      </Alert>

      {!show && (
        <Button variant="outline-danger" onClick={() => setShow(true)}>
          <svg
            className="bi bi-trash-fill"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
            />
          </svg>
        </Button>
      )}
    </>
  );
};

export default DelComment;
