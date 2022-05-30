const { Strategy, ExtractJwt } = require('passport-jwt')
// const boom = require('@hapi/boom')
// const JwtStrategy = require('passport-jwt/lib/strategy')

const { vars } = require('../../../configurations/vars.config')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: vars.jwtSecret
}

const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload)
})

module.exports = JwtStrategy
