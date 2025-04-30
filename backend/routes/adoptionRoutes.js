// routes/adoptionRoutes.js
const express = require('express');
const router = express.Router();
const Adoption = require('../models/Adoption');

// POST Adoption (create adoption request)
router.post('/', async (req, res) => {
    console.log(`Received Post request at /api/adoptions`);
    console.log(`Request body:`, req.body);
    const { pet, adopterName, adopterEmail, message } = req.body;

    try {
    const newAdoption = new Adoption({
      pet,
      adopterName,
      adopterEmail,
      message,
    });

    const savedAdoption = await newAdoption.save();
    res.status(201).json(savedAdoption);
  } catch (error) {
    console.error('Error saving Adoption', error.message);
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;