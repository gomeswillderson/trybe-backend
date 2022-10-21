const express = require('express');
const app = express();
const { booksRouter } = require('./routers');

app.use(express.json());

app.use('/books', booksRouter);

modedule.exports = app;