const express = require('express');
const bodyParser = require('body-parser');
const setNumbersRoutes = require('./routes/numbersRoutes');

const app = express();
const PORT = process.env.PORT || 9876;

app.use(bodyParser.json());

setNumbersRoutes(app); // Middleware will now validate Authorization header

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});