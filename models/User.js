const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  email: String,
  password: String,
  state: Number,
  provider_id: Number,
  provider_name: String,
  code: String,
  role: Number,
  profile: {
    full_name: String,
    job: String,
    local: String,
    phone: Number,
    birthday: Date,
    avatar: String,
    coins: Number,
    reputations: Number,
    introduction: String
  }

});

User.methods.signJwt = function (id) {
  return jwt.sign({
    user: id
  }, process.env.JWT_SECRET_KEY);
}

User.methods.hashSync = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

User.methods.compareSync = function (password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', User);