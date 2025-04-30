const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');  // Assuming you have a User model

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    // Redirect or send a response indicating successful signup
    res.status(201).json({ message: 'User created successfully, please log in.' });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;