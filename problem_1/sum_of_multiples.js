const isMultipleOf = (divisor, num) => num % divisor === 0;

const main = () => {
  let sum = 0;
  for (let num = 0; num < 1000; num++) {
    if (isMultipleOf(3, num) || isMultipleOf(5,num)) {
      sum += num;
    }
  }
  console.log("Sum of all multiples of 3 or 5 below 1000", sum);
};

main();