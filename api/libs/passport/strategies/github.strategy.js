const { Strategy } = require('passport-github2')
// const boom = require('@hapi/boom')
const UserServices = require('../../../services/user.services')

const { vars } = require('../../../configurations/vars.config')
const service = new UserServices()

const GithubPassportStrategy = new Strategy(
  {
    clientID: vars.githubClientID,
    clientSecret: vars.githubClientSecret,
    callbackURL: 'http://localhost:3001/api/v1/auth/github/callback',
    scope: ['user:email']
  },

  async (accessToken, refreshToken, profile, done) => {
    const user = await service.createBySocial(profile)
    return done(null, user)
  }
)

module.exports = GithubPassportStrategy
