'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('trilhas', [{
        nome: 'Lígia Bozzi',
        entrada: 20.00,
        saida: 10.00,
        nivel: 1,
        data: '2021-04-15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Fabiana Salinas',
        entrada: 50.00,
        saida: 20.00,
        nivel: 3,
        data: '2021-04-13',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('trilhas', null, {});

  }
};