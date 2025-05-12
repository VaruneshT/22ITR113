const express = require('express');
const NumbersController = require('../controllers/numbersController');
const authMiddleware = require('../middleware/authMiddleware');

const setNumbersRoutes = (app) => {
    const router = express.Router();
    const numbersController = new NumbersController();

    app.use('/numbers', authMiddleware); // Apply middleware to all /numbers routes

    router.get('/:numberid', numbersController.getAverage.bind(numbersController));
    router.post('/', numbersController.addNumber.bind(numbersController));

    app.use('/numbers', router);
};

module.exports = setNumbersRoutes;