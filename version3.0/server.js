const express = require('express');
// const mysql = require('mysql');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
// var db = require('./db')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var Users = require('./routes/Users')
app.use('/users',Users)


app.listen(port, () => {
  console.log('Server is running on port', port);
});

module.exports = app;
