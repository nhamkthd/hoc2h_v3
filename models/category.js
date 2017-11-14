const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
  parent_id: number,
  name: String,
  decriptions: String,
  order_display: Number
});