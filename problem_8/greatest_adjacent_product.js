const allProduct = (numbers) => {
  let product = 1;
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (number === 0) {
      return 0;
    }
    product *= number;
  }
  return product;
};

const productOfAll = (numbers) =>
  numbers.reduce((product, num) => product * num, 1);

const toNumbers = (stringOfNums) =>
  stringOfNums.split("").map((num) => parseInt(num));

const greatestAdjacentProduct = (input, size) => {
  let greatestProduct = 0;
  for (let index = 0; index <= (input.length - size); index++) {
    const adjacentNums = input.slice(index, index + size);
    const product = allProduct(toNumbers(adjacentNums));
    if (product > greatestProduct) {
      greatestProduct = product;
    }
  }
  return greatestProduct;
};

const main = () => {
  const input = Deno.readTextFileSync("./input.txt");
  console.log(greatestAdjacentProduct(input, 13));
};

main();
