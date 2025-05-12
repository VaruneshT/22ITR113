function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'An authorization header is required' });
    }
    // Proceed to the next middleware or route handler
    next();
}

module.exports = authMiddleware;
