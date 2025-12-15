const isDivisibleBy = (num, divisor) => num % divisor === 0;

const isPrime = (num) => {
  for (let divisor = 2; divisor * divisor <= num; divisor++) {
    if (isDivisibleBy(num, divisor)) {
      return false;
    }
  }
  return true;
};

const largestPrimeFactor = (num) => {
  for (let divisor = num; divisor > 0; divisor--) {
    if (isPrime(divisor) && isDivisibleBy(num, divisor)) {
      console.log(divisor);
      break;
    }
  }
};

largestPrimeFactor(600851475143);
