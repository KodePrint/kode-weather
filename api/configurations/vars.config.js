require('dotenv').config()

const vars = {
  // Server Port
  port: process.env.PORT || 3001,
  isProd: process.env.Node_Env === 'production',
  // Database Connection
  postgresDbUri: process.env.POSTGRES_DB_URI,
  postgresDbUriTest: process.env.POSTGRES_DB_URI_TEST
}

module.exports = { vars }
