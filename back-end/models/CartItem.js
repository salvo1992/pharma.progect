// models/CartItem.js

const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  asin: String,
  title: String,
  img: String,
  price: Number,
  category: String,
  Text: String,
  TextL: String,
  availability: String,
  purchased: { type: Boolean, default: false } // Aggiunto il campo purchased
});

module.exports = mongoose.model('CartItem', cartItemSchema);
