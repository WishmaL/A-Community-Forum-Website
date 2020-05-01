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


// IMPORTANT ADD CONNECTION SCAPE TO IGNORE SQL INJECTIONS



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
 
  const newUser = [
    req.body.id,
    req.body.name,
    req.body.email, 
    req.body.password,
    req.body.contact,
    req.body.roll
] 

  let sql = `SET @id = ?; SET @name = ?; SET @email = ?; SET @password = ?; SET @contact = ?; SET @roll = ?; CALL myprocedure(@id, @name, @email, @password, @contact, @roll)`;
  let query = db.query(sql, [newUser[0],newUser[1],newUser[2],newUser[3],newUser[4],newUser[5]], (err, results) => {

    if(err) throw err;

    results.forEach(element => {
      if(element.constructor == Array){
        var msg = element[0].msg
        res.send('inserted element id : '+msg); 
        console.log(element[0])  
      }
      
    });

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
    const deleteUser = [
      req.body.id
    ]
      
    let sql = `DELETE FROM users WHERE id = ?`;
    let query = db.query(sql, deleteUser[0], (err, results) => {
      if (err) throw err;
      console.log("deleted");
      res.send("successfully deleted!");
    });
  });




module.exports = router