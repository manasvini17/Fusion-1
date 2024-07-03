// Import the express module
const express = require('express');
const fs = require('fs')

// Create an instance of an Express application
const app = express();

// Define the port the server will listen on
const port = 5000;

// Define a route handler for the root path
app.get('/', (req, res) => {
  let index = fs.readFileSync("index.html","utf8")
  res.send(index);
});

// Start the server and have it listen on the specified port
app.listen(port, () => {
  console.log('Server is running on http://localhost:${port}');
});
