'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('statuspagamentos', [{
      nome: 'Barbara Celeste',
      status: true,
      data: '2021-04-12',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      nome: 'Roberto Castro',
      status: false,
      data: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('statuspagamentos', null, {});

  }
};