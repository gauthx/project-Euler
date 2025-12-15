const isDivisibleBy = (num, divisor) => num % divisor === 0;

const isPrime = (num) => {
  for (let divisor = 2; divisor * divisor <= num; divisor++) {
    if (isDivisibleBy(num, divisor)) {
      return false;
    }
  }
  return true;
};

function* nextPrime() {
  for (let num = 2; num < Infinity; num++) {
    if (isPrime(num)) {
      yield num;
    }
  }
}

const nextPrimeIter = nextPrime();

const largestPrimeFactor = (num) => {
  let number = num;
  let primeNumber = nextPrimeIter.next().value;
  while (primeNumber <= number) {
    if (isDivisibleBy(number, primeNumber)) {
      console.log({primeNumber})
      number = number / primeNumber;
    }
    primeNumber = nextPrimeIter.next().value;
  }
};


largestPrimeFactor(600851475143);
