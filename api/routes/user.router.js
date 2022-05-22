import express from 'express'
import { createUserSchema, getUserSchema, updateUserSchema } from '../schema/user.schema.js'
import { validatorHandler } from '../middlewares/validator.handler.js'
import { UserServices } from '../services/user.services.js'

// Create a router
const router = express.Router()
// create a service
const service = new UserServices()

// GET routes
router.get(
  '/',
  async (req, res, next) => {
    try {
      const users = await service.getAll()
      res.status(200).json(users)
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

export default router
