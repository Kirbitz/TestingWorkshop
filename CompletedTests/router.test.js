import router from '../server/router.js'
const MyApp = require('../server/index.js')

const request = require('supertest')(MyApp)

describe('Tests for router.js', () => {
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {})
    jest.spyOn(router, 'MoodFunction')
      .mockImplementation((inputValue) => {
        if (inputValue === 'mocking') {
          return { mood: 'mocking' }
        } else {
          return { mood: 'sad' }
        }
      })
  })

  it('Initial Call to /fun', async () => { 
    const response = await request.post('/fun').send({ inputValue: 'mocking' })

    expect(response.statusCode).toEqual(200)
    expect(response.body.mood).toEqual('mocking')
  })

  it('Call to /fun with inputValue equal to happy', async () => {
    const response = await request.post('/fun').send({ inputValue: 'happy' })

    expect(response.statusCode).toEqual(200)
    expect(response.body.mood).toEqual('sad')
  })

  it('Call to /fun without body', async () => {
    const response = await request.post('/fun').send()

    expect(response.statusCode).toEqual(400)
    expect(response.body.error).toEqual('Please pass a value to the input field')
  })
})