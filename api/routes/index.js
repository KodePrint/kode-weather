const express = require('express')
const userRouter = require('./user.router.js')
const authRouter = require('./auth.router.js')
const locationRouter = require('./location.router')

function routerApi(app) {
  const router = express.Router()
  // Global route
  app.use('/api/v1', router)
  // My Api Routes
  router.use('/user', userRouter)
  router.use('/auth', authRouter)
  router.use('/location', locationRouter)
}

module.exports = routerApi
