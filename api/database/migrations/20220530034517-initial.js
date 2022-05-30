'use strict'

const { USER_TABLE, UserSchema } = require('../models/user.model')
const { LOCATION_TABLE, LocationSchema } = require('../models/location.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(LOCATION_TABLE, LocationSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(LOCATION_TABLE)
  }
}
