const MyApp = require('../server/index.js')
const request = require('supertest')

describe('Tests for index.js', () => {
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {})
  })

  it('Base path call', async () => {
    const response = await request(MyApp).get('/')

    expect(response.statusCode).toBe(200)
  })

  it('Testing route /update', async () => {
    const response = await request(MyApp).get('/update')

    expect(response.statusCode).toBe(200)
    expect(response.body.change).toBe('This was a called update from Express.js')
  })

  it('Bad Request', async () => {
    const response = await request(MyApp).get('/bad')

    expect(response.statusCode).toBe(404)
  })
})