const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sqlite3 = require('sqlite3').verbose();

const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');

const app = express();

// let db =new sqlite3.Database("./db/test.db", (err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Connected to the File database.');
// });

// db.close((err) => {
//     if (err) {
//         return console.error(err.message);
//     }

//     console.log('Close the database connection.');
// });

app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', postsRouter);
app.use('/', indexRouter);

module.exports = app;