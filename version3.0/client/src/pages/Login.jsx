import React, { useState } from 'react';
import { Link, Redirect, useHistory  } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useAuth } from '../context/Auth';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();
  // const [location, setLocation] = useState(``)
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);

  // console.log('referer:', props);
  const referer = props.location.state.referer || '/';
  let history = useHistory();

  function validateForm(props) {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let data_ = {
      email: email,
      password: password,
    };

    
    axios
      .post('users/getUser/', data_)
      .then(function (response) {
        if (
          response.data.results[0].email === email &&
          response.data.results[0].password === password
        ) {
          // set the token
          setAuthTokens(response.data.token);
          // set the login true
          // setLoggedIn(true);




          props.AppCallBack(true);



          

          if (response.data.results[0].roll === 'greatAdmin') {
            // if({membership} !== response.data[0].roll)alert("You are a great admin")
            // window.location = `/GreatAdmin/${response.data.results[0].name}`;
            history.push(`/GreatAdmin/${response.data.results[0].name}`)
            // setLocation(`/GreatAdmin/${response.data.results[0].name}`);
          } else if (response.data.results[0].roll === 'admin') {
            // window.location = `/Admin/${response.data.results[0].name}`;
            // setLocation(`/Admin/${response.data.results[0].name}`);
            // following is to open up a new window/tab
            // window.open('/Admin/');

            history.push(`/Admin/${response.data.results[0].name}`)
          } else if (response.data.results[0].roll === 'member') {
            // window.location = `/Member/${response.data.results[0].name}`;
            // setLocation(`/Member/${response.data.results[0].name}`);
            // window.open('/Member/');

            history.push(`/Member/${response.data.results[0].name}`)
          } else {
            alert('Membership is not defined!!');
          }
        }
      })
      .catch(function (error) {
        console.log(error)
        alert('The username or password provided were incorrect!');
        setEmail('');
        setPassword('');
      });
  }

  // if (isLoggedIn) {
  //   return <Redirect to={referer} />;
  // }

  return (
    <div>
      {/* {console.log(props.isLoggedIn)} */}
      <Container>
        <h1 className="text-center">The Learn-Site</h1>
        <h2 className="text-center">Sign in</h2>

        <form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Col>
          </Form.Group>

          <div className="text-center">
            <Button
              block
              bsSize="large"
              disabled={!validateForm()}
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Login;
