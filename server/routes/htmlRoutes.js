// Import the path module to work with file paths
const path = require('path');

// Export a function that defines a route handler for the root path '/'
module.exports = (app) => {
  // Handle GET requests to the root path '/'
  app.get('/', (req, res) => {
    // Send the index.html file located in the client/dist directory
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
};