import ValidatorError from 'sequelize'

function logErrors(err, req, res, next) {
  next(err)
}

function errorHandler(err, req, res, next) {
  const statusCode = err.output.statusCode || 500
  res.status(statusCode).json({
    errorName: err.name,
    message: err.message,
    stack: err.stack
  })
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err
    return res.status(output.statusCode).json(output)
  }
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidatorError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    })
  }
  next(err)
}

export { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }
