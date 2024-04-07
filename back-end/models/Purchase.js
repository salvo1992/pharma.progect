const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  asin: { type: String, required: true },
  title: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  text: { type: String, required: true },
  textL: { type: String, required: true },
  availability: { type: String, required: true }
}, { timestamps: true }); // timestamps: true per includere automaticamente createdAt e updatedAt

module.exports = mongoose.model('Purchase', purchaseSchema); // 'Purchase' dovrebbe essere il nome del modello, non 'PurchaseModels'
