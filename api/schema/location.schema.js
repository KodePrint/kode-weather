const Joi = require('joi')

// Location schema vars types
const id = Joi.number()
const latitude = Joi.string()
const longitude = Joi.string()
const city = Joi.string()
const country = Joi.string()
const userId = Joi.number()

// Create Location Scheme
const createLocationSchema = Joi.object({
  city: city.required(),
  country: country.required(),
  latitude: latitude.optional(),
  longitude: longitude.optional(),
  userId: userId.required()
})

// Update Location Scheme
const updateLocationSchema = Joi.object({
  city: city.optional(),
  country: country.optional(),
  latitude: latitude.optional(),
  longitude: longitude.optional()
})

// Get Location Scheme
const getLocationSchema = Joi.object({
  id: id.required()
})

const getLocationsByUser = Joi.object({
  userId: userId.optional()
})

module.exports = { createLocationSchema, updateLocationSchema, getLocationSchema, getLocationsByUser }
