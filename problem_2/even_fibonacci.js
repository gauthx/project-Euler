const isEven = (num) => !(num & 1);

function* fibonacci(range) {
  let currTerm = 1;
  let nextTerm = 2;
  yield currTerm;
  while (nextTerm < range) {
    yield nextTerm;
    const result = currTerm + nextTerm;
    currTerm = nextTerm;
    nextTerm = result;
  }
}

const fibIterator = fibonacci(4000000);

const sumOfEvenFibUpto4Million = fibIterator.filter(isEven).reduce((sum, num) => sum += num, 0);
console.log({sumOfEvenFibUpto4Million})
// setTimeout(() => console.log("will this??"), 0);
// console.log("or this???")
// console.log("or this???")
// console.log("or this???")
// console.log("or this???")
// console.log("or this???")
// console.log("or this???")
// console.log("or this???")
// console.log("or this???")
// console.log("or this???")
// console.log("or this???")
// console.log("or this???")

