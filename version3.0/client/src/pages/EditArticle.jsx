import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col, Button, Container, Card, Image } from 'react-bootstrap';
import axios from 'axios';
import CurrentUser from '../components/CurrentUser';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function EditArticle(props) {
  let history = useHistory();

  const [userName, setUserName] = useState(props.match.params.userName);

  const [updatedBy, setupdatedBy] = useState('')
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [admin_r, setAdmin_r] = useState(0);
  const [admin_w, setAdmin_w] = useState(0);
  const [member_r, setMember_r] = useState(0);
  const [member_w, setMember_w] = useState(0);
  const [viewer_r, setViewer_r] = useState(0);
  //   const [articleId, setArticleId] = useState(0);
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Default File');
  // have the article data

  // __USE FOLLOWING FOR USE__
  // const id = props.location.data.articleId
  // const articleId = props.location.data.articleId

  // __USE FOLLOWING FOR TEST__
  const id = 35;
  const articleId = 35;

  // const [del, setdel] = useState(props.location.data)
  const [articleInfo, setArticleInfo] = useState({});
  const [articlePicInfo, setArticlePicInfo] = useState({});
  const [isSubmitInfo, setIsSubmitInfo] = useState(false);
  const [removePicClicked, setRemovePicClicked] = useState(false);
  const [isPicAvailable, setIsPicAvailable] = useState(true);
  // console.log(del)

  // following will keep the pic submmit button disabled until submit the article
  function validateForm() {
    return isSubmitInfo;
  }

  // ////////////////////////////////////////
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  // ///////////////////////////////////////

  const fetchArticles = () => {
    // e.preventDefault();
    axios
      .get('/articles/getArticle/' + id)
      .then((res) => {
        // console.log(res);
        // following will bring back to the previous page
        // window.location.href='../';

        // the following is working
        // history.goBack();
        console.log('ArticleInfo :',res.data[0]);
        setArticleInfo(res.data[0]);
        // setArticleId(res.data);
        // setIsSubmitInfo(true);

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

  const fetchArticlePics = () => {
    axios
      .get('/articlePics/getArticlePic/' + articleId) //this will have a
      .then((res) => {
        // let datee = moment(res.data[0].date).utc().format('YYYY-MM-DD');
        // console.log(datee);
        if (res.data === []) isPicAvailable(false);
        else {
          // console.log('article pic data:', res.data);
          setArticlePicInfo(res.data);
          
        }

        // setFilename(res.data[0].articlePic);
        // setFilename(noticePicInfo.noticePic);
        // console.log(noticePicInfo.noticePicPath)
        // setFilePath(noticePicInfo.noticePicPath);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchArticles();
    fetchArticlePics();
  }, []);

  //   the edit function
  const submitHandler = (e) => {
    e.preventDefault();

    let data_ = {
      userName: articleInfo.userName,
      updatedBy: userName,
      title: title !== '' ? title : articleInfo.title,
      //   title: document.getElementById('title'),
      body: body !== '' ? body : articleInfo.body,
      //   date: time !== '' ? time : articleInfo.time,
      admin_r: admin_r !== '' ? admin_r : articleInfo.admin_r,
      admin_w: admin_w !== '' ? admin_w : articleInfo.admin_w,
      member_r: member_r !== '' ? member_r : articleInfo.member_r,
      member_w: member_w !== '' ? member_w : articleInfo.member_w,
      viewer_r: viewer_r !== '' ? viewer_r : articleInfo.viewer_r,
      //   Creator and updator should be added
    };

    // console.log('articleInfo title:', articleInfo.title)
    console.log('title:', title)
    // let data_ = {
    //   title: title, // !== '' ? title : article.title,
    //   //   title: document.getElementById('title'),
    //   body: body, // !== '' ? body : article.body,
    //   //   date: time !== '' ? time : article.time,
    //   admin_r: admin_r, // !== '' ? admin_r : article.admin_r,
    //   admin_w: admin_w, // !== '' ? admin_w : article.admin_w,
    //   member_r: articleInfo.member_r, //  !== '' ? member_r : article.member_r,
    //   member_w: member_w, //  !== '' ? member_w : article.member_w,
    //   viewer_r: viewer_r, //  !== '' ? viewer_r : article.viewer_r,
    //   //   Creator and updator should be added
    // };


    // ///////////////////////////////////////////////////////////////
    axios
      .put('/articles/updateArticle/' + id, data_)
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

  // FOLLOWING FOR UPLOADING PICS
  // ////////////////////////////////////////////////////////////

  const submitHandler2 = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('/articlePics/upload', formData)
      .then((res) => {
        console.log(res.data);
      })

      .catch((err) => {
        if (err.response.status === 500) {
          console.log(err);
        } else {
          console.log(err);
        }
      });
    // ////////////////////////////
    // FOR article_pics TABLE
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
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Used for the text in the article
  const onchangeHandler = (e, editor) => {
    const data = editor.getData();
    setBody(data);
  };

  // following is for delete the pic
  const removePic = (e) => {
    // If clicked remove pic run following
    if (isPicAvailable) {
      setRemovePicClicked(true);
      e.preventDefault();
      let filePic = articlePicInfo.articlePic;
      console.log('File pic:', filePic);
      axios
        .delete('/articlePics/deletePic/' + filePic)
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
    } else {
      console.log('NO picture is available');
    }
  };

  // Used for the text in the article
  const setBodydata = (e, editor) => {
    const data = editor.setData();
    setBody(data);
  };

  return (
    <div>
      {/* {console.log('articlePicInfo ---------:', articlePicInfo)} */}
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
                  defaultValue={articleInfo.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              {/* PREVIOUS CODE */}
              {/* <Form.Label>Article body</Form.Label>
            <Form.Control
              as="textarea"
              rows="10"
              placeholder=""
              value={body}
              onChange={(e) => setBody(e.target.value)}
            /> */}

              {/* WITH CKEditor */}

              <CKEditor
                data={articleInfo.body}
                editor={ClassicEditor}
                onChange={onchangeHandler}
              />
            </Form.Group>

            {/* File upload has to be done */}

            <Form.Group id="formGridCheckbox">
              <h3>Who can Edit</h3>
              {/* <Form.Check type="checkbox" label="Great Admin" onClick={ setBody(1)}/> */}
              <Form.Check
                type="checkbox"
                label="Admin"
                defaultChecked={articleInfo.admin_w}
                onClick={() => setAdmin_w(!admin_w)}
              />
              <Form.Check
                type="checkbox"
                label="Member"
                defaultChecked={articleInfo.member_w}
                onClick={() => setMember_w(!member_w)}
              />
              <h3>Who can Read</h3>
              {/* <Form.Check type="checkbox" label="Great Admin" /> */}
              <Form.Check
                type="checkbox"
                label="Admin"
                defaultChecked={articleInfo.admin_r}
                onClick={() => setAdmin_r(!admin_r)}
              />
              <Form.Check
                type="checkbox"
                label="Member"
                defaultChecked={articleInfo.member_r}
                onClick={() => setMember_r(!member_r)}
              />
              <Form.Check
                type="checkbox"
                label="Viewer"
                defaultChecked={articleInfo.viewer_r}
                onClick={() => setViewer_r(!viewer_r)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update the article
            </Button>
          </Form>

          {/* //////////////////////////////////////// */}
          <Card>
            {isPicAvailable ? (
              <div>
                <Card.Header>Update Article Pic</Card.Header>

                <Image
                  disabled={!validateForm()}
                  className="d-block w-100"
                  src={articlePicInfo.articlePicPath}
                  alt="articlePicAlt"
                  fluid
                />

                <Button onClick={removePic}>Remove the notice pic</Button>
              </div>
            ) : null}

            {/* ////////////////////////////////////////  */}
            {/* //////////////////////////////////////// */}

            <Card.Header>Add new Article Pic</Card.Header>

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
                  Done the updating article
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
    </div>
  );
}

export default EditArticle;
