const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
  recommend: { type: Boolean, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
