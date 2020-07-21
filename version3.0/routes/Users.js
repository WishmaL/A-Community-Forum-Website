var express = require('express');
var router = express.Router();
var db = require('../database/db');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Mysql connected......');
  }
});

// IMPORTANT ADD CONNECTION SCAPE TO IGNORE SQL INJECTIONS

//   fetch data
router.get('/getUsers', (req, res) => {
  let sql = 'SELECT * FROM users';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.send(results);
  });
});

// ///////////////////////////////////////////
//   fetch specific user
// router.post('/getUser', (req, res) => {
//   let sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
//   let param = [req.body.email, req.body.password];
//   let query = db.query(sql, param, (err, results) => {
//     if (err) console.log('The error is ....>>', err);
//     console.log(results);
//     res.send(results);
//   });
// });

router.post('/getUser', (req, res) => {
  let sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  let user = [req.body.email, req.body.password];
  let query = db.query(sql, user, (err, results) => {
    if (err) console.log('The error is ....>>', err);
    if (!results.length) {
      res.sendStatus(403);
      // res.json({
      //   results,
      //   token:'',
      // });
    } else {
      console.log(results.length);
      // console.log('results: ', results)
      
      jwt.sign({ user }, 'secretkey', (err, token) => {
        console.log(token)
        res.json({
          results,
          token,
        });
      });
    }
  });
});

router.post('/newUser', (req, res) => {
  const newUser = [
    // req.body.id,
    // uuid.v4(),
    'default',
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.contact,
    req.body.roll,
  ];

  let sql = `SET @id = ?; SET @name = ?; SET @email = ?; SET @password = ?; SET @contact = ?; SET @roll = ?; CALL addUserprocedure(@id, @name, @email, @password, @contact, @roll)`;
  let query = db.query(
    sql,
    [newUser[0], newUser[1], newUser[2], newUser[3], newUser[4], newUser[5]],
    (err, results) => {
      if (err) throw err;

      results.forEach((element) => {
        if (element.constructor == Array) {
          var msg = element[0].id;
          res.json(msg);
          // res.send('inserted element id : ' + msg);
          // console.log(element[0]);
        }
      });
    }
  );
});

// ////////////////////////////////////////////
// update a user
router.put('/updateUser', (req, res, next) => {
  const update_user = [
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.contact,
    req.body.roll,
    req.body.id,
  ];

  let sql = `UPDATE users SET name = ?, email = ?, password =?, contact = ?, roll = ? WHERE id = ?`;

  let query = db.query(sql, update_user, (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.json(results);
  });
});

// ///////////////////////////////////////////
// Delete a user
router.delete('/deleteUser', (req, res) => {
  const deleteUser = [req.body.id];

  let sql = `DELETE FROM users WHERE id = ?`;
  let query = db.query(sql, deleteUser[0], (err, results) => {
    if (err) throw err;
    // console.log('deleted');
    res.send('successfully deleted!');
  });
});

module.exports = router;
