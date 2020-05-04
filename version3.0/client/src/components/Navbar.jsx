import React, { Component } from 'react';
// import logo from '../images/logo.svg';
// import { FaAlignRight } from 'react-icons/fa';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Navbar_ extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">LEARN Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* ___check following if want___ */}
            {/* <ul class="list-inline"> */}

            <div class="d-flex bd-highlight">
              <div class="p-2 flex-grow-1 bd-highlight"><Link to="/">HOME</Link></div>
              <div class="p-2 bd-highlight"><Link to="/Member">Member</Link></div>
              <div class="p-2 bd-highlight"><Link to="/Admin">Admin</Link></div>
              <div class="p-2 bd-highlight"><Link to="/GreatAdmin">Great Admin</Link></div>
            </div>

            {/* <Nav.Link href="#home"> <Link to="/">HOME</Link></Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbar_;