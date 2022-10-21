const express = require('express');
const { BooksControllers } = require('../controllers');

const router = express.Router();

router.get('/', BooksControllers.getAll);
router.get('/:id', BooksControllers.getById);
router.post('/', BooksControllers.createBook);
router.put('/:id', BooksControllers.updateBook);
router.delete('/:id', BooksControllers.deleteBook);

module.exports = router;