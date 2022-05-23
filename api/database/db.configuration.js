const { vars } = require('../configurations/vars.config')

module.exports = {
  development: {
    url: vars.postgresDbUriTest,
    dialect: 'postgres'
  },
  production: {
    url: vars.postgresDbUri,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}
