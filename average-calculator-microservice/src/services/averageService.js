class AverageService {
    constructor() {
        this.numbers = [];
    }

    addNumber(number) {
        this.numbers.push(number);
    }

    calculateAverage() {
        if (this.numbers.length === 0) {
            return 0;
        }
        const sum = this.numbers.reduce((acc, num) => acc + num, 0);
        return sum / this.numbers.length;
    }
}

module.exports = AverageService;