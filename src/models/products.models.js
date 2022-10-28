const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Products = db.define('products', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name'
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'category'
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'price'
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_available'
  },

}, { timestamps: false })
module.exports = Products

