const bookService = require('../services/BooksService');

const error500Message = 'Algo deu errado';

const getAll = async (_req, res) => {
    try {
        const books = await bookService.getAll();
        return res.status(200).json(books);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Ocorreu um erro' });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await bookService.getById(id);

        if (!book) return res.status(404).json({ message: 'Livro nao encontrado' });
        return res.status(200).json(book);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: error500Message });
    }
};

const createBook = async (req, res) => {
    try {
        const { title, author, pageQuantit } = req.body;
        const newBook = await bookService.createBook(title, author, pageQuantit);

        return res.status(201).json(newBook);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: error500Message });
    }
};

const updateBook = async (req, res) => {
    try {
        const { title, author, pageQuantity } = req.body;
        const { id } = req.params;
        const updatedBook = await bookService.updateBook(id, title, author, pageQuantity);

        if (!updatedBook) return res.status(400).json({ message: 'Livro nao encontrado' });

        return res.status(200).json({ message: 'Livro atualizado com sucesso' });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: error500Message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await bookService.deleteBook(id);

        return res.status(200).json({ message: 'Livro excluido com sucesso' });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: error500Message });
    }
};

module.exports = {
    getAll,
    getById,
    createBook,
    updateBook,
    deleteBook,
};