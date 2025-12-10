let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input.shift().split(" ").map(Number);

const sortedArr = arr.sort((a, b) => a - b);
let sum = 0;
for (let i = 0; i < sortedArr.length; i++) {
  let stack_sum = 0;
  for (let j = 0; j < i; j++) {
    stack_sum = stack_sum + sortedArr[j];
  }
  sum = stack_sum + sum + sortedArr[i];
}
console.log(sum);
