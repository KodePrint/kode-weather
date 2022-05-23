const { Model, DataTypes, Sequelize } = require('sequelize')
const { USER_TABLE } = require('./user.model')

const LOCATION_TABLE = 'locations'

const LocationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  country: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    set(value) {
      this.setDataValue('country', value.toLowerCase())
    }
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    set(value) {
      this.setDataValue('city', value.toLowerCase())
    }
  },
  latitude: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    set(value) {
      this.setDataValue('latitude', value.toLowerCase())
    }
  },
  logitude: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    set(value) {
      this.setDataValue('logitude', value.toLowerCase())
    }
  },
  userId: {
    field: 'user_id',
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: USER_TABLE,
      key: 'id'
    }
  },
  isActive: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_active'
  },
  isAdmin: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_admin'
  },
  created: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'created',
    defaultValue: Sequelize.NOW
  },
  updated: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'updated'
  }
}

class Location extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: LOCATION_TABLE,
      modelName: 'Location',
      timestamps: false
    }
  }
}

module.exports = { LOCATION_TABLE, LocationSchema, Location }
