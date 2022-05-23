const boom = require('@hapi/boom')

const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property]
    const { error } = schema.validate(data, { abortEarly: false })
    if (error) {
      console.log(error.message)
      next(boom.badRequest(error))
    }
    next()
  }
}

module.exports = validatorHandler
