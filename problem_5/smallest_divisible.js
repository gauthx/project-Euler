const isDivisbleBy = (divisor, dividend) => divisor % dividend === 0;

const primeFactorsOf = (number) => {
  const primeFactors = [];
  let primeNum = 2;
  while (number !== 1) {
    if (isDivisbleBy(number, primeNum)) {
      primeFactors.push(primeNum);
      number = number / primeNum;
    } else {
      primeNum++;
    }
  }
  return primeFactors;
};
