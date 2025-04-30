// controllers/petController.js

const Pet = require('../models/Pet');

// GET all pets
exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (err) {
    console.error('Error fetching pets:', err);
    res.status(500).json({ message: 'Server error while fetching pets' });
  }
};

// GET pet by ID
exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.status(200).json(pet);
  } catch (err) {
    console.error('Error fetching pet:', err);
    res.status(500).json({ message: 'Server error while fetching pet' });
  }
};

// (Optional) Add new pet - useful for admin
exports.addPet = async (req, res) => {
  try {
    const { name, age, breed, description, image } = req.body;

    const newPet = new Pet({
      name,
      age,
      breed,
      description,
      image,
    });

    await newPet.save();
    res.status(201).json({ message: 'Pet added successfully', pet: newPet });
  } catch (err) {
    console.error('Error adding pet:', err);
    res.status(500).json({ message: 'Server error while adding pet' });
  }
};