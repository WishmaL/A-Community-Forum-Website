import React, { useEffect, useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {LoggingContext} from '../context/LoggedIn'

function Navbar_() {

const isLoggedIn = useContext(LoggingContext)
  return (
    <Navbar bg="light" expand="lg">
      {console.log(isLoggedIn)}
        <Navbar.Brand href="/">LEARN Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* ___check following if want___ */}
            {/* <ul class="list-inline"> */}

            {!isLoggedIn ? 
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
             : null} 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

// export const Navbar_ = memo(Navbar_);
export default Navbar_

