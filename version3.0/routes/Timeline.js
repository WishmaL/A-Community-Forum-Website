var express = require('express');
var router = express.Router();
var db = require('../database/db');
const uuid = require('uuid');

// IMPORTANT ADD CONNECTION SCAPE TO IGNORE SQL INJECTIONS

//   fetch data
router.get('/getTimeEvents', (req, res) => {
  let sql = 'SELECT * FROM timeline';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

// ///////////////////////////////////////////
//   fetch specific user
router.get('/getTimeEvent', (req, res) => {
    let sql = `SELECT * FROM timeline WHERE id = ${req.body.id}`;
    let query = db.query(sql, (err, rows) => {
      if (err) throw err;
      console.log(rows);
      res.send(rows);
    });
  });

// ///////////////////////////////////////////
// insert a user
router.post('/newTimeEvent', (req, res) => {
  const newUser = [
    // req.body.id,
    // uuid.v4(),
    'default',
    req.body.topic,
    req.body.description,
    req.body.date
  ];

  let sql = `SET @id = ?; SET @topic = ?; SET @description = ?; SET @date = ?; CALL timelineProcedure(@id, @topic, @description, @date)`;
  let query = db.query(
    sql,
    [newUser[0], newUser[1], newUser[2], newUser[3]],
    (err, results) => {
      if (err) throw err;

      results.forEach((element) => {
        if (element.constructor == Array) {
          var msg = element[0].msg;
          res.send('inserted element id : ' + msg);
          console.log(element[0]);
        }
      });
    }
  );
});

// ////////////////////////////////////////////
// update a user
router.put('/updateTimeEvent', (req, res, next) => {
  const update_user = [
    req.body.topic,
    req.body.description,
    req.body.date,
    req.body.id,
  ];

  let sql = `UPDATE users SET topic = ?, description = ?, date =? WHERE id = ?`;

  let query = db.query(sql, update_user, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.json(results);
  });
});

// ///////////////////////////////////////////
// Delete a user
router.delete('/deleteTimeEvent', (req, res) => {
  const deleteUser = [req.body.id];

  let sql = `DELETE FROM users WHERE id = ?`;
  let query = db.query(sql, deleteUser[0], (err, results) => {
    if (err) throw err;
    console.log('deleted');
    res.send('successfully deleted!');
  });
});

module.exports = router;
