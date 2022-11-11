const MyApp = require('../server/index.js')
const request = require('supertest')(MyApp)

describe.skip('Tests for index.js', () => {
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(jest.fn())
  })

  it('Connecting to Base Address', async () => {
    const response = await request.get('/')

    expect(response.statusCode).toBe(200)
  })

  it('Call /update path', async () => {
    const response = await request.get('/update')

    expect(response.body.change).toBe('This was a called update from Express.js')
    expect(response.statusCode).toBe(200)
  })

  it('Path does not exist', async () => {
    return request.get('/sansundertale')
      .expect(404)
  })
})