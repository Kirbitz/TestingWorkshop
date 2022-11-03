const Express = require('express')

const app = new Express()

// Logs all request made to the server
app.use((req, response, next) => {
  console.log(`${req.method} at ${req.path}`)
  next()
})

app.get('/update', (req, res) => {
  res.status(200).json(
    {
      change: 'This was a called update from Express.js'
    }
  )
})

app.use(Express.static('public'))

module.exports = app
