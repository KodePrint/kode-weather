import bcrypt from 'bcryptjs'
import boom from '@hapi/boom'


const testUsers = [
  {
    id: 53,
    email: 'uno@gmail.com',
    name: 'Hola'
  },
  {
    id: 1,
    email: 'maria@gmail.com',
    name: 'Maria'
  }
]

export class UserServices {
  // Has Password
  hashPassword(password) {
    const newPassword = bcrypt.hash(password, 10)
    return newPassword
  }

  // GET ALL Users
  async getAll() {
    return testUsers
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

  // Update One User
  async update(id, body) {
    const index = testUsers.findIndex(
      user => user.id == id
    )
    if (index === -1) {
      throw boom.notFound()
    }
    const oldUser = testUsers[index]
    if (body.password) {
      body.password = await this.hashPassword(body.password)
    }
    const updateUser = {
      id,
      ...body
    }
    return updateUser
  }
}
