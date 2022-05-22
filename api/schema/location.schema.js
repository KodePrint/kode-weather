import Joi from 'joi'

// Location schema vars types
const id = Joi.number()
const latitude = Joi.number()
const longitude = Joi.number()
const city = Joi.string()
const country = Joi.string()
const userId = Joi.number()

// Create Location Scheme
const createLocationSchema = {
  city: city.required(),
  country: country.required(),
  latitude: latitude.optional(),
  longitude: longitude.optional(),
  userId: userId.required()
}

// Update Location Scheme
const updateLocationSchema = {
  city: city.optional(),
  country: country.optional(),
  latitude: latitude.optional(),
  longitude: longitude.optional()
}

// Get Location Scheme
const getLocationSchema = {
  id: id.required()
}

export { createLocationSchema, updateLocationSchema, getLocationSchema }
