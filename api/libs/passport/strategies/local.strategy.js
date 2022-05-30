const { Strategy } = require('passport-local')
const boom = require('@hapi/boom')
const bcrypt = require('bcryptjs')

const UserServices = require('../../../services/user.services')
const service = new UserServices()

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    PASSWORD_FIELD: 'password'
  },
  async (email, password, done) => {
    try {
      // Busca el usuario
      const user = await service.getByEmail(email)
      // Verifica que el usuario no sea vacio
      if (!user) {
        return done(boom.unauthorized(), false)
      }
      // Verficamos el password hasheandolo
      const isMatch = await bcrypt.compare(password, user.password)
      // De no ser correcto, retorna un error
      if (!isMatch) {
        return done(boom.unauthorized(), false)
      }
      // Evitamos retornar el password
      delete user.dataValues.password
      // Si todo es correcto, retorna el usuario
      done(null, user)
    } catch (error) {
      done(error, false)
    }
  }
)

module.exports = LocalStrategy
