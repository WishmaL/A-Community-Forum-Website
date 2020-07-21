/**
 * THIS ONE IS USING FOR DISPLAY THE CURRENT USER WHO LOGGING IN
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../context/Auth';
import { Container } from 'react-bootstrap';

function CurrentUser(props) {
  const { setAuthTokens } = useAuth();

  const role = localStorage.getItem('roll');

  const clickHandler = () => {
    setAuthTokens();
    localStorage.clear();
    // set the default value (i.e. 'viewer')
    localStorage.setItem('roll', 'viewer');
  };

  return (
    <div>
      <Container>
        <Navbar className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{props.currentUser}</a>
            <Button variant="info" onClick={clickHandler}>
              Log Out
            </Button>
            {role === 'greatAdmin' ? (
              <Link
                to={(location) => ({
                  ...location,
                  pathname: `/AddUser`,
                })}
              >
                <Button variant="info" onClick={clickHandler}>
                  Add new User
                </Button>
              </Link>
            ) : null}
          </Navbar.Text>
        </Navbar>
      </Container>
    </div>
  );
}

export default CurrentUser;
