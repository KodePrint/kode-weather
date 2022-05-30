require('dotenv').config()

const vars = {
  // Server Port
  port: process.env.PORT || 3001,
  isProd: process.env.Node_Env === 'production',
  // APP Envs
  jwtSecret: process.env.JWT_SECRET,
  // Github
  githubClientID: process.env.GITHUB_CLIENT_ID,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRETS,
  // Google
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRETS,
  // Database Connection
  postgresDbUri: process.env.POSTGRES_DB_URI,
  postgresDbUriTest: process.env.POSTGRES_DB_URI_TEST
}

module.exports = { vars }
