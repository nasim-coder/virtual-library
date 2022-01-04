const mongoose = require('mongoose')
const config = require('./dbconfig')

// const CONNECTION_URL = `mongodb://${config.host}:${config.port}/${config.db}`
const CONNECTION_URL = 'mongodb://localhost:27017/virtual_lib';
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => { console.log("mongodb connected"); });

module.exports = CONNECTION_URL;