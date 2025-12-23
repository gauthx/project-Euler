const sumOfSqrs = (n) => n * (n + 1) * (2 * n + 1) / 6;

const sumOfNaturalNums = (n) => n * (n + 1) / 2;

const main = () => {
  const sumOfSquares = sumOfSqrs(100);
  const sqrOfSum = Math.pow(sumOfNaturalNums(100), 2);
  console.log(sqrOfSum - sumOfSquares);
};

main();
