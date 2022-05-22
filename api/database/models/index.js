import { UserSchema, User } from './user.model'

export function setUpModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))

  // Asociations
}
