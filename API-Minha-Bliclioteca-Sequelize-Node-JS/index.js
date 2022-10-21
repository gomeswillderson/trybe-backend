const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { BooksControllers } = require('./src/controllers');

app.use(express.json());

app.get('/books', BooksControllers.getAll);
app.get('/books/:id', BooksControllers.getById);
app.post('/books', BooksControllers.createBook);
app.put('/books/:id', BooksControllers.updateBook);
app.delete('/books/:id', BooksControllers.deleteBook);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));