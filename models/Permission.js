const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Permission = new Schema({
    permission_id:Number,
    name: String,
    description:String
});
module.export = mongoose.module('Permission',Permission);