const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('characters', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  })
}
