const { Pool } = require('pg')
const { vars } = require('../../configurations/vars.config')

const options = {}

if (vars.isProd) {
  options.connectionString = vars.postgresDbUri
  options.dialect = 'postgres'
  options.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
} else {
  options.connectionString = vars.postgresDbUriTest
  options.dialect = 'postgres'
}

const pool = new Pool(options)

module.exports = pool
