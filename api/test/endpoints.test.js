const request = require('supertest')
const { server } = require('../index')

describe('verify the user endpoints', () => {
  test('Get /users', async () => {
    const response = await request(server)
      .get('/api/v1/user')
      .expect('Content-Type', /application\/json/)
      .send()
    expect(response.statusCode).toBe(200)
  })

  afterAll(() => {
    server.close()
  })
})
