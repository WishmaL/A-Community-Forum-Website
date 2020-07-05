var express = require('express');
var fs = require('fs');
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

//   fetch specific data from notices_pics
router.get('/getNoticePic/:noticeId', (req, res) => {
  let sql = `SELECT * FROM notices_pics WHERE noticeId = ${req.params.noticeId}`;
  let query = db.query(sql, (err, rows) => {
    if (err) throw err;
    // console.log(rows);
    res.send(rows);
  });
});









// ///////////////////////////////////////////
//   fetch specific noticePic for fetching pics
router.get('/getNoticesPic', (req, res) => {
  // let sql = `SELECT * FROM notices_pics WHERE id = ${req.body.id}`;
  // let query = db.query(sql, (err, rows) => {
    if (err) throw err;

    const file = req.files.file;

    res.json({
      fileName: file.name,
      filePath: `/uploads/banners/${file.name}`,
    });
    // console.log(rows);
    // res.send(rows);
  // }
  // );
}
);





router.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`client/public/uploads/banners/${file.name}`, (err) => {
    if (err) {
      console.error('the error is --->', err);
      return res.status(500).send(err);
    }

    res.json({
      fileName: file.name,
      filePath: `/uploads/banners/${file.name}`,
    });
  });
});

// ///////////////////////////////////////////
// insert a notice_pic data
router.post('/newNoticesPic', (req, res) => {
  const newNoticePic = [
    'default',
    req.body.noticeId,
    req.body.noticePic,
    req.body.noticePicPath,
  ];

  let sql = `SET @id = ?; SET @noticeId = ?; SET @noticePic = ?; SET @noticePicPath = ?; CALL addNoticePicProcedure(@id, @noticeId, @noticePic, @noticePicPath)`;
  let query = db.query(
    sql,
    [newNoticePic[0], newNoticePic[1], newNoticePic[2], newNoticePic[3]],
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
  const updated_noticepic = [
    // req.body.id,
    req.body.noticeId,
    req.body.noticePic,
    req.body.noticePicPath,
    req.body.id,
  ];

  let sql = `UPDATE notices_pics SET noticeId = ?, noticePic = ?, noticePicPath =? WHERE id = ?`;

  let query = db.query(sql, updated_noticepic, (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  }); 
});
  
// ///////////////////////////////////////////
// Delete a user
// router.delete('/deleteNoticesPics/:data_', (req, res) => {
//   const deleteNoticePic = [req.params.id];
//   const filePath = [req.params.noticePicPath]
router.delete('/deleteNoticesPics/:id', (req, res) => {
  // [id, filePath] = req.data;
  const picInfo = [req.params.id];

  // console.log('id',id, 'filepath',filepath)

  let sql = `DELETE FROM notices_pics WHERE id = ${picInfo[0]}`;
  let query = db.query(sql, deleteNoticePic[0], (err, rows) => {
    if (err) throw err;
    console.log('deleted');
    res.send('picInfo successfully deleted!');
  });

});

router.delete('/deletePic/:filePath', (req, res) => {
  // [id, filePath] = req.data;
  const filePic = [req.params.filePic];
  console.log(filePic)
  let delPic = `G:/Projects/LEARN LMS Analysis System/version3.0/client/public/uploads/banners/${filePic}`

// following eill delete the pic 
  fs.unlink(delPic, function (err) {
    if (err) throw err;
    console.log('File deleted!'); 
  });
  res.send('File is deleted!');
}); 

module.exports = router;
