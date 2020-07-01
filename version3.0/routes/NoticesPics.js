var express = require('express');
var router = express.Router();
var db = require('../database/db');
const uuid = require('uuid');
// fileUpload = require('express-fileupload')

// IMPORTANT ADD CONNECTION SCAPE TO IGNORE SQL INJECTIONS

//   fetch data
router.get('/getNoticesPics', (req, res) => {
  let sql = 'SELECT * FROM notices_pics';
  let query = db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.send(rows);
  });
});

// ///////////////////////////////////////////
//   fetch specific user
router.get('/getNoticesPic', (req, res) => {
  let sql = `SELECT * FROM notices_pics WHERE id = ${req.body.id}`;
  let query = db.query(sql, (err, rows) => {
    if (err) throw err;

    const file = req.files.file;

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    // console.log(rows);
    // res.send(rows);
  });
});





router.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error('the error is --->',err);
      return res.status(500).send(err);
    } 

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});










// ///////////////////////////////////////////
// insert a notice_pic data
router.post('/newNoticesPic', (req, res) => {
 
  const newNoticePic = [
    'default',
    req.body.noticeId,
    req.body.noticePic 
  ];
 

  let sql = `SET @id = ?; SET @noticeId = ?; SET @noticePic = ?; CALL addNoticePicProcedure(@id, @noticeId, @noticePic)`;
  let query = db.query(
    sql,
    [newNoticePic[0], newNoticePic[1], newNoticePic[2]],
    (err, rows) => {
      // if (err) {
      //   if (err.errno == 1452) res.send('The user is not available!');
      //   else console.log(err);
      // } else {
        if (err) throw err;
        rows.forEach((element) => {
          if (element.constructor == Array) {
            var msg = element[0].id;
            res.send('Inserted notice pic id : ' + msg);
            console.log(element[0]);
          }
        });
      // }
    }
  );
});

// ////////////////////////////////////////////
// update a notice
router.put('/updateNoticesPics', (req, res, next) => {
  const updated_notice = [
    // req.body.id,
    req.body.userId,
    req.body.title,
    req.body.body,
    // req.body.time,
    req.body.admin_r,
    req.body.admin_w,
    req.body.member_r,
    req.body.member_w,
    req.body.viewer_r,
    req.body.id,
  ];

  let sql = `UPDATE notices_pics SET userId = ?, title = ?, body =?, admin_r = ?, admin_w = ?, member_r =?, member_w = ?, viewer_r = ? WHERE id = ?`;

  let query = db.query(sql, updated_notice, (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  });
});

// ///////////////////////////////////////////
// Delete a user
router.delete('/deleteNoticesPics', (req, res) => {
  const deleteNotice = [req.body.id];

  let sql = `DELETE FROM notices_pics WHERE id = ?`;
  let query = db.query(sql, deleteNotice[0], (err, rows) => {
    if (err) throw err;
    console.log('deleted');
    res.send('successfully deleted!');
  });
});

module.exports = router;
