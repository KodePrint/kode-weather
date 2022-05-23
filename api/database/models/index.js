const { UserSchema, User } = require('./user.model')
const { LocationSchema, Location } = require('./location.model')

function setUpModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Location.init(LocationSchema, Location.config(sequelize))

  // Asociations
  User.associate(sequelize.models)
  Location.associate(sequelize.models)
}

module.exports = setUpModels
