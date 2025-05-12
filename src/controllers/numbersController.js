const { fetchNumbers } = require('../services/numberService');

const windowSize = 10;
let numberWindow = [];

async function getNumbers(req, res) {
    const { numberid } = req.params;

    const newNumbers = await fetchNumbers(numberid);
    const uniqueNumbers = [...new Set(newNumbers)];

    const windowPrevState = [...numberWindow];

    // Add new numbers to the window, maintaining the window size
    uniqueNumbers.forEach((num) => {
        if (!numberWindow.includes(num)) {
            if (numberWindow.length >= windowSize) {
                numberWindow.shift(); // Remove the oldest number
            }
            numberWindow.push(num);
        }
    });

    const avg =
        numberWindow.length > 0
            ? (numberWindow.reduce((sum, num) => sum + num, 0) / numberWindow.length).toFixed(2)
            : 0;

    res.json({
        windowPrevState,
        windowCurrState: numberWindow,
        numbers: uniqueNumbers,
        avg: parseFloat(avg),
    });
}

module.exports = { getNumbers };
