const isPalindrome = (num) =>
  num.toString() === [...num.toString()].reverse().join("");

const main = () => {
  const palindromes = [];
  let currLargestPali = 0;
  for (let multiplicand = 999; multiplicand > 0; multiplicand--) {
    for (
      let multiplier = multiplicand;
      multiplier > 0 && multiplicand * multiplier > currLargestPali;
      multiplier--
    ) {
      const product = multiplicand * multiplier;

      if (isPalindrome(product)) {
        palindromes.push(product);
        currLargestPali = Math.max(currLargestPali, product);
        console.log(`${multiplicand} * ${multiplier} = ${product}`);
      }
    }
  }

  console.log("Largest palindrome", currLargestPali);
};

main();
