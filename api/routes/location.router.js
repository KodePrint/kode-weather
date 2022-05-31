const express = require('express')
const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const LocationServices = require('../services/location.services')
const { createLocationSchema, getLocationSchema, getLocationsByUser } = require('../schema/location.schema')

const router = express.Router()
const service = new LocationServices()

// GET routes

// All
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getLocationsByUser, 'query'),
  async (req, res, next) => {
    try {
      if (req.query.userId) {
        const location = await service.getByUser(req.query.userId)
        res.status(200).json(location)
      } else {
        const locations = await service.getAll()
        res.status(200).json(locations)
      }
    } catch (error) {
      next(error)
    }
  }
)

// by PK
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getLocationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const location = await service.getOne(id)
      res.status(200).json(location)
    } catch (error) {
      next(error)
    }
  }
)

// POST routes
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createLocationSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req
      const location = await service.create(body)
      res.status(201).json(location)
    } catch (error) {
      next(error)
    }
  }
)

// DELETE Route
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getLocationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const location = await service.delete(id)
      res.status(200).json(location)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
