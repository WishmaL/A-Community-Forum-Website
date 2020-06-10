/**
 * THIS ONE IS USING FOR DISPLAY CURRENT THE CIRRENT USER WHO LOGGING IN
 */

import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

export class CurrentUser extends Component {
  render() {
    return (
      <div>
        <Navbar className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{this.props.currentUser}</a>
          </Navbar.Text>
        </Navbar>
      </div>
    );
  }
}

export default CurrentUser;
