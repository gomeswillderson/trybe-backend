const { Books } = require('../models')

const getAll = async () => {
    const books = await Books.findAll({ 
        order: [['title', 'ASC']],
      });

    return books;
};

const getById = async (id) => {
    const books = await Books.findByPk(id);
    return books;
};

const getByAuthor = async (author) => {
    const books = await Books.findAll({
         where: { author },
         order: [['title', 'ASC']],
        });
    return books;
};

const createBook = async (title, author, pageQuantity) => {
    const newBook = await Books.create({ title, author, pageQuantity });
    return newBook;
};

const updateBook = async (id, title, author, pageQuantity) => {
    const [updatedBook] = await Books.update(
        { title, author, pageQuantity },
        { where: { id } },
    );
    console.log(updatedBook);
    return updatedBook;
};

const deleteBook = async (id) => {
    const deletedBook = await Books.destroy(
        { where: { id } },
    );
    console.log(deletedBook);
    return deletedBook;
}

module.exports = {
    getAll,
    getById,
    createBook,
    updateBook,
    deleteBook,
    getByAuthor,
};