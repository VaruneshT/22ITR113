const express = require('express');
const bodyParser = require('body-parser');
const { setNumbersRoutes } = require('./routes/numbersRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

setNumbersRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});