let sumPrimes = (num) => {
    let sieve = [], primes = [];
      for (let i = 2; i <= num; ++i) {
          if (!sieve[i]) {
              // i has not been marked -- it is prime
              primes.push(i);
              for (let j = i << 1; j <= num; j += i) {
                  sieve[j] = true;
              }
          }
      }
      let primeSum = primes.reduce((val1, val2) => val1 + val2 )
      return primeSum;
  }
  sumPrimes(10);
  