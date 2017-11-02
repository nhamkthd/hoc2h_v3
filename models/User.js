
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = {
  user_name: String,
  email:String,
  password: String,
  state:Number,
  provider_id:Number,
  provider_name:String,
  code:String,
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