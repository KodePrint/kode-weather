const bcrypt = require('bcryptjs')
const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize/sequelize')

// CREATION CLASS USER SERVICES
class UserServices {

  // Hash Password
  hashPassword(password) {
    const newPassword = bcrypt.hash(password, 10)
    return newPassword
  }

  // GET All
  async getAll() {
    const users = await []
    return users
  }
}

module.exports = UserServices
