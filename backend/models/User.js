const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Enforce uniqueness
  },
  email: {
    type: String,
    required: true,
    unique: true, // Enforce uniqueness
    match: [/.+\@.+\..+/, 'Please enter a valid email address'], // Email validation
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Password must be at least 6 characters long
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;