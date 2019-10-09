const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');


require('dotenv').config();
require('./config/database');
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.on('connected', () => {
    console.log(`MongoDB database connection established successfully on ${connection.host} at ${connection.port}`)
})

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


const housesRouter = require('./routes/api/houses')
const usersRouter = require('./routes/api/users')

app.use('/listings', housesRouter)
app.use('/api/users', usersRouter)

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
})