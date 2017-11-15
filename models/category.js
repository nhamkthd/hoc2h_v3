const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
  parent_id: Number,
  name: String,
  decriptions: String,
  order_display: Number
});
module.export = mongoose.model('Category',Category);