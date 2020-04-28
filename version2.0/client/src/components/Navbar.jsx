import React, { Component } from 'react';
// import logo from '../images/logo.svg';
// import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  state = {
    isOpen: false
  };
  handToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* <Link to="/"> */}
              {/* <img src={logo} alt="Fashion outlet" /> */}
            {/* </Link> */}
            <button type="button" className="nav-btn" onClick={this.handToggle}>Click me
              {/* <FaAlignRight className="nav-icon" /> */}
            </button>
          </div>

          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to="/">LOGO</Link>
            </li>
            <li>
              <Link to="/member">Member</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/greatAdmin">Great Admin</Link>
            </li>
            {/* <li>
              <Link to="/home_n_living">HOME & LIVING</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
            </li> */}

            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Signin">Sign in</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
