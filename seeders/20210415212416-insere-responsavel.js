'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('responsavel', [{
        nome: "Barbara Celeste",
        cpf: 32044055022,
        nasc: '1950-10-15',
        email: 'barbara@barbara.com',
        celular: 1112345678,
        cidade: 'Franca',
        estado: 'São Paulo',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Pamela Alves",
        cpf: 45678912355,
        nasc: '1958-08-30',
        email: 'pam@pam.com',
        celular: 1178945612,
        cidade: 'Lins',
        estado: 'São Paulo',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Roberto Castro",
        cpf: 45615678956,
        nasc: '1970-07-11',
        email: 'ro@berto.com',
        celular: 2145985896,
        cidade: 'Petrópoles',
        estado: 'Rio de Janeiro',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('responsavel', null, {});
  }
};