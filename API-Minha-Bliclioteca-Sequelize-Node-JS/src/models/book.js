
const BookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  },
    {
      underscore: true,
      tableName: 'books',
    });

  return Book;

};

module.exports = BookModel;