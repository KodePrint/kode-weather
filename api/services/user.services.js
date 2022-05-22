import bcrypt from 'bcryptjs'
import boom from '@hapi/boom'

export class UserServices {
  // Has Password
  hashPassword(password) {
    const newPassword = bcrypt.hash(password, 10)
    return newPassword
  }

  // GET ALL Users
  async getAll() {
    const users = [
      {
        email: 'uno@gmail.com',
        name: 'Hola'
      },
      {
        email: 'maria@gmail.com',
        name: 'Maria'
      }
    ]
    return users
  }

  // CREATE One User
  async create(body) {
    body.password = await this.hashPassword(body.password)
    const newUser = {
      id: 53,
      ...body
    }
    const user = await newUser
    if (!user) {
      throw boom.badRequest()
    }
    return user
  }
}
