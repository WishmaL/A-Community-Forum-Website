import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col, Button, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import CurrentUser from '../components/CurrentUser';
// import { Redirect } from 'react-router';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function AddArticle(props) {
  let history = useHistory();

  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [admin_r, setAdmin_r] = useState(0);
  const [admin_w, setAdmin_w] = useState(0);
  const [member_r, setMember_r] = useState(0);
  const [member_w, setMember_w] = useState(0);
  const [viewer_r, setViewer_r] = useState(0);
  // const [redirect, setRedirect] = useState(false)
  const [articleId, setArticleId] = useState(0);
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Default File');
  // const [value, setValue] = useState('');
  const [isSubmitInfo, setIsSubmitInfo] = useState(false);

  useEffect(() => {
    setUserName(props.match.params.userName);
    // console.log(props.location.pathname);
  }, []);

  // following will keep the pic submmit button disabled until submit the article
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
    let data_ = {
      userName: userName,
      title: title,
      body: body,
      admin_r: admin_r,
      admin_w: admin_w,
      member_r: member_r,
      member_w: member_w,
      viewer_r: viewer_r,
    };
    axios
      .post('/articles/newArticle', data_)
      .then((res) => {
        console.log(res);
        // following will bring back to the previous page
        // window.location.href='../';

        // the following is working
        // history.goBack();
        console.log(res.data);
        setArticleId(res.data);
        setIsSubmitInfo(true);
        // Try the new following thing
        // setRedirect(true)

        // <Redirect to={{ pathname: "../" }}/>
        // history.go(-1);
        // document.location.reload(true);
        // return false;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // FOLLOWING FOR UPLOADING PICS

  // ////////////////////////////////////////////////////////////

  const submitHandler2 = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('/articlePics/upload', formData)
      .then((res) => {
        // const { fileName, filePath } = res.data;

        // setUploadedFile({ fileName, filePath });
        // setFilename(fileName)
        // setFilePath(filePath);

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
      articleId: articleId,
      articlePic: filename,
      articlePicPath: `/uploads/article_pics/${filename}`,
    };
    console.log('data of articlePic ', data1_);
    // FOLLOWING IS FOR UPDATE THE NOTICESPIC TABLE
    axios
      .post('/articlePics/newArticlesPic', data1_)
      .then((res) => {
        // console.log('NOTICES: ', res);

        // //////////////////
        // DON'T ADD THE ALERT IT WON'T goBack()
        // alert('New Notice is added!!!');

        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ////////////////////////////////////////////////////////////

  // Used for the text in the article
  const onchangeHandler = (e, editor) => {
    const data = editor.getData();
    setBody(data);
  };

  // if(redirect){
  //   return <Redirect push to={props.location.pathname} />;
  // }

  return (
    <div>
      <Container>
        <CurrentUser currentUser={userName} />
        <Form onSubmit={submitHandler}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Article title</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            {/* <Form.Label>Article body</Form.Label>
            <Form.Control
              as="textarea"
              rows="10"
              placeholder=""
              value={body}
              onChange={(e) => setBody(e.target.value)}
            /> */}
            <CKEditor editor={ClassicEditor} onChange={onchangeHandler} />
          </Form.Group>

          {/* File upload has to be done */}

          <Form.Group id="formGridCheckbox">
            <h3>Who can Edit</h3>
            {/* <Form.Check type="checkbox" label="Great Admin" onClick={ setBody(1)}/> */}
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
            {/* <Form.Check type="checkbox" label="Great Admin" /> */}
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
            Submit
          </Button>
        </Form>

        {/* //////////////////////////////////////// */}
        <Card>
          <Card.Header>Add Article Pic</Card.Header>

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
        {/* //////////////////////////////////////// */}
      </Container>
    </div>
  );
}

export default AddArticle;
