const express = require('express')
// const passport = require('passport')
const validatorHandler = require('../middlewares/validator.handler')
const UserServices = require('../services/user.services')
const { createUserSchema, getUserSchema, updateUserSchema, getByEmailUserSchema } = require('../schema/user.schema')

const router = express.Router()
const service = new UserServices()

// GET routes

// All
router.get(
  '/',
  validatorHandler(getByEmailUserSchema, 'query'),
  async (req, res, next) => {
    try {
      if (req.query.email) {
        const user = await service.getByEmail(req.query.email)
        delete user.dataValues.password
        res.status(200).json(user)
      } else {
        const users = await service.getAll()
        res.status(200).json(users)
      }
    } catch (error) {
      next(error)
    }
  }
)

// by PK
router.get(
  '/:id',
  validatorHandler(getByEmailUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const user = await service.getOne(id)
      delete user.dataValues.password
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }
)

// POST routes
router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req
      const user = await service.create(body)
      res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  }
)

// PUT routes
router.put(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const { body } = req
      const user = await service.update(id, body)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }
)

// PATCH routes
router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const { body } = req
      const user = await service.update(id, body)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }
)

// DELETE Route
router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const user = await service.delete(id)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
