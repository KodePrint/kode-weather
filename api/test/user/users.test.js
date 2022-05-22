import { app, server, port } from '../../index'
import request from 'supertest'

const userTest = {
  email: 'test@gmail.com',
  password: 'test123',
}


describe('POST /user', () => {


  afterAll(() => {
    server.close()
  })
})