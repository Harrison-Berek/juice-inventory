const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const categorySchema = require('./category');
const venderSchema = require('./vender');


const itemSchema = new Schema({
    name: { type: String, required: true },
    description: String ,
    price: { type: Number, required: true, default: 0 },
    cost: { type: Number, required: true, default: 0 },
    sku: String,
    qty: { type: Number, default: 0 },
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    // vender: venderSchema
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Item', itemSchema);