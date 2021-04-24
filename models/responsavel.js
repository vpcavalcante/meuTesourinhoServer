'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class responsavel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  responsavel.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    nasc: DataTypes.DATE,
    email: DataTypes.STRING,
    celular: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'responsavel',
  });
  return responsavel;
};