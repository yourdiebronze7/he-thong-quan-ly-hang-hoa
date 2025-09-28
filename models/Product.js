const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  transportHistory: [{
    location: String,
    date: Date
  }],
  details: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
