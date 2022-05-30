const { Model, DataTypes, Sequelize } = require('sequelize')

const USER_TABLE = 'users'

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    set(value) {
      this.setDataValue('email', value.toLowerCase())
    }
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    min: 6
  },
  tokenReset: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'token_reset'
  },
  tokenRefresh: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'token_refresh'
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING,
    max: 75,
    set(value) {
      this.setDataValue('name', value.toLowerCase())
    }
  },
  image: {
    allowNull: true,
    type: DataTypes.STRING,
    max: 255
  },
  isLocal: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'is_local',
    defaultValue: true
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

class User extends Model {

  static associate(models) {
    this.hasMany(models.Location, {
      as: 'locations',
      foreignKey: 'userId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
