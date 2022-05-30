const { Strategy } = require('passport-google-oauth20')

const UserServices = require('../../../services/user.services')

const { vars } = require('../../../configurations/vars.config')
const service = new UserServices()

const GooglePassportStrategy = new Strategy(
  {
    clientID: vars.googleClientID,
    clientSecret: vars.googleClientSecret,
    callbackURL: 'http://localhost:3001/api/v1/auth/google/callback',
    scope: ['profile', 'email']
  },

  async (accessToken, refreshToken, profile, done) => {
    const user = await service.createBySocial(profile)
    return done(null, user)
  }
)

module.exports = GooglePassportStrategy
