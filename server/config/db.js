// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import the Mongoose library
const mongoose = require("mongoose");

// Define a function named 'connectToDB' to establish a connection to the MongoDB database
const connectToDB = async () => {
    // Use Mongoose to connect to the MongoDB database using the provided URI from the environment variables
    mongoose.connect(process.env.MONGO_URI)
        .then((conn) => {
            // If the connection is successful, log a message indicating that the database is connected
            console.log(('DB Connected'));
        })
        .catch((err) => {
            // If an error occurs during the connection, log the error details
            console.log(err);
        });
};

// Export the 'connectToDB' function to make it available for use in other parts of the application
module.exports = connectToDB;
