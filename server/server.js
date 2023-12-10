// Import the configured Express application from the 'app.js' file
const app = require("./app.js");

// Set the PORT variable to 4000
const PORT = 4000;

// Start the server and listen on the specified PORT
app.listen(PORT, () => {
    // Log a message indicating that the server is listening at the specified PORT
    console.log("Server is listening at PORT 4000");
});




/*  The provided code snippets collectively form the backend structure of a web application using Node.js and Express, with MongoDB as the database. The application follows the MVC (Model-View-Controller) architecture, separating concerns for better organization and maintainability. The app.js file initializes the Express application, establishes a connection to the MongoDB database using Mongoose, and defines routes to handle different HTTP requests. The userController.js file contains logic for creating a new user, and the userModel.js file defines the schema and model for the 'User' collection in the database. The userRoutes.js file sets up routes to handle user-related requests, integrating with the controller functions. Additionally, the db.js file manages the database connection, loading environment variables from a .env file. Finally, the entry point in index.js imports the Express app, sets the server's port to 4000, and starts the server to listen for incoming requests. Overall, this backend structure provides a foundation for creating, managing, and interacting with user data through a RESTful API, ensuring a scalable and maintainable architecture for web development. */