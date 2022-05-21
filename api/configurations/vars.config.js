require('dotenv').config()

const vars = {
  port: process.env.PORT || 3001,
  postgresDbUri: process.env.POSTGRES_DB_URI,
  postgresDbUriTest: process.env.POSTGRES_DB_URI_TEST
}

module.exports = { vars }
