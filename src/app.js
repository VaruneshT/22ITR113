const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

// Routes
const setNumbersRoutes = require('./routes/numbersRoutes');
setNumbersRoutes(app); // Middleware will now validate Authorization header

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;