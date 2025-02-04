const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
console.log(N % 2 === 0 ? "CY" : "SK");
