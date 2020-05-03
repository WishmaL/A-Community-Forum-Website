// var express = require('express');
// var router = express.Router();
// var db = require('../database/db');
// const uuid = require('uuid');

// // IMPORTANT ADD CONNECTION SCAPE TO IGNORE SQL INJECTIONS

// //   fetch data
// router.get('/getArticles', (req, res) => {
//   let sql = 'SELECT * FROM articles';
//   let query = db.query(sql, (err, rows) => {
//     if (err) throw err;
//     console.log(rows);
//     res.send(rows);
//   });
// });

// // ///////////////////////////////////////////
// //   fetch specific article
// router.get('/getArticle', (req, res) => {
//   let sql = `SELECT * FROM articles WHERE id = ${req.body.id}`;
//   let query = db.query(sql, (err, rows) => {
//     if (err) throw err;
//     console.log(rows);
//     res.send(rows);
//   });
// });

// // ///////////////////////////////////////////
// // insert a notice
// router.post('/newArticle', (req, res) => {
//   const newArticle = [
//     // req.body.id,
//     uuid.v4(),
//     req.body.userId,
//     req.body.title,
//     req.body.body,
//     // req.body.time,
//     req.body.admin_r,
//     req.body.admin_w,
//     req.body.member_r,
//     req.body.member_w,
//     req.body.viewer_r,
//   ];

//   let sql = `SET @id = ?; SET @userId = ?; SET @title = ?; SET @body = ?; SET @admin_r = ?; SET @admin_w = ?; SET @member_r = ?; SET @member_w = ?; SET @viewer_r = ?;CALL addArticleProcedure(@id, @userId, @title, @body, @admin_r, @admin_w, @member_r, @member_w, @viewer_r)`;
//   let query = db.query(
//     sql,
//     [
//       newArticle[0],
//       newArticle[1],
//       newArticle[2],
//       newArticle[3],
//       newArticle[4],
//       newArticle[5],
//       newArticle[6],
//       newArticle[7],
//       newArticle[8],
//     ],
//     (err, rows) => {
      
//       if(err){    
//         if (err.errno == 1452) res.send('The user is not available!');
//         else console.log(err);
//       }
//       else {
//         rows.forEach((element) => {
//           if (element.constructor == Array) {
//             var msg = element[0].id;
//             res.send('Inserted Article id : ' + msg);
//             console.log(element[0]);
//           }
//         });
//       }
//     }
//   );
// });



// // ////////////////////////////////////////////
// // update a notice
// router.put('/updateArticle', (req, res, next) => {
//   const updated_article = [
//     // req.body.id,
//     req.body.userId,
//     req.body.title,
//     req.body.body,
//     // req.body.time,
//     req.body.admin_r,
//     req.body.admin_w,
//     req.body.member_r,
//     req.body.member_w,
//     req.body.viewer_r,
//     req.body.id,
//   ];

//   let sql = `UPDATE articles SET userId = ?, title = ?, body =?, admin_r = ?, admin_w = ?, member_r =?, member_w = ?, viewer_r = ? WHERE id = ?`;

//   let query = db.query(sql, updated_article, (err, rows) => {
//     if (err) throw err;
//     console.log(rows);
//     res.json(rows);
//   });
// });

// // ///////////////////////////////////////////
// // Delete a user
// router.delete('/deleteArticle', (req, res) => {
//   const deleteNotice = [req.body.id];

//   let sql = `DELETE FROM articles WHERE id = ?`;
//   let query = db.query(sql, deleteNotice[0], (err, rows) => {
//     if (err) throw err;
//     console.log('deleted');
//     res.send('successfully deleted!');
//   });
// });   

// module.exports = router;    
