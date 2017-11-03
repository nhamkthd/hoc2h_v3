
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = {
  username: String,
  email:String,
  password: String,
  state:Number,
  provider_id:Number,
  provider_name:String,
  code:String,
  role: Number,
  profile: {
  	full_name:String,
  	job:String,
  	local:String,
  	phone:Number,
  	birthday:Date,
  	avatar:String,
  	coins:Number,
  	reputations:Number,
  	introduction:String
  }

}

module.exports = mongoose.model('User', Schema);