import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Col, Button, Form, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import CurrentUser from '../components/CurrentUser';
import moment from 'moment';
// import AddNoticePics from '../components/AddNoticePics';
// import { Redirect } from 'react-router';
// import Message from './Message';

function AddNotice(props) {
  let history = useHistory();

  const [userName, setUserName] = useState(props.match.params.userName);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [time, setTime] = useState('');
  const [admin_r, setAdmin_r] = useState(0);
  const [admin_w, setAdmin_w] = useState(0);
  const [member_r, setMember_r] = useState(0);
  const [member_w, setMember_w] = useState(0);
  const [viewer_r, setViewer_r] = useState(0);
  // const [redirect, setRedirect] = useState(false)
  const [noticeId, setNoticeId] = useState(0);

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [filePath, setFilePath] = useState('');
  // const [uploadedFile, setUploadedFile] = useState({});
  // const [message, setMessage] = useState('');
  const [isSubmitInfo, setIsSubmitInfo] = useState(false);

  // following will keep the pic submmit button disabled until submit the notice
  function validateForm(props) {
    return isSubmitInfo;
  }
  // ////////////////////////////////////////
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  // ///////////////////////////////////////
  const submitHandler = (e) => {
    e.preventDefault();

    // set the current time here
    setTime(moment().format());
    let data_ = {
      userName: userName,
      title: title,
      body: body,
      time: time,
      admin_r: admin_r,
      admin_w: admin_w,
      member_r: member_r,
      member_w: member_w,
      viewer_r: viewer_r,
    };
    console.log(data_);

    axios
      .post('/notices/newNotice', data_)
      .then((res) => {
        // console.log(res);
        // alert('New Notice is added!!!');
        // checking following
        console.log(res.data);
        setNoticeId(res.data);
        setIsSubmitInfo(true);
        // history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // /////////////////////////////////////////////

  const submitHandler2 = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('/noticesPics/upload', formData)
      .then((res) => {
        const { fileName, filePath } = res.data;

        // setUploadedFile({ fileName, filePath });
        // setFilename(fileName)
        setFilePath(filePath);

        // setMessage('File Uploaded');
        console.log(res.data);
      })

      .catch((err) => {
        if (err.response.status === 500) {
          // setMessage('There was a problem with the server');
          console.log(err);
        } else {
          // setMessage(err.response.data.msg);
          console.log(err);
        }
      });
    // ////////////////////////////
    // FOLLOWING IS FOR NOTICEPICS TABLE
    const data1_ = {
      noticeId: noticeId,
      noticePic: filename,
      noticePicPath: filePath,
    };
    console.log('data of noticesPic ', data1_);
    // FOLLOWING IS FOR UPDATE THE NOTICESPIC TABLE
    axios
      .post('/noticesPics/newNoticesPic', data1_)
      .then((res) => {
        console.log('NOTICES: ', res);
        alert('New Notice is added!!!');

        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <CurrentUser currentUser={userName} />
        {/* the title of adding notice */}
        <h1>Add new notice</h1>
        {/* ////////////////////////// */}
        <Form onSubmit={submitHandler}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Notice title</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows="6"
              placeholder=""
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>

          {/* File upload has to be done */}

          {/* <AddNoticePics /> */}
          {/* ////////////////////////////////////////////////////////////////// */}

          {/* ////////////////////////////////////////////////////////////////// */}

          <Form.Group id="formGridCheckbox">
            <h3>Who can Edit</h3>
            <Form.Check
              type="checkbox"
              label="Admin"
              onClick={() => setAdmin_w(1)}
            />
            <Form.Check
              type="checkbox"
              label="Member"
              onClick={() => setMember_w(1)}
            />
            <h3>Who can Read</h3>
            <Form.Check
              type="checkbox"
              label="Admin"
              onClick={() => setAdmin_r(1)}
            />
            <Form.Check
              type="checkbox"
              label="Member"
              onClick={() => setMember_r(1)}
            />
            <Form.Check
              type="checkbox"
              label="Viewer"
              onClick={() => setViewer_r(1)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add new notice
          </Button>
        </Form>

        {/* WHEN HOVER THE UPLOAD PIC AREA, ALERT SHOULD BE DISPLAYED */}

        <Card>
          <Card.Header>Add Notice Pic</Card.Header>

          <Card.Body>
            <form onSubmit={submitHandler2}>
              <div className="custom-file mb-4">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  disabled={!validateForm()}
                  onChange={onChange}
                  // onMouseOver={<Alert variant={'info'}>hello</Alert>}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  {filename}
                </label>
              </div>
              <Button
                block
                bssize="large"
                disabled={!validateForm()}
                type="submit"
              >
                Upload the pic
              </Button>
            </form>
            {/* {uploadedFile ? (
              <div className="row mt-5">
                <div className="col-md-6 m-auto">
                  <h3 className="text-center">{uploadedFile.fileName}</h3>
                  <img
                    style={{ width: '100%' }}
                    src={uploadedFile.filePath}
                    alt=""
                  />
                </div>
              </div>
            ) : null} */}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default AddNotice;
