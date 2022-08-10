const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

// Setup
const app = express()
const port =  process.env.PORT | 5000
app.use(cors())
app.use(express.json())

// MongoDB Connection
const uri = process.env.MONGO_URI
mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection
connection.once('open', () => {
  console.log('~~~ Mongoose Connected ~~~')
})

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Custom Routes
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

// Start Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})