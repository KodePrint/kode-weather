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

  // CREATE
  async create(body) {
    body.password = await this.hashPassword(body.password)
    const user = await models.User.create(body)
    return {
      id: user.id,
      email: user.email
    }
  }

  // GET All
  async getAll() {
    const users = await models.User.findAll()
      .catch(error => {
        throw boom.internal(error)
      })
    return users
  }

  // GET BY EMAIL
  async getByEmail(email) {
    const user = await models.User.findOne({ where: { email } })
    if (!user) {
      throw boom.notFound('User not found')
    }
    return user
  }

  // DELETE
  async delete(id) {
    const user = await models.User.findByPk(id)
    await user.destroy()
    return { message: `User with ${id} has deleted successfull` }
  }
}

module.exports = UserServices
