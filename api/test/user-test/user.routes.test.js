import request from 'supertest'
import { app, server } from '../../index'

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
      test('should have a content-type: application/json in header',
        async () => {
          const response = await request(app)
            .post('/api/v1/user')
            .send(testUser)
          expect(response.headers['content-type']).toEqual(
            expect.stringContaining('json')
          )
        }
      )
      test('should respon with a json object contining a the new id',
        async () => {
          const response = await request(app)
            .post('/api/v1/user')
            .send(testUser)
          expect(response.body.id).toBeDefined()
        }
      )
      test('shoild respond with a user has hashing a password',
        async () => {
          const response = await request(app)
            .post('/api/v1/user')
            .send(testUser)
          expect(response.body.password).toMatch(testUser.password)
        }
      )
    })
  })

  // Stop Server for test
  afterAll(() => {
    server.close()
  })
}
)
