const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required...'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required...'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    // Adding an enum limits the possible options
    enum: {
      values: ['ikea', 'marcos', 'liddy', 'caressa'],
      message: '{VALUE} is not supported!',
    },
  },
});

module.exports = mongoose.model('Product', productSchema);
