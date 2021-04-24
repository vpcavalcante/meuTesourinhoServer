'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trilha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  trilha.init({
    nome: DataTypes.STRING,
    entrada: DataTypes.DECIMAL(10,2),
    saida: DataTypes.DECIMAL(10,2),
    nivel: DataTypes.INTEGER,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'trilha',
  });
  return trilha;
};