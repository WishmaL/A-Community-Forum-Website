const mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_learn',
  multipleStatements: true
});

module.exports = db; 
