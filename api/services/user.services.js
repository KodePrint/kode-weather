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

  // Find or Create
  async createBySocial(profile) {
    const { id, displayName, photos, emails } = profile
    const email = emails[0].value
    const name = displayName
    const image = photos[0].value
    const password = await this.hashPassword((id + name))
    const isLocal = false
    const user = await models.User.findOrCreate({
      where: { email },
      defaults: { password, name, image, isLocal }
    })
    // const user = { email, password, name, image }
    return user
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
    const users = await models.User.findAll({
      attributes: ['id', 'email', 'name', 'image', 'isActive', 'isLocal']
    })
      .catch(error => {
        throw boom.internal(error)
      })
    return users
  }

  // GET BY EMAIL
  async getByEmail(email) {
    const user = await models.User.findOne({
      attributes: ['id', 'email', 'password', 'name', 'image', 'isActive', 'isLocal'],
      where: { email }
    })
    if (!user) {
      throw boom.notFound('User not found')
    }
    return user
  }

  // GET BY Id
  async getOne(id) {
    const user = await models.User.findByPk(id, {
      attributes: ['id', 'email', 'password', 'name', 'image', 'isActive', 'isLocal']
    })
    if (!user) {
      throw boom.notFound('User not found')
    }
    return user
  }

  // UPDATE
  async update(id, body) {
    const old = await this.getOne(id)
    if (body.password) {
      body.password = await this.hashPassword(body.password)
    }
    const user = await old.update(body)
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
