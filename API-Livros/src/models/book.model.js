const bookModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return User;
};

module.exports = bookModel;