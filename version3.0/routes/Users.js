var express = require('express')
var router = express.Router()
var db = require('../database/db')
const uuid = require('uuid');


db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Mysql connected......');
  }
});



//   fetch data
router.get('/getUsers', (req, res) => {
  let sql = 'SELECT * FROM users';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

// ///////////////////////////////////////////
//   fetch specific user
router.get('/getUser', (req, res) => {
  let sql = `SELECT * FROM users WHERE id = ${req.body.id}`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

// ///////////////////////////////////////////
// insert a user
router.post('/newUser', (req, res) => {
  const newUser = {
    id: uuid.v4(), 
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    contact: req.body.contact,
    roll: req.body.roll,
  };

  let check = `SELECT * FROM users WHERE name = ? OR email = ?`;
  let check_query = db.query(check, [newUser[1],newUser[2]], (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });




  let sql = `INSERT INTO users SET ?`;
  let query = db.query(sql, newUser, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
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
      req.body.id
  ]

//   const update_user = {
    
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     contact: req.body.contact,
//     roll: req.body.roll,
//     id : req.body.id,
//   };
//   console.log(update_user)
  let sql = `UPDATE users SET name = ?, email = ?, password =?, contact = ?, roll = ? WHERE id = ?`;

//   let sql = `UPDATE users SET name = ${update_user.name}, email = ${update_user.email}, password =${update_user.password}, contact = ${update_user.contact}, roll =${update_user.roll} WHERE id = ${update_user.id}`;

  let query = db.query(sql, update_user, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.json(results); 
  });
  
});


// ///////////////////////////////////////////
// Delete a user
router.delete('/deleteUser', (req, res) => {
    const deleteUser = {
      id: req.body.id
    };
    let sql = `DELETE FROM users WHERE id = ?`;
    let query = db.query(sql, deleteUser.id, (err, results) => {
      if (err) throw err;
      console.log("deleted");
      res.send("successfully deleted!");
    });
  });




module.exports = router