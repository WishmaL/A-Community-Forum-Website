var express = require('express');
var router = express.Router();
var db = require('../database/db');
const uuid = require('uuid');

// IMPORTANT ADD CONNECTION SCAPE TO IGNORE SQL INJECTIONS

//   fetch data
router.get('/getComments', (req, res) => {
  let sql = 'SELECT * FROM comments';
  let query = db.query(sql, (err, rows) => {
    if (err) throw err;
    // console.log(rows);
    res.send(rows);
  });
});

// ///////////////////////////////////////////
//   fetch specific comment
router.get('/getcomment', (req, res) => {
  let sql = `SELECT * FROM comments WHERE id = ${req.body.id}`;
  let query = db.query(sql, (err, rows) => {
    if (err) throw err;
    // console.log(rows);
    res.send(rows);
  });
});

// ///////////////////////////////////////////
// insert a comment
router.post('/newComment', (req, res) => {
  const newComment = [
    // uuid.v4(),
    'default',
    req.body.articleId,
    req.body.thread,
    req.body.userName,
  ];

  let sql = `SET @id = ?; SET @articleId = ?; SET @thread = ?; SET @userName = ?;CALL addCommentProcedure(@id, @articleId, @thread, @userName)`;
  let query = db.query(
    sql,
    [newComment[0], newComment[1], newComment[2], newComment[3]],
    (err, rows) => {
      if (err) {
        if (err.errno == 1452)
          res.send('The user or the article is not available!');
        else console.log(err);
      } else {
        rows.forEach((element) => {
          if (element.constructor == Array) {
            var msg = element[0].id;
            res.send('Inserted Comment id : ' + msg);
            // console.log("sent item is ",element[0]);
          }
        });
      }
    }
  );
});

// ////////////////////////////////////////////
// update a notice
router.put('/updateComment', (req, res, next) => {
  const updated_comment = [
    req.body.articleId,
    req.body.thread,
    req.body.userName,
    req.body.id,
  ];

  let sql = `UPDATE comments SET articleId = ?, thread =?, userName = ? WHERE id = ?`;

  let query = db.query(sql, updated_comment, (err, rows) => {
    if (err) throw err;
    // console.log(rows);
    res.json(rows);
  });
});

// ///////////////////////////////////////////
// Delete a user
router.delete('/deleteComment/:id', (req, res) => {
  const deleteComment = [req.params.id];

  let sql = `DELETE FROM comments WHERE id = ${deleteComment[0]}`;
  let query = db.query(sql, deleteComment[0], (err, rows) => {
    if (err) throw err;
    // console.log('deleted');
    res.send('successfully deleted!');
  });
});

module.exports = router;
