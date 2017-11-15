const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Test = new Schema({
  user_id: String,
  title: String,
  category_id: String,
  times:number,
  number_of_question:Number,
  description:String,
  state:Number,
  level:Number,
  created_at:{type:Date,default:Date.now},
  order_display: Number,
  comments:[{comment_test_id:String}],
  questions:[{question_id:String}],
  user_test:[{
    user_test_id:String,
  }]
});
module.exports = mongoose.model('Test', Test);
