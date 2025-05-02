const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// Only admin can access this
router.get('/users', verifyToken, isAdmin, getAllUsers);

module.exports = router;