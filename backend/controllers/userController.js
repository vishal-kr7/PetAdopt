// controllers/userController.js

const getAllUsers = (req, res) => {
    // Example static response
    res.json([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" }
    ]);
  };
  
  module.exports = { getAllUsers };
  