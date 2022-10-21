'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('books',
    [
      {
        title: 'Livro de Teste 01',
        author: 'Escritor que testa',
        pageQuantity: 90,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Livro dos Testes 02',
        author: 'Escritor que revisa',
        pageQuantity: 23,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('books', null, {}),
};