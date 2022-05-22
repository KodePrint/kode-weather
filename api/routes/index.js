import express from 'express'
import userRouter from './user.router.js'

export function routeApi(app) {
  const router = express.Router()
  // Global route
  app.use('/api/v1', router)
  // My Api Routes
  router.use('/user', userRouter)
}