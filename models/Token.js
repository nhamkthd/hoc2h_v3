const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Token = new Schema({
  user_id: String,
  token: String
});

module.exports = mongoose.model('Token', Token);