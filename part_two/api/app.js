const express = require('express')
const cors = require('cors')
const compression = require('compression')
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet')

const app = express()

// Middleware
app.use(helmet())
app.use(compression())
app.use(xss())
app.use(mongoSanitize())
app.use(express.json())
app.use(cors())

// Test server running
app.get('/test', (_, res) => res.status(200).send('Hello world'))

// Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/forms', require('./routes/forms'))
app.use('/api/questions', require('./routes/questions'))
app.use('/api/responses', require('./routes/responses'))
app.use('/api/options', require('./routes/options'))

module.exports = app
