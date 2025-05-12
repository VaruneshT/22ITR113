const express = require('express');
const router = express.Router();
const config = require('../config/config');
const numberService = require('../services/numberService');

router.get('/:numberid', async (req, res) => {
  const { numberid } = req.params;

  if (!config.validNumberIds.includes(numberid)) {
    return res.status(400).json({ error: 'Invalid number ID. Must be p, f, e, or r.' });
  }

  try {
    const response = await numberService.getNumbersResponse(numberid);
    res.json(response);
  } catch (error) {
    console.error(`Error processing request for ${numberid}:`, error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;