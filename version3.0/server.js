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

var Notices = require('./routes/Notices.js')
app.use('/notices',Notices)

var Articles = require('./routes/Articles.js')
app.use('/articles',Articles)

var Graphs = require('./routes/Graphs.js')
app.use('/graphs',Graphs)

var Comments = require('./routes/Comments.js')
app.use('/comments',Comments)

app.listen(port, () => {
  console.log('Server is running on port', port);
});

module.exports = app;
