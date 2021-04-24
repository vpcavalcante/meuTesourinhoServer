'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class statuspagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  statuspagamento.init({
    nome: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'statuspagamento',
  });
  return statuspagamento;
};