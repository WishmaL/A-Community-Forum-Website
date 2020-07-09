/**
 * THIS ONE IS USING FOR DISPLAY THE CURRENT USER WHO LOGGING IN
 */

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../context/Auth';

function CurrentUser(props) {
  const { setAuthTokens } = useAuth();

  const clickHandler = () => {
    setAuthTokens();
    localStorage.clear();
  };

  return (
    <div>
      <Navbar className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">{props.currentUser}</a>
          <Button variant="info" onClick={clickHandler}>
            Log Out
          </Button>
        </Navbar.Text>
      </Navbar>
    </div>
  );
}

export default CurrentUser;
