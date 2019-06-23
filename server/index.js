require('dotenv').config()

const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()
const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost:27017/Posts')

nextApp.prepare().then(() => {
  const app = express()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use(cors())

  app.use(express.static('static'))
  app.use('/uploads', express.static('uploads'))

  app.use('/api/posts', require('./routes/index'))
  
  app.get('*', (req, res) => {
    return handle(req, res)
  })
  
  app.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})