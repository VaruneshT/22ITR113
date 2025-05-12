function validateNumberId(req, res, next) {
    const validIds = ['p', 'f', 'e', 'r'];
    const { numberid } = req.params;

    if (!validIds.includes(numberid)) {
        return res.status(400).json({ message: 'Invalid number ID. Use p, f, e, or r.' });
    }

    next();
}

module.exports = validateNumberId;
