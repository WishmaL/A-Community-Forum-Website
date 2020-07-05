var express = require('express');
var router = express.Router();
var db = require('../database/db');
const uuid = require('uuid');
// fileUpload = require('express-fileupload')

// IMPORTANT ADD CONNECTION SCAPE TO IGNORE SQL INJECTIONS

//   fetch data
router.get('/getNotices', (req, res) => {
  let sql = 'SELECT * FROM notices';
  let query = db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.send(rows);
  });
});

// ///////////////////////////////////////////
//   fetch specific notice
router.get('/getNotice/:id', (req, res) => {
  let sql = `SELECT * FROM notices WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.send(rows);
  });
}); 

// ///////////////////////////////////////////
// insert a notice
router.post('/newNotice', (req, res) => {
  const newNotice = [
    // req.body.id,
    // uuid.v4(),
    'default',
    req.body.userName,
    req.body.title,
    req.body.body,
    req.body.time,
    req.body.admin_r,
    req.body.admin_w,
    req.body.member_r,
    req.body.member_w,
    req.body.viewer_r,
  ];

  let sql = `SET @id = ?; SET @userName = ?; SET @title = ?; SET @body = ?; SET @time = ?;SET @admin_r = ?; SET @admin_w = ?; SET @member_r = ?; SET @member_w = ?; SET @viewer_r = ?;CALL addNoticeProcedure(@id, @userName, @title, @body, @admin_r, @admin_w, @member_r, @member_w, @viewer_r)`;
  let query = db.query(
    sql,
    [
      newNotice[0],
      newNotice[1],
      newNotice[2],
      newNotice[3],
      newNotice[4],
      newNotice[5],
      newNotice[6],
      newNotice[7],
      newNotice[8],
      newNotice[9],
    ],
    (err, rows) => {
      if (err) {
        if (err.errno == 1452) res.send('The user is not available!');
        else console.log(err);
      } else {
        rows.forEach((element) => {
          if (element.constructor == Array) {
            var msg = element[0].id;
            // following msg has the notice id
            res.json(msg);

            console.log(element[0]);
          }
        });
      }
    }
  );
});

// ////////////////////////////////////////////
// update a notice
router.put('/updateNotice/:id', (req, res, next) => {   
  const updated_notice = [
    // req.body.id,
    req.body.userName,
    req.body.title,
    req.body.body,
    req.body.time,
    req.body.admin_r,
    req.body.admin_w, 
    req.body.member_r,
    req.body.member_w,
    req.body.viewer_r,
    req.body.id,
  ];

  let sql = `UPDATE notices SET userName = ?, title = ?, body =?,time =?, admin_r = ?, admin_w = ?, member_r =?, member_w = ?, viewer_r = ? WHERE id = ${req.params.id}`;

  let query = db.query(sql, updated_notice, (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  });
});

// ///////////////////////////////////////////
// Delete a user
router.delete('/deleteNotice/:id', (req, res) => {
  const deleteNotice = [req.params.id];

  let sql = `DELETE FROM notices WHERE id = ${deleteNotice[0]}`;
  let query = db.query(sql, deleteNotice[0], (err, rows) => {
    if (err) throw err;
    console.log('deleted');
    res.send('successfully deleted!');
  });
});

module.exports = router;
