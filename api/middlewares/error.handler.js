const { ValidatorError } = require('sequelize')

const logErrors = (err, req, res, next) => {
  next(err)
}

const errorHandler = (err, req, res, next) => {
  const statusCode = err.output.statusCode || 500
  res.status(statusCode).json({
    errorName: err.name,
    message: err.message,
    stack: err.stack
  })
}

const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err
    return res.status(output.statusCode).json(output)
  }
}

const ormErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidatorError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    })
  }
  next(err)
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }
