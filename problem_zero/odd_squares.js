const sqr = (x) => x * x;

const main = () => {
  let sumOfOddSquares = 0n;
  for (let num = 1n; num <= 860000n; num += 2n) {
    sumOfOddSquares += sqr(num);
  }

  console.log("Sum of odd squares among first 860000 numbers", sumOfOddSquares);
};

main();
