const express = require('express')
const userRouter = require('./user.router.js')

function routerApi(app) {
  const router = express.Router()
  // Global route
  app.use('/api/v1', router)
  // My Api Routes
  router.use('/user', userRouter)
}

module.exports = routerApi
