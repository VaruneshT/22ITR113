const axios = require('axios');
const config = require('../config/config');

let numberWindow = [];

const fetchNumbers = async (numberId) => {
  const url = config.apiEndpoints[numberId];
  try {
    const response = await axios.get(url, { timeout: config.timeoutMs });
    return response.data.numbers || [];
  } catch (error) {
    console.error(`Error fetching numbers for ${numberId}:`, error.message);
    return [];
  }
};

const updateNumberWindow = (newNumbers) => {
  const prevState = [...numberWindow];
  
  // Remove duplicates by combining existing and new numbers into a Set
  const uniqueNumbers = [...new Set([...numberWindow, ...newNumbers])];
  
  // If window size is exceeded, keep only the latest numbers up to windowSize
  numberWindow = uniqueNumbers.slice(-config.windowSize);
  
  return prevState;
};

const calculateAverage = () => {
  if (numberWindow.length === 0) return 0;
  const sum = numberWindow.reduce((acc, num) => acc + num, 0);
  return parseFloat((sum / numberWindow.length).toFixed(2));
};

const getNumbersResponse = async (numberId) => {
  const numbers = await fetchNumbers(numberId);
  const windowPrevState = updateNumberWindow(numbers);
  const windowCurrState = [...numberWindow];
  const avg = calculateAverage();

  return {
    windowPrevState,
    windowCurrState,
    numbers,
    avg
  };
};

module.exports = { getNumbersResponse };