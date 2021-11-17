const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sqlite3 = require('sqlite3').verbose();

// const indexRouter = require('.routes/index');
// const postsRouter = require('.routes/posts');

const app = express();

let db =new sqlite3.Database(":memory:", (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory Sqlite database.');
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Close the database connection.');
});