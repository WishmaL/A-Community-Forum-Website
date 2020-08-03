import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Col, Button, Form, Card, Row } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import '../styles/forms.css';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('password');
  const [contact, setContact] = useState('');
  const [roll, setRoll] = useState('viewer');

  // regarding password visibility
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    // console.log('clicked');
    setPasswordShown(passwordShown ? false : true);
    console.log(passwordShown);
  };

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    let data_ = {
      name,
      email,
      password,
      contact,
      roll,
    };

    axios
      .post('/users/newUser', data_)
      .then((res) => {
        // the option #1
        history.goBack();

        // with the alrt and window.location() method
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const element = <FontAwesomeIcon icon={faEye} />;

  return (
    <Container>
      <div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    // type="password"
                    type={passwordShown ? 'text' : 'password'}
                    placeholder="Password"
                    defaultValue={password}
                  />
                </Col>

                {/* <Button variant="outline-primary"> */}
                {passwordShown ? (
                  <FontAwesomeIcon
                    className="eye"
                    icon={faEyeSlash}
                    size="lg"
                    onClick={togglePasswordVisiblity}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="eye"
                    icon={faEye}
                    size="lg"
                    onClick={togglePasswordVisiblity}
                  />
                )}
                {/* </Button> */}
              </Row>

              {/* trying add an icon */}
              {/*  */}
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </Form.Group>

          <Form.Row>
            {/* <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group> */}

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Roll</Form.Label>
              <Form.Control
                as="select"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
              >
                <option>greatAdmin</option>
                <option>admin</option>
                <option>member</option>
              </Form.Control>
            </Form.Group>

            {/* <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group> */}
          </Form.Row>

          {/* <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

          <div className="text-center">
            <Button
              className="text-center"
              variant="primary"
              type="submit"
              onClick={submitHandler}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default AddUser;
