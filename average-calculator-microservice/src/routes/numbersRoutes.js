const express = require('express');
const NumbersController = require('../controllers/numbersController');

const setNumbersRoutes = (app) => {
    const router = express.Router();
    const numbersController = new NumbersController();

    router.get('/:numberid', numbersController.getAverage.bind(numbersController));
    router.post('/', numbersController.addNumber.bind(numbersController));

    app.use('/numbers', router);
};

module.exports = setNumbersRoutes;