const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('dotenv').config()
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.on('connected', () => {
    console.log(`MongoDB database connection established successfully on ${connection.host} at ${connection.port}`)
})

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))


const housesRouter = require('./routes/houses')
const usersRouter = require('./routes/users')

app.use('/listings', housesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})