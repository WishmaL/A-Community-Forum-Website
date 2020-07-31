import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoggingContext } from '../context/LoggedIn';

function Navbar_() {
  let history = useHistory();
  const isLoggedIn = localStorage.getItem('isLogged');
  const roll = localStorage.getItem('roll');
  const name = localStorage.getItem('userName');

  function handleClick() {
    history.goBack();
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">LEARN Platform</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* ___check following if want___ */}
          {/* <ul class="list-inline"> */}

          {isLoggedIn === null ? (
            <div className="d-flex bd-highlight">
              <div className="p-2 flex-grow-1 bd-highlight">
                <Link to="/">HOME</Link>
              </div>

              <div className="p-2 bd-highlight">
                <Link to="/Member/:userName">Member</Link>
              </div>

              <div className="p-2 bd-highlight">
                <Link to="/Admin/:userName">Admin</Link>
              </div>
              <div className="p-2 bd-highlight">
                <Link to="/GreatAdmin/:userName">Great Admin</Link>
              </div>
            </div>
          ) : (
            <div>
              {roll === 'greatAdmin' && (
                <div className="p-2 bd-highlight">
                  <Link to={`/GreatAdmin/${name}`}>Great Admin</Link>
                </div>
              )}

              {roll === 'admin' && (
                <div className="p-2 bd-highlight">
                  <Link to={`/Admin/${name}`}>Admin</Link>
                </div>
              )}

              {roll === 'member' && (
                <div className="p-2 bd-highlight">
                  <Link to={`/Member/${name}`}>Member</Link>
                </div>
              )}
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// export const Navbar_ = memo(Navbar_);
export default Navbar_;
