'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('clientes', [{
      nome: 'Lígia Bozzi',
      ativo: true,
      email: 'ana@ana.com',
      idade: '1991-01-11',
      celular: '11986927292',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      nome: 'Fabiana Salinas',
      ativo: true,
      email: 'fabi@fabi.com',
      idade: '1994-12-18',
      celular: '1199999999',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Jessika Macedo',
      ativo: true,
      email: 'jessika@jessika',
      idade: '1993-10-14',
      celular: '1199999999',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Leticia Santos',
      ativo: true,
      email: 'leticia@le',
      idade: '1995-11-22',
      celular: '1199999999',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
  ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('clientes', null, {});

  }
};