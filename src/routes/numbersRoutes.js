const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { getNumbers } = require('../controllers/numbersController');
const validateNumberId = require('../middleware/validateNumberId');

const router = express.Router();

function setNumbersRoutes(app) {
    app.use('/numbers', authMiddleware); // Apply middleware to all /numbers routes

    router.get('/', (req, res) => {
        res.send('Get all numbers');
    });

    router.post('/', (req, res) => {
        res.send('Add a number');
    });

    router.get('/numbers/:numberid', validateNumberId, getNumbers);

    app.use('/numbers', router);
}

module.exports = setNumbersRoutes;