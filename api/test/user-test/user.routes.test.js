const bcrypt = require('bcryptjs')
const request = require('supertest')
const { app, server } = require('../../index')
const UserServices = require('../../services/user.services')

const service = new UserServices()

const hashPassword = (password) => {
  const newPassword = bcrypt.hash(password, 10)
  return newPassword
}

const testUser = {
  email: 'test@email.com',
  password: 'test123/-'
}

describe('USER TEST ROUTES', () => {
  test('GET /user --> should return a array of users',
    async () => {
      const response = await request(app)
        .get('/api/v1/user')
        .set('Accept', 'application/json')
      expect(response.statusCode).toBe(200)
      expect(response.body).toBeInstanceOf(Array)
      // expect(response.body.map(user => user.password)).not.toBeDefined()
    }
  )

  test('POST /user --> should return a user',
    async () => {
      const response = await request(app)
        .post('/api/v1/user')
        .set('Accept', 'application/json')
        .send(testUser)
      expect(response.statusCode).toBe(201)
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      )
      expect(response.body.id).toBeDefined()
      expect(response.body.password).not.toBeDefined()
      expect(response.body.password).not.toEqual(testUser.password)
    }
  )

  test('POST /user --> should return a error 409 because email or unique prop exists',
    async () => {
      const response = await request(app)
        .post('/api/v1/user')
        .set('Accept', 'application/json')
        .send(testUser)
      expect(response.statusCode).toBe(409)
      expect(response.body.errors.type).toEqual('unique violation')
    }
  )

  test('DELETE /user --> should return a status 200 with message',
    async () => {
      const user = await service.getByEmail(testUser.email)
      const response = await request(app)
        .delete(`/api/v1/user/${user.id}`)
        .send()
      expect(response.statusCode).toBe(200)
      expect(response.body.message).toBeDefined()
    }
  )

  // GET METHODS
  // describe('GET /user', () => {
  //   test('should respond with array',
  //     async () => {
  //       const response = await request(app)
  //         .get('/api/v1/user')
  //         .set('Accept', 'application/json')
  //         .send()
  //       expect(response.statusCode).toEqual(200)
  //       expect(response.body).toBeInstanceOf(Array)
  //     }
  //   )
  // })
  // describe('POST /user', () => {

  //   describe('given a email and password', () => {
  //     test('should respond with a code status 201',
  //       async () => {
  //         const response = await request(app)
  //           .post('/api/v1/user')
  //           .send(testUser)
  //         expect(response.statusCode).toBe(201)
  //       }
  //     )
  //     test('should have a content-type: application/json return object',
  //       async () => {
  //         const response = await request(app)
  //           .post('/api/v1/user')
  //           .send(testUser)
  //         expect(response.headers['content-type']).toEqual(
  //           expect.stringContaining('json')
  //         )
  //         expect(response.body.id).toBeDefined()
  //       }
  //     )
  //     test('should respond with a user has hashing a password',
  //       async () => {
  //         const response = await request(app)
  //           .post('/api/v1/user')
  //           .send(testUser)
  //         expect(response.body.password).not.toEqual(testUser.password)
  //       }
  //     )
  //   })
  // })
  // describe('PUT-PATCH /user', () => {

  //   test('should update a user and respond with object',
  //     async () => {
  //       const response = await request(app)
  //         .put('/api/v1/user/1')
  //         .send({
  //           email: 'another@gmail.com',
  //           password: 'anotherPass123/-'
  //         })
  //       expect(response.statusCode).toBe(200)
  //       expect(response.headers['content-type']).toEqual(
  //         expect.stringContaining('json')
  //       )
  //       expect(response.body.id).toBeDefined()
  //       expect(response.body.email).not.toEqual(testUser.email)
  //       expect(response.body.password).not.toEqual(hashPassword('anotherPass123/-'))
  //     }
  //   )
  // })

  // Stop Server for test
  afterAll(() => {
    server.close()
  })
})
