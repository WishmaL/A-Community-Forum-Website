var express = require('express');
var router = express.Router();
var db = require('../database/db');
const uuid = require('uuid');

// IMPORTANT ADD CONNECTION SCAPE TO IGNORE SQL INJECTIONS

//   fetch data
router.get('/getReplies', (req, res) => {
  let sql = 'SELECT * FROM replies';
  let query = db.query(sql, (err, rows) => {
    if (err) throw err;
    // console.log(rows);
    res.send(rows);
  });
});

// ///////////////////////////////////////////
//   fetch specific reply
// router.get('/getcomment', (req, res) => {
//   let sql = `SELECT * FROM comments WHERE id = ${req.body.id}`;
//   let query = db.query(sql, (err, rows) => {
//     if (err) throw err;
//     console.log(rows);
//     res.send(rows);
//   });
// });

// ///////////////////////////////////////////
// insert a comment
router.post('/newReply', (req, res) => {
  const newReply = [
    // uuid.v4(),
    'default',
    req.body.userName,
    req.body.commentId,
    req.body.reply,
  ];

  //   let sql = `SET @id = ?; SET @articleId = ?; SET @thread = ?; SET @userName = ?;CALL addCommentProcedure(@id, @articleId, @thread, @userName)`;
  let sql = `SET @id = ?; SET @userName = ?; SET @commentId = ?; SET @reply = ?; CALL addReplyProcedure(@id, @userName, @commentId, @reply)`;
  let query = db.query(
    sql,
    [newReply[0], newReply[1], newReply[2], newReply[3]],
    (err, rows) => {
      if (err) {
        if (err.errno == 1452)
          res.send('The user or the article is not available!');
        else console.log(err);
      } else {
        rows.forEach((element) => {
          if (element.constructor == Array) {
            var msg = element[0].reply;
            res.send('Inserted reply is : ' + msg);
            // console.log("reply is ",element[0]);
          }
        });
      }
    }
  );
});

// ////////////////////////////////////////////
// update a notice
router.put('/updateReply', (req, res, next) => {
  const updated_reply = [
    req.body.articleId,
    req.body.userName,
    req.body.reply,
    req.body.id,
  ];

  let sql = `UPDATE replies SET articleId = ?, userName = ?, reply =? WHERE id = ?`;

  let query = db.query(sql, updated_reply, (err, rows) => {
    if (err) throw err;
    // console.log(rows);
    res.json(rows);
  });
});

// ///////////////////////////////////////////
// Delete a user
router.delete('/deleteReply', (req, res) => {
  const deleteReply = [req.body.id];

  let sql = `DELETE FROM replies WHERE id = ?`;
  let query = db.query(sql, deleteReply[0], (err, rows) => {
    if (err) throw err;
    // console.log('deleted');
    res.send('Reply successfully deleted!');
  });
});

module.exports = router;
