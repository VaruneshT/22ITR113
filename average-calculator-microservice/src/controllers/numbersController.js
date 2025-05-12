class NumbersController {
    constructor(averageService) {
        this.averageService = averageService;
    }

    getAverage(req, res) {
        const numbers = this.averageService.getNumbers();
        const average = this.averageService.calculateAverage(numbers);
        res.json({ average });
    }

    addNumber(req, res) {
        const { number } = req.body;
        if (this.averageService.addNumber(number)) {
            res.status(201).json({ message: 'Number added successfully' });
        } else {
            res.status(400).json({ message: 'Invalid number' });
        }
    }
}

module.exports = NumbersController;