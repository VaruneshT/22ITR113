const express = require('express');
const numbersRouter = require('./routes/numbers');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mount routes
app.use('/numbers', numbersRouter);

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;