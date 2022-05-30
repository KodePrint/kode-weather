const express = require('express')
const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
// const UserServices = require('../services/user.services')
const { createLocationSchema, getLocationSchema } = require('../schema/location.schema')

const router = express.Router()
// const service = new UserServices()

// GET routes

// All
router.get(
  '/',
  async (req, res, next) => {
    try {
      res.status(200).json([{ location: 1 }, { location: 2 }])
    } catch (error) {
      next(error)
    }
  }
)

// by PK
router.get(
  '/:id',
  validatorHandler(getLocationSchema, 'query'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      res.status(200).json({ location: id })
    } catch (error) {
      next(error)
    }
  }
)

// POST routes
router.post(
  '/',
  validatorHandler(createLocationSchema, 'body'),
  async (req, res, next) => {
    try {
      res.status(201).json(req.body)
    } catch (error) {
      next(error)
    }
  }
)

// DELETE Route
router.delete(
  '/:id',
  validatorHandler(getLocationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      res.status(200).json(`Location is Delete with id: ${id}`)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
