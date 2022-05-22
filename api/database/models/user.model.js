import { Model, DataTypes, Sequelize } from 'sequelize'

export const USER_TABLE = 'Users'

export const UserSchema = {
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
  name: {
    allowNull: false,
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

export class User extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}
