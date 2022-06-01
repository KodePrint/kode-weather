const express = require('express')
const passport = require('passport')
const AuthServices = require('../services/auth.services')

const router = express.Router()
const service = new AuthServices()

router.get(
  '/failed',
  (req, res, next) => {
    res.send('You failed to authenticate')
  }
)

router.get(
  '/good',
  (req, res, next) => {
    console.log(req.user)
    res.send('Hello')
  }
)

// GITHUB Login
router.get(
  '/github',
  passport.authenticate('github', { scope: ['user', 'user:email'] })
)

// GITHUB Callback
router.get(
  '/github/callback',
  passport.authenticate('github', {
    session: false,
    successRedirect: '/api/v1/auth/good',
    failureRedirect: '/api/v1/auth/failed'
  }),
  async (req, res, next) => {
    try {
      const { user } = req
      const accessToken = await service.accessToken(user)
      const refreshToken = await service.refreshToken(user)
      res.redirect('http://localhost:3000')
    } catch (error) {
      next(error)
    }
  }
)

// GOOGLE Login
router.get(
  '/google',
  passport.authenticate('google')
)

router.get(
  '/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/api/v1/auth/failed'
  }),
  async (req, res, next) => {
    try {
      const { user } = req
      const accessToken = await service.accessToken(user)
      const refreshToken = await service.refreshToken(user)
      res.redirect('http://localhost:3000')
    } catch (error) {
      next(error)
    }
  }
)

// POST routes

// Local Strategy
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const { user } = req
      const accessToken = await service.accessToken(user)
      const refreshToken = await service.refreshToken(user)
      res.status(200).json(
        { user, accessToken, refreshToken }
      )
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
