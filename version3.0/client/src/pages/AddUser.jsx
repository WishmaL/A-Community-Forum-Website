import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Col, Button, Form, Card } from 'react-bootstrap';
import axios from 'axios';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('password');
  const [contact, setContact] = useState('');
  const [roll, setRoll] = useState('viewer');

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    // set the current time here
    // setTime(moment().format());
    let data_ = {
      //   name: name,
      //   email: email,
      //   password: password,
      //   contact: contact,
      //   roll: roll,
      name,
      email,
      password,
      contact,
      roll,
    };
    // console.log(data_);

    axios
      .post('/users/newUser', data_)
      .then((res) => {
        // console.log(res);
        // alert('New User is added!!!');
        // checking following
        history.goBack();
        // console.log(res.data);

        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
            <Form.Control
              type="password"
              placeholder="Password"
              defaultValue={password}
            />
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

        <Button variant="primary" type="submit" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddUser;
