// Import the express library
const express = require('express');

// Import the 'connectToDB' function from the 'config/db' file
const connectToDB = require("./config/db");

// Create an instance of the Express application
const app = express();

// Parse incoming JSON requests
app.use(express.json());

// Parse incoming URL-encoded requests with extended options
app.use(express.urlencoded({ extended: true }));

// Connect to the database by calling the 'connectToDB' function
connectToDB();

// Import user routes from the 'routes/userRoutes' file
const userRoutes = require("./routes/userRoutes");

// Use the user routes for requests starting with "/"
app.use("/", userRoutes);

// Define a route for handling GET requests to "/"
app.get('/', (req, res) => {
    res.send("Hello Aman");
});

// Define a route for handling GET requests to "/youtube"
app.get('/youtube', (req, res) => {
    res.send("<h1>Welcome to our Youtube channel</h1>");
});

// Define a route for handling GET requests to "/instagram"
app.get('/instagram', (req, res) => {
    // Respond with a JSON object
    res.json({
        success: true,
        message: "Welcome to our Instagram"
    });
});

// Export the configured Express application to be used in other parts of the application
module.exports = app;
