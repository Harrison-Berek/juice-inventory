const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const itemSchema = new Schema({
    name: { type: String, required: true },
    discption: String ,
    price: { type: Number, required: true, default: 0 },
    cost: { type: Number, required: true, default: 0 },
    sku: String,
    qty: { type: Number, default: 0 },
    category: categotySchema,
    vender: venderSchema
  }, {
    timestamps: true
  });
  
  module.exports = itemSchema;