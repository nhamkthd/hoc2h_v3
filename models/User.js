
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = {
  username: String,
  password: String
}

module.exports = mongoose.model('User', Schema);