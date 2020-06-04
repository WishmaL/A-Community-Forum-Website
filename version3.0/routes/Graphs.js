var express = require('express');
var router = express.Router();
var db = require('../database/db');
const uuid = require('uuid');

// IMPORTANT ADD CONNECTION SCAPE TO IGNORE SQL INJECTIONS

//   fetch data
router.get('/getGraphs', (req, res) => {
  let sql = 'SELECT * FROM graphs';
  let query = db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.send(rows);
  });
});

// ///////////////////////////////////////////
//   fetch specific graph
router.get('/getGraph', (req, res) => {
  let sql = `SELECT * FROM graphs WHERE id = ${req.body.id}`;
  let query = db.query(sql, (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.send(rows);
  });
});

// ///////////////////////////////////////////
// insert a graph
router.post('/newGraph', (req, res) => {
  const newArticle = [
    // req.body.id,
    // uuid.v4(),
    'default',
    req.body.userName,
    req.body.title,
    req.body.iframe,
    req.body.description,
    req.body.admin_r,
    req.body.member_r,
    req.body.viewer_r,
  ];

  let sql = `SET @id = ?; SET @userName = ?; SET @title = ?; SET @iframe = ?; SET @description = ?; SET @admin_r = ?;  SET @member_r = ?; SET @viewer_r = ?;CALL addGraphProcedure(@id, @userName, @title, @iframe, @description, @admin_r, @member_r, @viewer_r)`;
  let query = db.query(
    sql,
    [
      newArticle[0],
      newArticle[1],
      newArticle[2],
      newArticle[3],
      newArticle[4],
      newArticle[5],
      newArticle[6],
      newArticle[7]
    ],
    (err, rows) => {
      
      if(err){    
        if (err.errno == 1452) res.send('The user is not available!');
        else console.log(err);
      }
      else {
        rows.forEach((element) => {
          if (element.constructor == Array) {
            var msg = element[0].id;
            res.send('Inserted Graph id : ' + msg);
            console.log(element[0]);
          }
        });
      }
    }
  );
});



// ////////////////////////////////////////////
// update a graph
router.put('/updateGraph', (req, res, next) => {
  const updated_graph = [
    // req.body.id,
    req.body.userName,
    req.body.title,
    req.body.iframe,
    req.body.description,
    req.body.admin_r,
    
    req.body.member_r,
    
    req.body.viewer_r,
    req.body.id,
  ];

  let sql = `UPDATE graphs SET userName = ?, title = ?, iframe =?, description =?, admin_r = ?, member_r =?, viewer_r = ? WHERE id = ?`;

  let query = db.query(sql, updated_graph, (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  });
});

// ///////////////////////////////////////////
// Delete a graph 
router.delete('/deleteGraph', (req, res) => {
  const deleteNotice = [req.body.id];

  let sql = `DELETE FROM graphs WHERE id = ?`;
  let query = db.query(sql, deleteNotice[0], (err, rows) => {
    if (err) throw err;
    console.log('deleted');
    res.send('successfully deleted!');
  });
});   

module.exports = router;    
