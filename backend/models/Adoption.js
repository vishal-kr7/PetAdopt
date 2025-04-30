// models/Adoption.js
const mongoose = require('mongoose');

const adoptionSchema = new mongoose.Schema({
  pet: {
    type: String,
    
    required: true
  },
  adopterName: {
    type: String,
    required: true
  },
  adopterEmail: {
    type: String,
    required: true
  },
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Adoption', adoptionSchema);