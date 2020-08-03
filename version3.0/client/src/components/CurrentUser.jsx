/**
 * THIS ONE IS USING FOR DISPLAY THE CURRENT USER WHO LOGGING IN
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import { Button, Navbar, Col, Row } from 'react-bootstrap';
import { useAuth } from '../context/Auth';
import { Container } from 'react-bootstrap';
// import '../styles/currentUser.css';

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
      {/* <Container> */}
      <Navbar className="justify-content-end">
        <Navbar.Text>
          <Row >
          <h4 ><small>Signed in as: <a href="#login">{props.currentUser}</a></small></h4>
          
            <Button variant="outline-dark" onClick={clickHandler}>
              Log Out
            </Button>
          
          {role === 'greatAdmin' ? (
            <Link
              to={(location) => ({
                ...location,
                pathname: `/AddUser`,
              })}
            >
              <Button variant="outline-dark" onClick={clickHandler}>
                Add new User
              </Button>
            </Link>
          ) : null}
          </Row>
        </Navbar.Text>
      </Navbar>
      {/* </Container> */}
    </div>
  );
}

export default CurrentUser;
