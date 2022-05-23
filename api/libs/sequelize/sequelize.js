const { Sequelize } = require('sequelize')
const { vars } = require('../../configurations/vars.config')
const setUpModels = require('../../database/models/index')

const options = {
  dialect: 'postgres',
  loggin: vars.isProd
}

if (vars.isProd) {
  options.ssl = false
  options.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

if (vars.isProd) {
  const sequelize = new Sequelize(vars.postgresDbUri, options)
  setUpModels(sequelize)
  module.exports = sequelize
} else {
  const sequelize = new Sequelize(vars.postgresDbUriTest, options)
  setUpModels(sequelize)
  module.exports = sequelize
}
