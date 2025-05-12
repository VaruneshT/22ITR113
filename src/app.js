const express = require('express');
const setNumbersRoutes = require('./routes/numbersRoutes');

const app = express();
const PORT = 9876;

setNumbersRoutes(app); // Middleware will now validate Authorization header

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;