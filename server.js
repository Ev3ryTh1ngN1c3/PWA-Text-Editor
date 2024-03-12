 // Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Set the port to the environment variable PORT or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the '../client/dist' directory
app.use(express.static('../client/dist'));

// Parse URL-encoded bodies for form data
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies for API requests
app.use(express.json());

// Require and use the HTML routes defined in './routes/htmlRoutes'
require('./server/routes/htmlRoutes')(app);

// Start the server to listen on the specified port & log a message
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

