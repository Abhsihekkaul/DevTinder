const express = require('express'); // Importing the Express library
const app = express(); // Creating an instance of the Express application

// Define a route for the /user endpoint using the GET method
app.get('/user', (req, res) => {
    res.send("Welcome to the User page!"); // Send a response for GET requests to /user
});

// Define a route for the /greet endpoint using the POST method
app.post('/greet', (req, res) => {
    res.send("Hello from India and Abhishek! Nice to meet you!"); // Send a response for POST requests to /greet
});

// Define a route for the /delete endpoint using the DELETE method
app.delete('/delete', (req, res) => {
    res.send("User deleted successfully!"); // Send a response for DELETE requests to /delete
});

// Middleware to handle requests to /special
app.use('/special', (req, res) => {
    res.send("You have reached the special page!"); // Send a response for any request to /special
});

// Middleware to handle all other unmatched routes
app.use('/', (req, res) => {
    res.send("Welcome to the homepage!"); // Send a default response for unmatched routes
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
