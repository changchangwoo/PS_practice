const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
for (let i = 0; i < T; i++) {
  const M = Number(input.shift());
  const ARR = [];
  for (let j = 0; j < M / 10; j++) {
    ARR.push(...input.shift().split(" ").map(Number));
  }
  const arr = [];
  const result = [];
  for (let i = 0; i <= ARR.length - 1; i++) {
    arr.push(ARR[i]);
    if (i % 2 === 0) {
      let sortedArr = arr.sort((a, b) => a - b);
      result.push(sortedArr[Math.floor(sortedArr.length / 2)]);
    }
  }
  console.log(result.length);
  while (result.length > 10) {
    console.log(result.splice(0, 10).join(" "));
  }
  console.log(result.join(" "));
}
