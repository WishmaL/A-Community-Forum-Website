import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Navbar_ extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const member = 'member';
    const admin = 'admin';
    const greatAdmin = 'greatAdmin';
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">LEARN Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* ___check following if want___ */}
            {/* <ul class="list-inline"> */}

            <div className="d-flex bd-highlight">
              <div className="p-2 flex-grow-1 bd-highlight">
                <Link to="/">HOME</Link>
              </div>
              <div className="p-2 bd-highlight">
                <Link to="/Login">Member</Link>
              </div>
              <div className="p-2 bd-highlight">
                <Link to="/Login">Admin</Link>
              </div>
              <div className="p-2 bd-highlight">
                <Link to="/Login">Great Admin</Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbar_;
