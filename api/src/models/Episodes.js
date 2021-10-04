const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('episodes', {   
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    episode:{
      type: DataTypes.STRING,
    }
  });
};
