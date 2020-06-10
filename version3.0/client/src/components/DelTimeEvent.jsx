// This will delete a timeEvent

import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import axios from 'axios';
// import trash from '../../public/Assets/trash_fill.svg';

export const DelTimeEvent = ({ id, set_timeEvents }) => {
  const [show, setShow] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();

    // console.log('/timeline/deleteTimeEvent/'+id);
    axios
      .delete('/timeline/deleteTimeEvent/' + id)
      .then((res) => {
        alert('The event is deleted!!');

        set_timeEvents();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Alert
        show={show}
        variant="danger"
        onClose={() => setShow(false)}
        dismissible
      >
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
            class="bi bi-trash-fill"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
            />
          </svg>
        </Button>
      )}
    </>
  );
};

export default DelTimeEvent;
