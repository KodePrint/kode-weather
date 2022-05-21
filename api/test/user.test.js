const request = require('supertest')
const { app } = require('../index')

test('Get /users', async () => {
  const response = await request(app)
    .get('/api/v1/user')
    .send()
  expect(response.statusCode).toBe(200)
})
