import bcrypt from 'bcryptjs'
import request from 'supertest'
import { app, server } from '../../index'

const hashPassword = (password) => {
  const newPassword = bcrypt.hash(password, 10)
  return newPassword
}

const testUser = {
  email: 'test@email.com',
  password: 'test123/-'
}

describe('Test user routes', () => {
  // GET METHODS
  describe('GET /user', () => {
    test('should respond with array',
      async () => {
        const response = await request(app)
          .get('/api/v1/user')
          .set('Accept', 'application/json')
          .send()
        expect(response.statusCode).toEqual(200)
        expect(response.body).toBeInstanceOf(Array)
      }
    )
  })
  describe('POST /user', () => {
    //
    describe('given a email and password', () => {
      test('should respond with a code status 201',
        async () => {
          const response = await request(app)
            .post('/api/v1/user')
            .send(testUser)
          expect(response.statusCode).toBe(201)
        }
      )
      test('should have a content-type: application/json return object',
        async () => {
          const response = await request(app)
            .post('/api/v1/user')
            .send(testUser)
          expect(response.headers['content-type']).toEqual(
            expect.stringContaining('json')
          )
          expect(response.body.id).toBeDefined()
        }
      )
      test('should respond with a user has hashing a password',
        async () => {
          const response = await request(app)
            .post('/api/v1/user')
            .send(testUser)
          expect(response.body.password).not.toEqual(testUser.password)
        }
      )
    })
  })
  describe('PUT-PATCH /user', () => {

    test('should update a user and respond with object',
        async () => {
          const response = await request(app)
            .put('/api/v1/user/1')
            .send({
              email: 'another@gmail.com',
              password: 'anotherPass123/-'
            })
          expect(response.statusCode).toBe(200)
          expect(response.headers['content-type']).toEqual(
            expect.stringContaining('json')
          )
          expect(response.body.id).toBeDefined()
          expect(response.body.email).not.toEqual(testUser.email)
          expect(response.body.password).not.toEqual(hashPassword('anotherPass123/-'))
        }
      )
  })

  // Stop Server for test
  afterAll(() => {
    server.close()
  })
}
)
