const mongoose = require('mongoose')
const config = require('./dbconfig')

// const CONNECTION_URL = `mongodb://${config.host}:${config.port}/${config.db}`
const CONNECTION_URL = 'mongodb://localhost:27017/virtual_lib';

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, ()=>{ console.log("mongodb connected"); });

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully')
})

mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected')
})

mongoose.connection.on('error', error => {
  console.log('Mongo connection has an error', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})

module.exports = {CONNECTION_URL};