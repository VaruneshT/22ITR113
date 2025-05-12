const axios = require('axios');

async function fetchNumbers(numberid) {
    try {
        const response = await axios.get(`http://third-party-server/${numberid}`, { timeout: 500 });
        return response.data.numbers || [];
    } catch (error) {
        return []; // Ignore errors or timeouts
    }
}

module.exports = { fetchNumbers };
