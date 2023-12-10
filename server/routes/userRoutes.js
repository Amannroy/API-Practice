// Import the express library
const express = require("express");

// Import the 'createUser' controller function from the userController file
const { createUser } = require("../controllers/userController");

// Create an instance of an Express Router
const router = express.Router();

// Define a route for handling POST requests to "/createuser"
// When a POST request is made to this route, execute the 'createUser' controller function
router.post("/createuser", createUser);

// Export the router to be used in other parts of the application
module.exports = router;
