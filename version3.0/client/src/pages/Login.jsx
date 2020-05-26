import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [LoggedIn, setLoggedIn] = useState(false)

  function validateForm() {
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
        // console.log(response.data.length);
        if (!response.data.length) {
          alert('Username or Password is incorrect! Try again');
        } else if (
          response.data[0].email === email &&
          response.data[0].password === password
        ) {
          console.log('Login successfull');
          // alert('logging successful');
          // setLoggedIn(true)
          // if(LoggedIn === true){
            window.open("/Member/");
          // }
          // var uploadScreen=[];
          // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
          // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
        }
      })
      .catch(function (error) {
        console.log('Error occured! ', error);
      });
  }

  return (
    <div>
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
            {/* <Button type="submit" onClick={(e) => submitHandler}>Login</Button> */}
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
