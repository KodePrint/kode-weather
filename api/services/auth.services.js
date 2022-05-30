const jwt = require('jsonwebtoken')

const { vars } = require('../configurations/vars.config')

// TOKENS CREATION CLASS
class AuthServices {

  // Payload
  async payload(user) {
    const payload = {
      id: user.id,
      email: user.email,
      iat: new Date().getTime()
    }
    return payload
  }

  // ACCESS TOKEN
  async accessToken(user) {
    const payload = await this.payload(user)
    const accessToken = jwt.sign(payload, vars.jwtSecret, { expiresIn: '900' })
    return accessToken
  }

  // REFRESH TOKEN
  async refreshToken(user) {
    const payload = await this.payload(user)
    const refreshToken = jwt.sign(payload, vars.jwtSecret, { expiresIn: '7200' })
    return refreshToken
  }

  // PASSWORD TOKEN
}

module.exports = AuthServices
