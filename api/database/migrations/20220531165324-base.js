'use strict'

const { UserSchema, USER_TABLE } = require('../models/user.model')
const { LocationSchema, LOCATION_TABLE } = require('../models/location.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(LOCATION_TABLE, LocationSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(USER_TABLE)
    await queryInterface.drop(LOCATION_TABLE)
  }
}
