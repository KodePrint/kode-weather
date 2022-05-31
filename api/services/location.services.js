const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize/sequelize')

// CREATION CLASS LOCATION SERVICES
class LocationServices {

  // CREATE
  async create(body) {
    const location = await models.Location.create(body)
    return location
  }

  // GET All
  async getAll() {
    const locations = await models.Location.findAll()
      .catch(error => {
        throw boom.internal(error)
      })
    return locations
  }

  // GET BY Id
  async getOne(id) {
    const location = await models.Location.findByPk(id)
    if (!location) {
      throw boom.notFound('Location not found')
    }
    return location
  }

  // GET BY User
  async getByUser(userId) {
    const locations = await models.Location.findAll({ where: { userId } })
    if (!locations) {
      throw boom.notFound('Location not found')
    }
    return locations
  }

  // DELETE
  async delete(id) {
    const location = await models.Location.findByPk(id)
    await location.destroy()
    return { message: `Loctaion with ${id} has deleted successfull` }
  }
}

module.exports = LocationServices
