// controllers/adoptionController.js

const Adoption = require('../models/Adoption');

// POST - Submit an adoption request
exports.submitAdoptionRequest = async (req, res) => {
  try {
    const { name, email, phone, address, petId } = req.body;

    const newRequest = new Adoption({
      name,
      email,
      phone,
      address,
      petId,
    });

    await newRequest.save();
    res.status(201).json({ message: 'Adoption request submitted successfully' });
  } catch (err) {
    console.error('Error submitting adoption request:', err);
    res.status(500).json({ message: 'Server error while submitting request' });
  }
};

// GET - View all adoption requests (optional, admin use)
exports.getAllAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.find().populate('petId');
    res.status(200).json(adoptions);
  } catch (err) {
    console.error('Error fetching adoptions:', err);
    res.status(500).json({ message: 'Server error while fetching adoptions' });
  }
};