import React, { Component } from 'react';
// import logo from '../images/logo.svg';
// import { FaAlignRight } from 'react-icons/fa';
import { Container, Row, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
      {/* Set nav links into one line, 
          set the backgrond color
          set the size of the font */}
        <div className="nav-links">
          {/* <span> */}
             <Nav className="justify-content-left" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Logo</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Articles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Timeline</Nav.Link>
            </Nav.Item>
          </Nav>
          {/* </span> */}
         
        </div>

        <p className="text-center mt-4 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          eos hic quod. Quia fuga aliquid culpa perferendis nisi cum
          dignissimos?
        </p>

        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Login</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item> */}
        </Nav>
      </>
    );
  }
}

export default Navbar;
