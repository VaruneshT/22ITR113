const config = {
  windowSize: 10,
  timeoutMs: 500,
  apiEndpoints: {
    p: 'http://20.244.56.144/evaluation-service/primes',
    f: 'http://20.244.56.144/evaluation-service/fibo',
    e: 'http://20.244.56.144/evaluation-service/even',
    r: 'http://20.244.56.144/evaluation-service/rand'
  },
  validNumberIds: ['p', 'f', 'e', 'r']
};

module.exports = config;