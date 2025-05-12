module.exports = {
    validateNumber: (input) => {
        const number = parseFloat(input);
        return !isNaN(number) && isFinite(number);
    }
};