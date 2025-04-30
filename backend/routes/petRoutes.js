const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

// Get pet details by pet name (
router.get('/api/pet/:petName', async (req, res) => {
  try {
    const pet = await Pet.findOne({ name: req.params.petName });
    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ message: 'Pet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});



// GET all pets
router.get('/', async (req, res) => {
  
    const pets = await Pet.find();
    res.json(pets);
  
});

// POST create a new pet
router.post('/', async (req, res) => {
  const { name, breed, age, description, image } = req.body;
  const pet = new Pet({ name, breed, age, description, image });

  try {
    const newPet = await pet.save();
    res.status(201).json(newPet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET single pet by ID
router.get('/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json(pet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;