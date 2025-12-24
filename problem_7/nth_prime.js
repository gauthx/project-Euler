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

const nthPrime = (n) => {
  let count = 0;
  while (count != n) {
    console.log(nextPrimeIter.next());
    count++;
  }
}; 


const main = (args) => {
  const n = +args[0]
  nthPrime(n );
}

main(Deno.args)