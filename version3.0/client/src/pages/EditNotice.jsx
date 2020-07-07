import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Col, Button, Form, Card, Image } from 'react-bootstrap';
import axios from 'axios';
import CurrentUser from '../components/CurrentUser';
import moment from 'moment';

function EditNotice(props) {
  let history = useHistory();
  // Old values will be stored here
  const [userName, setUserName] = useState(props.match.params.userName);
  const [notice, setNotice] = useState({});
  // the initial values can be fetched using 'notice'
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [admin_r, setAdmin_r] = useState('');
  const [admin_w, setAdmin_w] = useState('');
  const [member_r, setMember_r] = useState('');
  const [member_w, setMember_w] = useState('');
  const [viewer_r, setViewer_r] = useState('');
  //
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Default File');
  // const [filePath, setFilePath] = useState('');
  // const [id, setId] = useState(props.location.state.noticeId)
  // const [noticeId, setNoticeId] = useState(props.location.state.noticeId)
  const [id, setId] = useState(props.location.theProps.noticeId);
  const [noticeId, setNoticeId] = useState(props.location.theProps.noticeId);
  const [noticePicInfo, setnoticePicInfo] = useState({});
  const [isSubmitInfo, setIsSubmitInfo] = useState(false);
  const [removePicClicked, setRemovePicClicked] = useState(false);

  const fetchNotices = () => {
    console.log('id =', id);
    axios
      .get('/notices/getNotice/' + id)
      .then((res) => {
        // let datee = moment(res.data[0].date).utc().format('YYYY-MM-DD');
        // console.log(datee);
        // console.log(res);
        setNotice(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchNoticePics = () => {
    axios
      .get('/noticesPics/getNoticePic/' + noticeId) //this will have a
      .then((res) => {
        // let datee = moment(res.data[0].date).utc().format('YYYY-MM-DD');
        // console.log(datee);
        console.log('notice pic data:', res.data);
        setnoticePicInfo(res.data[0]);
        setFilename(res.data[0].noticePic);
        // setFilename(noticePicInfo.noticePic);
        // console.log(noticePicInfo.noticePicPath)
        // setFilePath(noticePicInfo.noticePicPath);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // componentDidMount
  useEffect(() => {
    // fetch specific notice
    // ___FOLLOWING IS WORKING FINE___LEARN THIS STRATEGY
    // console.log('props.noticeId', props.location.state.noticeId)
    // setnoticePic_id(props.location.state.noticeId)

    // for testing
    // setId(props.location.state.noticeId)

    fetchNotices();
    fetchNoticePics();
  }, []);

  function validateForm() {
    return isSubmitInfo;
  }

  // edit function
  const submitHandler = (e) => {
    e.preventDefault();

    let data_ = {
      title: title !== '' ? title : notice.title,
      //   title: document.getElementById('title'),
      body: body !== '' ? body : notice.body,
      //   date: time !== '' ? time : notice.time,
      admin_r: admin_r !== '' ? admin_r : notice.admin_r,
      admin_w: admin_w !== '' ? admin_w : notice.admin_w,
      member_r: member_r !== '' ? member_r : notice.member_r,
      member_w: member_w !== '' ? member_w : notice.member_w,
      viewer_r: viewer_r !== '' ? viewer_r : notice.viewer_r,
      //   Creator and updator should be added
    };
    axios
      .put('/notices/updateNotice/' + id, data_)
      .then((res) => {
        alert('New Event is updated!!!');
        // reset the input fields
        // setTitle('');
        // setBody('');
        // setAdmin_r(0);
        // setAdmin_w(0);
        // setMember_w(0);
        // setMember_r(0);
        // setAdmin_r(0);

        // following for updating the DOM
        // set_timeEvents();
        setIsSubmitInfo(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   submit notices_pics
  const submitHandler2 = (e) => {
    e.preventDefault();
    if (!removePicClicked) {
      history.goBack();
    } else {
      const formData = new FormData();
      formData.append('file', file);
      // if in case of new pic is uploaded
      axios
        .post('/noticesPics/upload', formData)
        .then((res) => {
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

      // if(removePicClicked){
      const data1_ = {
        noticeId: props.notice_id,
        noticePic: filename,
        noticePicPath: `/uploads/banners/${filename}`,
      };
      console.log('data of noticesPic ', data1_);
      // FOLLOWING IS FOR UPDATE THE NOTICESPIC TABLE
      axios
        .put('/noticesPics/newNoticesPic', data1_)
        .then((res) => {
          history.goBack();
          // console.log(props.location);
          // history.push(props.location);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  // following is for delete the pic
  const removePic = (e) => {
    // If clicked remove pic run following
    setRemovePicClicked(true);
    e.preventDefault();
    let filePic = noticePicInfo.noticePic;
    console.log('File pic:', filePic);
    axios
      .delete('/noticesPics/deletePic/' + filePic)
      .then((res) => {
        // alert('The pic will be deleted!!');
        // setFilename('')
        // setFilePath('')
        // set_timeEvents();
        console.log('Pic info is deleted!');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {console.log(noticePicInfo.noticePicPath)}
      <Container>
        <CurrentUser currentUser={userName} />
        {/* the title of adding notice */}
        <h1>Update/Confirm the notice</h1>
        {/* ////////////////////////// */}
        <Form onSubmit={submitHandler}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Notice title</Form.Label>
              <Form.Control
                // id="title"
                type="text"
                placeholder=""
                defaultValue={notice.title}
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
              defaultValue={notice.body}
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
              //   check following later
              //   checked = {notice.admin_w}
              defaultChecked={notice.admin_w}
              onClick={() => setAdmin_w(!admin_w)}
            />
            <Form.Check
              type="checkbox"
              label="Member"
              defaultChecked={notice.member_w}
              onClick={() => setMember_w(!member_w)}
            />
            <h3>Who can Read</h3>
            <Form.Check
              type="checkbox"
              label="Admin"
              defaultChecked={notice.admin_r}
              onClick={() => setAdmin_r(!admin_r)}
            />
            <Form.Check
              type="checkbox"
              label="Member"
              defaultChecked={notice.member_r}
              onClick={() => setMember_r(!member_r)}
            />
            <Form.Check
              type="checkbox"
              label="Viewer"
              defaultChecked={notice.viewer_r}
              onClick={() => setViewer_r(!viewer_r)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update the notice
          </Button>
        </Form>

        {/* WHEN HOVER THE UPLOAD PIC AREA, ALERT SHOULD BE DISPLAYED */}

        <Card>
          <Card.Header>Update Notice Pic</Card.Header>
          {/* REMOVE THE PIC */}
          <Image
            disabled={!validateForm()}
            className="d-block w-100"
            src={noticePicInfo.noticePicPath}
            alt="forrid"
            fluid
          />

          <Button onClick={removePic}>Remove the notice pic</Button>

          <Card.Header>Add new Notice Pic</Card.Header>

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
                // disabled={!validateForm()}
                type="submit"
              >
                Done the updating notice
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

export default EditNotice;
