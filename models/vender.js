const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const venderSchema = new Schema({
    name: { type: String, require: true },
    contactName: String,
    email: String,
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Vender', venderSchema);