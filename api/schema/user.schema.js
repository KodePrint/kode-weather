const Joi = require('joi')

// user schema vars types
const id = Joi.number()
const email = Joi.string().email()
const name = Joi.string()
const image = Joi.string()
const password = Joi.string()
const isLocal = Joi.boolean()
const isActive = Joi.boolean()
const isAdmin = Joi.boolean()

// Create User Scheme
const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  name: name.optional(),
  image: image.optional(),
  isLocal: isLocal.required()
})

// Update User Scheme
const updateUserSchema = Joi.object({
  email: email.optional(),
  password: password.optional(),
  name: name.optional(),
  image: image.optional(),
  isActive: isActive.optional(),
  isAdmin: isAdmin.optional()
})

// Get User Scheme
const getUserSchema = Joi.object({
  id: id.required()
})
const getByEmailUserSchema = Joi.object({
  email: email.optional()
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema, getByEmailUserSchema }
