const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  shippingInfo: String,
  customerCode: String,
  invoiceEmail: String,
  phoneNumber: String,
  rate: Number,
  productId: String,
});

module.exports = mongoose.model('Review', reviewSchema);

